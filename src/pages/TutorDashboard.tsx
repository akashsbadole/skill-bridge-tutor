
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User, Book, Calendar, Clock } from "lucide-react";

const stats = [
  { icon: <Calendar className="w-4 h-4" />, label: "Upcoming Sessions", value: 4 },
  { icon: <Book className="w-4 h-4" />, label: "Courses", value: 3 },
  { icon: <Clock className="w-4 h-4" />, label: "Hours Taught", value: 28 },
  { icon: <User className="w-4 h-4" />, label: "Students", value: 11 },
];

export default function TutorDashboard() {
  return (
    <div className="container mx-auto max-w-4xl p-6">
      <h1 className="text-3xl font-bold mb-6">Tutor Dashboard</h1>
      <section className="mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Card key={i}>
              <CardContent className="flex flex-col items-center p-5">
                <div className="mb-2 text-tutorpro-blue">{s.icon}</div>
                <div className="text-lg font-semibold">{s.value}</div>
                <div className="text-xs text-gray-600">{s.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <h2 className="font-semibold mb-2">Next Session</h2>
              <p>No upcoming session scheduled.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="font-semibold mb-2">Recent Activity</h2>
              <p>Recent bookings, reviews, and activity will appear here.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <div className="mt-10 text-gray-400 text-center text-sm">
        This dashboard is a demo layout. Add/manage students, bookings, stats here as needed.
      </div>
    </div>
  );
}
