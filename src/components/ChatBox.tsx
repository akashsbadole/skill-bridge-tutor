
import React, { useState } from "react";
import type { Message, User } from "@/types/schema";
import { Button } from "@/components/ui/button";

interface ChatBoxProps {
  currentUser: User;
  chatPartner: User;
  initialMessages?: Message[];
}

const ChatBox: React.FC<ChatBoxProps> = ({
  currentUser,
  chatPartner,
  initialMessages = [],
}) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    // In real code, send to backend and receive new/updated messages
    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: currentUser.id,
      receiverId: chatPartner.id,
      content: input,
      createdAt: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  return (
    <div className="rounded border p-4 max-w-md w-full bg-white shadow">
      <div className="h-60 overflow-y-auto mb-2 bg-gray-50 rounded p-2">
        {messages.map((msg) => (
          <div key={msg.id} className={`mb-2 flex ${msg.senderId === currentUser.id ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-xs px-3 py-2 rounded-lg ${msg.senderId === currentUser.id ? "bg-tutorpro-blue text-white" : "bg-tutorpro-gray text-tutorpro-blue"}`}>
              <div className="text-xs">
                {msg.content}
              </div>
              <div className="text-[10px] text-gray-400 mt-1 text-right">
                {new Date(msg.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="border rounded px-3 py-2 flex-grow"
          value={input}
          placeholder="Type your message..."
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" ? handleSend() : undefined}
        />
        <Button onClick={handleSend} className="bg-tutorpro-teal hover:bg-tutorpro-blue">
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatBox;
