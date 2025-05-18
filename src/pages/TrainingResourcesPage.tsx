
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, BookOpen, Video } from "lucide-react";

const demoResources = [
  {
    id: "r1",
    title: "Advanced Tutoring Strategies",
    description: "Comprehensive guide for tutors: Engagement, assessment, and more.",
    url: "#",
    type: "article",
  },
  {
    id: "r2",
    title: "Classroom Management Tips (Video)",
    description: "Short training video for tutors on classroom management.",
    url: "#",
    type: "video",
  },
  {
    id: "r3",
    title: "Quiz: Identifying Learning Styles",
    description: "Interactive quiz to help tutors discover student learning preferences.",
    url: "#",
    type: "quiz",
  },
];

function iconForType(type: string) {
  if (type === "article") return <FileText className="w-5 h-5 text-tutorpro-blue" />;
  if (type === "video") return <Video className="w-5 h-5 text-tutorpro-blue" />;
  return <BookOpen className="w-5 h-5 text-tutorpro-blue" />;
}

export default function TrainingResourcesPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
      <h1 className="text-2xl font-bold mb-4">Tutor Training & Resources</h1>
      <p className="mb-6 text-gray-500">
        Develop your skills with our curated selection of resources for tutoring excellence.
      </p>
      <div className="grid gap-6">
        {demoResources.map(r => (
          <Card key={r.id} className="flex items-center gap-2">
            <CardContent className="flex items-center gap-4 py-4">
              {iconForType(r.type)}
              <div>
                <div className="font-medium text-tutorpro-blue underline"><a href={r.url}>{r.title}</a></div>
                <div className="text-gray-600 text-sm">{r.description}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-10 text-gray-400 text-center text-xs">
        Want to contribute? Suggest a resource to support@tutorpro.com.
      </div>
    </div>
  );
}
