
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface BookSessionFormProps {
  tutorName: string;
  onSubmit: (requirement: { subject: string; description: string; sessionsRequested: number }) => void;
}

const BookSessionForm: React.FC<BookSessionFormProps> = ({ tutorName, onSubmit }) => {
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [sessions, setSessions] = useState(1);

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit({ subject, description, sessionsRequested: sessions });
    setOpen(false);
    setSubject("");
    setDescription("");
    setSessions(1);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="mt-4 bg-tutorpro-teal hover:bg-tutorpro-blue">
          Book a Session
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book a Session with {tutorName}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleFormSubmit} className="space-y-4 mt-2">
          <div>
            <label className="block mb-1 text-sm font-medium">Subject</label>
            <Input
              required
              value={subject}
              onChange={e => setSubject(e.target.value)}
              placeholder="E.g. Calculus"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">What do you want to learn?</label>
            <Textarea
              required
              rows={3}
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Describe your learning goal or requirement"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Number of Sessions</label>
            <Input
              required
              type="number"
              min={1}
              max={20}
              value={sessions}
              onChange={e => setSessions(Number(e.target.value))}
              className="w-24"
            />
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-tutorpro-blue hover:bg-tutorpro-teal w-full">
              Submit Requirement
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookSessionForm;
