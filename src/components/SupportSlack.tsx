
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const SupportSlack: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    // In real code, POST to your backend/slack webhook integration!
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border rounded bg-white shadow p-4 max-w-md w-full text-center">
        <h3 className="font-bold text-tutorpro-blue mb-2">Support Request Sent</h3>
        <p className="text-sm text-gray-700">Our team will contact you on Slack or email. Thank you!</p>
      </div>
    );
  }
  return (
    <div className="border rounded bg-white shadow p-4 max-w-md w-full">
      <h3 className="font-bold text-lg mb-3">Contact Support</h3>
      <input
        className="border rounded px-2 py-1 w-full mb-2"
        placeholder="Subject"
        value={subject}
        onChange={e => setSubject(e.target.value)}
      />
      <textarea
        className="border rounded px-2 py-1 w-full mb-2"
        placeholder="Describe your issue"
        rows={3}
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <Button
        className="bg-tutorpro-teal hover:bg-tutorpro-blue w-full"
        onClick={handleSend}
        disabled={!subject.trim() || !description.trim()}
      >
        Send to Slack
      </Button>
    </div>
  );
};

export default SupportSlack;
