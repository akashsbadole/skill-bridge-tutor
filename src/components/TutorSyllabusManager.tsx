
import React, { useState } from "react";
import type { SyllabusItem } from "@/types/schema";
import { Button } from "@/components/ui/button";

interface TutorSyllabusManagerProps {
  initialSyllabus?: SyllabusItem[];
}

const TutorSyllabusManager: React.FC<TutorSyllabusManagerProps> = ({
  initialSyllabus = [],
}) => {
  const [syllabus, setSyllabus] = useState<SyllabusItem[]>(initialSyllabus);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const handleAdd = () => {
    if (!title.trim() || !content.trim()) return;
    const item: SyllabusItem = {
      id: Date.now().toString(),
      title,
      description,
      content,
      createdAt: new Date().toISOString(),
    };
    setSyllabus(prev => [...prev, item]);
    setTitle("");
    setDescription("");
    setContent("");
  };

  return (
    <div className="border rounded p-4 bg-white shadow max-w-lg w-full">
      <h3 className="font-bold text-lg mb-2">Syllabus & Content</h3>
      <div className="mb-3 flex flex-col gap-2">
        <input
          className="border rounded px-2 py-1"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)} />
        <input
          className="border rounded px-2 py-1"
          placeholder="Short description"
          value={description}
          onChange={e => setDescription(e.target.value)} />
        <textarea
          className="border rounded px-2 py-1"
          rows={3}
          placeholder="Content / Materials"
          value={content}
          onChange={e => setContent(e.target.value)} />
        <Button type="button" onClick={handleAdd} className="bg-tutorpro-teal hover:bg-tutorpro-blue">
          Add to Syllabus
        </Button>
      </div>
      <div>
        <h4 className="font-semibold mb-1 text-tutorpro-blue">Your Syllabus Items:</h4>
        <ul className="space-y-2">
          {syllabus.map(item => (
            <li key={item.id} className="border rounded p-2 bg-tutorpro-gray">
              <strong>{item.title}</strong>
              {item.description && <span className="block text-xs mb-1">{item.description}</span>}
              <span className="block text-sm">{item.content}</span>
            </li>
          ))}
          {syllabus.length === 0 && <li className="text-gray-400 text-sm">No syllabus items yet.</li>}
        </ul>
      </div>
    </div>
  );
};

export default TutorSyllabusManager;
