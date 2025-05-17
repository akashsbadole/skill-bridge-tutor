
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";

const demoBookings = [
  {
    id: 1,
    tutor: "Jane Smith",
    subject: "Math",
    date: "2025-05-21",
    time: "17:00",
    status: "Upcoming",
  },
  {
    id: 2,
    tutor: "Alex Brown",
    subject: "Physics",
    date: "2025-05-18",
    time: "10:30",
    status: "Completed",
  },
  {
    id: 3,
    tutor: "Sara Lee",
    subject: "Chemistry",
    date: "2025-06-01",
    time: "15:00",
    status: "Upcoming",
  },
];

export default function BookingsPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>
      <div className="flex flex-col gap-5">
        {demoBookings.map((b) => (
          <Card key={b.id} className="w-full">
            <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 p-4">
              <div className="flex-1 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex items-center gap-2">
                  <User className="text-tutorpro-blue w-5 h-5" />
                  <span className="font-semibold">{b.tutor}</span>
                </div>
                <div className="text-gray-600">
                  <span className="font-medium">{b.subject}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{b.date}</span>
                  <Clock className="w-4 h-4 ml-2" />
                  <span>{b.time}</span>
                </div>
                <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                  b.status === "Upcoming"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-500"
                }`}>
                  {b.status}
                </span>
              </div>
              <div className="flex gap-2 mt-2 md:mt-0">
                {b.status === "Upcoming" && (
                  <>
                    <Button size="sm" variant="outline">Reschedule</Button>
                    <Button size="sm" variant="destructive">Cancel</Button>
                  </>
                )}
                {b.status === "Completed" && (
                  <Button size="sm" variant="outline">Leave Review</Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center text-gray-400 text-sm">
        Note: This is a demo. Booking/reschedule/cancel actions are for illustration only.
      </div>
    </div>
  );
}
