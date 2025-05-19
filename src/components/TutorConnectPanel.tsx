
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ChatBox from "@/components/ChatBox";
import { Message } from "@/types/schema";
import { User } from "@/types/schema";
import { Star, MessageSquare, Award } from "lucide-react";

// Dummy tutors that "respond" to the requirements (simulate 2/20 for demo)
const sampleTutors = [
  {
    id: "1",
    name: "James Wilson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: "2",
    name: "David Kim",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

interface TutorConnectPanelProps {
  requirement: {
    subject: string;
    description: string;
    sessionsRequested: number;
  };
  onAcceptTutor: (tutorId: string) => void;
  acceptedTutorId?: string;
  chatUnlocked?: boolean;
  demoUser: User;
  points: number;
  onPointsChange: (n: number) => void;
}

// UI panel for incoming bids from tutors to connect/chat, gated by accept
export const TutorConnectPanel: React.FC<TutorConnectPanelProps> = ({
  requirement,
  onAcceptTutor,
  acceptedTutorId,
  chatUnlocked,
  demoUser,
  points,
  onPointsChange,
}) => {
  // Simulate tutors not accepted yet: can only unlock chat after accept
  const [showChat, setShowChat] = useState(false);

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-2">
          <Award size={18} className="text-yellow-500" />
          <span className="font-semibold text-tutorpro-blue">My Points: {points}</span>
        </div>
        <div className="mb-4">
          <div className="text-gray-700 mb-1"><strong>Your Session Requirement:</strong></div>
          <div className="text-gray-700 text-sm">
            <span className="font-semibold">Subject:</span> {requirement.subject}<br />
            <span className="font-semibold">Details:</span> {requirement.description}<br />
            <span className="font-semibold">Sessions:</span> {requirement.sessionsRequested}
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">Tutors Interested in Your Request:</div>
          <div className="flex gap-4 flex-wrap">
            {sampleTutors.map(tutor => (
              <div key={tutor.id} className="border border-tutorpro-gray rounded p-3 flex flex-col items-center w-44">
                <img src={tutor.avatar} alt={tutor.name} className="h-10 w-10 rounded-full mb-1" />
                <span className="text-sm font-semibold">{tutor.name}</span>
                <span className="mb-1 text-xs text-gray-600"><Star className="inline h-3 w-3 text-yellow-500 mb-0.5" /> 4.{Math.floor(Math.random()*2)+7} / 5</span>
                {!acceptedTutorId ? (
                  <Button
                    className="bg-tutorpro-blue w-full mt-2"
                    onClick={() => {
                      onAcceptTutor(tutor.id);
                      onPointsChange(points + 10);
                      setShowChat(true);
                    }}
                  >
                    Accept & Unlock Chat
                  </Button>
                ) : acceptedTutorId === tutor.id ? (
                  <Button className="bg-tutorpro-teal w-full mt-2" disabled>
                    Chat Unlocked
                  </Button>
                ) : (
                  <Button className="bg-gray-200 w-full mt-2 text-gray-500" disabled>
                    Not Accepted
                  </Button>
                )}
              </div>
            ))}
          </div>
          {acceptedTutorId && showChat && (
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare size={18} className="text-tutorpro-blue" />
                <span className="font-semibold">Chat with your tutor ({sampleTutors.find(t => t.id === acceptedTutorId)?.name}):</span>
              </div>
              <ChatBox
                currentUser={demoUser}
                chatPartner={{
                  id: acceptedTutorId,
                  name: sampleTutors.find(t => t.id === acceptedTutorId)!.name,
                  email: "",
                  role: "tutor",
                }}
                initialMessages={[
                  {
                    id: "init",
                    senderId: acceptedTutorId,
                    receiverId: demoUser.id,
                    content: "Hi! Excited to help. When can we start?",
                    createdAt: new Date().toISOString(),
                  },
                ]}
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
