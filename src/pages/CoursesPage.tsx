
import React, { useState } from "react";
import CourseCard from "@/components/CourseCard";

type Course = {
  id: string;
  title: string;
  tutor: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: number; // in hours
  fee: number;
  description: string;
};

const demoCourses: Course[] = [
  {
    id: "c1",
    title: "Intro to Calculus",
    tutor: "Dr. Linh Tran",
    difficulty: "Beginner",
    duration: 15,
    fee: 45,
    description: "Understand the basics of derivatives, integrals, and limits.",
  },
  {
    id: "c2",
    title: "Web Development Bootcamp",
    tutor: "Alex Kim",
    difficulty: "Intermediate",
    duration: 40,
    fee: 120,
    description: "Learn HTML, CSS, JavaScript, and React by building projects.",
  },
  {
    id: "c3",
    title: "Advanced Organic Chemistry",
    tutor: "Prof. Smith",
    difficulty: "Advanced",
    duration: 25,
    fee: 80,
    description: "Deep dive into organic chemistry mechanisms and synthesis.",
  },
  // Add more demo courses if needed
];

export default function CoursesPage() {
  const [difficulty, setDifficulty] = useState("");
  const [duration, setDuration] = useState(""); // e.g., "lt20", "20to40", "gt40"
  const [maxFee, setMaxFee] = useState("");

  // Filtering logic
  const filteredCourses = demoCourses.filter((course) => {
    let match = true;
    if (difficulty && course.difficulty !== difficulty) match = false;

    if (duration) {
      if (duration === "lt20" && course.duration >= 20) match = false;
      if (duration === "20to40" && (course.duration < 20 || course.duration > 40)) match = false;
      if (duration === "gt40" && course.duration <= 40) match = false;
    }

    if (maxFee && course.fee > parseInt(maxFee)) match = false;

    return match;
  });

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Browse Courses</h1>
      <p className="text-gray-600 mb-8">Find courses by difficulty, duration, and fee</p>

      {/* Filter */}
      <form className="flex flex-wrap gap-4 mb-8 items-end">
        <div>
          <label className="block mb-1 font-medium">Difficulty</label>
          <select
            className="border px-3 py-2 rounded"
            value={difficulty}
            onChange={e => setDifficulty(e.target.value)}
          >
            <option value="">All</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Duration</label>
          <select
            className="border px-3 py-2 rounded"
            value={duration}
            onChange={e => setDuration(e.target.value)}
          >
            <option value="">All</option>
            <option value="lt20">&lt; 20 hrs</option>
            <option value="20to40">20 - 40 hrs</option>
            <option value="gt40">&gt; 40 hrs</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Max Fee (USD)</label>
          <input
            type="number"
            className="border px-3 py-2 rounded w-[120px]"
            min={0}
            placeholder="Any"
            value={maxFee}
            onChange={e => setMaxFee(e.target.value)}
          />
        </div>
      </form>

      {filteredCourses.length === 0 ? (
        <div className="py-12 text-center text-gray-500">No courses match your criteria.</div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}
