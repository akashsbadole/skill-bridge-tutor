
export type UserRole = "student" | "tutor" | "moderator" | "superadmin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
}

export interface Tutor extends User {
  qualifications: string[];
  experience: string;
  subjects: string[];
  bio: string;
  education: string[];
  languages: string[];
  hourlyRate: number;
  location: string;
  syllabus: SyllabusItem[];
}

export interface SyllabusItem {
  id: string;
  title: string;
  description: string;
  content: string;
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: string;
  // You can add conversationId if supporting group chats
}

export interface SupportTicket {
  id: string;
  userId: string;
  subject: string;
  description: string;
  status: "open" | "closed";
  createdAt: string;
}
