
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";

type Course = {
  id: string;
  title: string;
  tutor: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: number;
  fee: number;
  description: string;
};

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-2">
          <Book className="text-tutorpro-blue mr-2" size={20} />
          <span className="font-bold text-lg">{course.title}</span>
        </div>
        <div className="text-sm text-gray-600 mb-2">By <span className="font-semibold">{course.tutor}</span></div>
        <div className="text-xs text-gray-500 mb-3">{course.description}</div>
        <div className="flex flex-wrap gap-3 mt-auto">
          <span className="bg-tutorpro-gray text-tutorpro-blue text-xs px-2 py-1 rounded-full">{course.difficulty}</span>
          <span className="bg-tutorpro-gray text-xs px-2 py-1 rounded-full">{course.duration} hrs</span>
          <span className="bg-tutorpro-gray text-xs px-2 py-1 rounded-full">${course.fee}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 border-t justify-end">
        {/* In real app, link to course page or booking */}
        <Button size="sm" className="bg-tutorpro-teal hover:bg-tutorpro-blue">View Course</Button>
      </CardFooter>
    </Card>
  );
}
