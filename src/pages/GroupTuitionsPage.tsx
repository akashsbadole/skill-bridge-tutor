
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

// Demo group tuition data
const groupTuitions = [
  {
    id: "gt1",
    title: "SAT Math Group (Max 5)",
    tutorName: "Alice Kumar",
    subject: "Math",
    description: "Small group for SAT Math prep",
    difficulty: "Intermediate",
    schedule: "Saturdays 4pm",
    fee: 30,
    maxStudents: 5,
    enrolledStudents: 3,
  },
  {
    id: "gt2",
    title: "Beginner Python Bootcamp",
    tutorName: "Samir Patel",
    subject: "Computer Science",
    description: "Learn Python fast in a collaborative group.",
    difficulty: "Beginner",
    schedule: "Wednesdays 7pm",
    fee: 25,
    maxStudents: 8,
    enrolledStudents: 8,
  }
];

export default function GroupTuitionsPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
      <h1 className="text-2xl font-bold mb-4">Join a Group Tuition</h1>
      <p className="mb-8 text-gray-600">Explore ongoing classes and collaborative learning groups led by expert tutors.</p>
      <div className="grid gap-6">
        {groupTuitions.map((g) => (
          <Card key={g.id} className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <CardContent className="flex-1 flex flex-col sm:flex-row sm:items-center py-4">
              <div className="flex-1">
                <h2 className="font-semibold text-lg">{g.title}</h2>
                <div className="text-sm text-gray-500">By {g.tutorName} | Subject: {g.subject} | Level: {g.difficulty}</div>
                <div className="mt-1 text-sm">{g.description}</div>
                <div className="mt-2 flex gap-3 text-xs text-gray-500">
                  <span>Schedule: {g.schedule}</span>
                  <span>
                    <User size={14} className="inline-block mr-1" />
                    {g.enrolledStudents}/{g.maxStudents} enrolled
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 min-w-[120px]">
                <div className="font-bold text-tutorpro-blue">${g.fee} / student</div>
                <Button size="sm" disabled={g.enrolledStudents >= g.maxStudents}>
                  {g.enrolledStudents >= g.maxStudents ? "Full" : "Join"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-10 text-center text-gray-400 text-sm">
        Want to host a new group session? <Link to="/tutor-dashboard" className="underline text-tutorpro-blue">Go to Tutor Dashboard</Link>
      </div>
    </div>
  );
}
