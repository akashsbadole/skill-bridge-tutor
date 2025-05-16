
import React from "react";
import ChatBox from "@/components/ChatBox";
import TutorSyllabusManager from "@/components/TutorSyllabusManager";
import SupportSlack from "@/components/SupportSlack";
import type { User } from "@/types/schema";

const demoStudent: User = {
  id: "1",
  name: "Student One",
  email: "student1@test.com",
  role: "student",
};

const demoTutor: User = {
  id: "2",
  name: "Tutor Pro",
  email: "tutor@test.com",
  role: "tutor",
};

const DemoDashboard: React.FC = () => (
  <div className="max-w-5xl mx-auto py-10 grid gap-8">
    <h1 className="text-2xl font-bold mb-4">TutorPro Features Demo</h1>
    {/* Chat between a demo student and tutor */}
    <div>
      <h2 className="text-xl font-semibold text-tutorpro-teal mb-3">Chat Example</h2>
      <ChatBox currentUser={demoStudent} chatPartner={demoTutor} />
    </div>
    {/* Syllabus/content management for tutors */}
    <div>
      <h2 className="text-xl font-semibold text-tutorpro-teal mb-3">Tutor Syllabus/Content</h2>
      <TutorSyllabusManager />
    </div>
    {/* Support system */}
    <div>
      <h2 className="text-xl font-semibold text-tutorpro-teal mb-3">Support System (Slack)</h2>
      <SupportSlack />
    </div>
  </div>
);

export default DemoDashboard;
