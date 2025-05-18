
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const demoPosts = [
  {
    id: "post1",
    title: "How do I improve my SAT Reading score?",
    content: "I'm struggling with the reading section—any tips for time management or practice?",
    authorName: "Emily Z.",
    createdAt: "2024-05-18",
    replies: [
      { id: "reply1", content: "Try timed practice, and always review explanations.", authorName: "Alex T.", createdAt: "2024-05-19" }
    ],
  },
  {
    id: "post2",
    title: "Best online tools for learning French?",
    content: "Are there any resources that helped you master pronunciation or grammar?",
    authorName: "Ryan W.",
    createdAt: "2024-05-15",
    replies: []
  }
];

export default function ForumPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <MessageSquare className="w-6 h-6 text-tutorpro-blue" />
        Forum & Community
      </h1>
      <div className="mb-6">
        <Button variant="outline" className="mr-2">New Post</Button>
        <span className="text-gray-400 text-xs ml-2">Posting is demo only.</span>
      </div>
      <div className="flex flex-col gap-6">
        {demoPosts.map(post => (
          <Card key={post.id}>
            <CardContent className="py-4 px-5">
              <h2 className="font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-1">By {post.authorName} · {post.createdAt}</p>
              <div className="mb-3">{post.content}</div>
              <div className="ml-2 border-l-2 border-tutorpro-gray pl-4 text-sm text-gray-600 flex flex-col gap-2">
                {post.replies.length > 0 ? (
                  post.replies.map(rep =>
                    <div key={rep.id}>
                      <span className="font-semibold">{rep.authorName}</span>: {rep.content} <span className="text-xs text-gray-400">({rep.createdAt})</span>
                    </div>
                  )
                ) : (
                  <span className="text-xs text-gray-400">No replies yet.</span>
                )}
              </div>
              <div className="flex mt-2">
                <Button size="sm" variant="ghost">Reply</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
