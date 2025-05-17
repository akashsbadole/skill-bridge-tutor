import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react';
import { demoTutors } from '@/data/tutors';

const demoTutor = demoTutors[0];

const demoReviews = [
  {
    id: 1,
    name: "Samantha Lee",
    rating: 5,
    comment:
      "Amazing tutor! Broke down difficult concepts and was so patient in every session.",
    date: "2024-03-14",
  },
  {
    id: 2,
    name: "Jonathan Kim",
    rating: 4,
    comment: "Very knowledgeable and helpful, highly recommend.",
    date: "2024-04-02",
  },
];

function ReviewStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= rating ? "text-yellow-500" : "text-gray-300"}>★</span>
      ))}
    </div>
  );
}

export default function TutorProfilePage() {
  const { id: tutorId } = useParams<{ id: string }>();
  const [reviews, setReviews] = useState(demoReviews);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewData, setReviewData] = useState({ name: '', rating: 5, comment: '' });

  function handleReviewChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
  }
  function handleRatingChange(rating: number) {
    setReviewData((r) => ({ ...r, rating }));
  }
  function handleReviewSubmit(e: React.FormEvent) {
    e.preventDefault();
    setReviews((prev) => [
      { id: Date.now(), ...reviewData, date: new Date().toISOString().slice(0, 10) },
      ...prev,
    ]);
    setReviewData({ name: '', rating: 5, comment: '' });
    setShowReviewForm(false);
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-3xl">
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-start gap-6">
            <Avatar className="h-24 w-24 border-2 border-tutorpro-teal">
              <img src={demoTutor.imageUrl} alt={`${demoTutor.name}'s profile picture`} />
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold mb-2">{demoTutor.name}</h1>
              <p className="text-gray-600">{demoTutor.experience}</p>
              <div className="flex items-center mt-1">
                <div className="flex items-center text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1 text-sm font-medium">{demoTutor.rating.toFixed(1)}</span>
                </div>
                <span className="mx-2 text-gray-400 text-sm">•</span>
                <span className="text-sm text-gray-600">{demoTutor.reviews} reviews</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Subjects</h2>
            <div className="flex flex-wrap gap-2">
              {demoTutor.subjects.map((subject, index) => (
                <span
                  key={index}
                  className="inline-flex text-xs bg-tutorpro-gray text-tutorpro-blue px-2 py-1 rounded-full"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">About Me</h2>
            <p className="text-gray-700">{demoTutor.bio}</p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Education</h2>
            <ul>
              {demoTutor.education.map((edu, index) => (
                <li key={index} className="text-gray-700">{edu}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
      <section className="mt-10">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl font-bold">Reviews & Ratings</h2>
          <button
            className="bg-tutorpro-blue hover:bg-tutorpro-teal text-white py-1 px-3 rounded text-sm"
            onClick={() => setShowReviewForm((v) => !v)}
          >
            {showReviewForm ? "Cancel" : "Leave a Review"}
          </button>
        </div>
        {showReviewForm && (
          <form
            className="border border-tutorpro-gray p-4 rounded mb-6 animate-fade-in"
            onSubmit={handleReviewSubmit}
          >
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="border rounded px-3 py-2 w-full"
                value={reviewData.name}
                onChange={handleReviewChange}
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    type="button"
                    key={n}
                    aria-label={`${n} Star${n > 1 ? 's' : ''}`}
                    className={`${n <= reviewData.rating ? "text-yellow-500" : "text-gray-400"} text-xl`}
                    onClick={() => handleRatingChange(n)}
                  >★</button>
                ))}
              </div>
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">Comment</label>
              <textarea
                name="comment"
                rows={3}
                required
                className="border rounded px-3 py-2 w-full"
                value={reviewData.comment}
                onChange={handleReviewChange}
              />
            </div>
            <button
              type="submit"
              className="bg-tutorpro-blue hover:bg-tutorpro-teal text-white py-2 px-4 mt-2 rounded"
            >
              Submit Review
            </button>
          </form>
        )}
        <div>
          {reviews.map((review) => (
            <div key={review.id} className="mb-4 pb-4 border-b border-gray-200">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-semibold">{review.name}</span>
                <ReviewStars rating={review.rating} />
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
              <div className="text-gray-700">{review.comment}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Book a Session</h2>
        <p className="text-gray-700">
          Interested in learning from {demoTutor.name}? Contact them to schedule a session!
        </p>
        <Button className="mt-4 bg-tutorpro-teal hover:bg-tutorpro-blue">Contact Tutor</Button>
      </section>
    </div>
  );
}
