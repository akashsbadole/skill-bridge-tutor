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

// Group Tuitions
export interface GroupTuition {
  id: string;
  title: string;
  tutorId: string;
  tutorName: string;
  subject: string;
  description?: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  schedule: string; // e.g., "Every Saturday 4pm"
  fee: number; // per student
  maxStudents: number;
  enrolledStudents: number;
}

// Forum Discussion
export interface ForumPost {
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  createdAt: string;
  replies: ForumReply[];
}

export interface ForumReply {
  id: string;
  postId: string;
  content: string;
  authorId: string;
  authorName: string;
  createdAt: string;
}

// Tutor Training Resource
export interface TrainingResource {
  id: string;
  title: string;
  description: string;
  url: string;
  type: "article" | "video" | "ebook" | "quiz";
  createdAt: string;
}

// Customer Support Contact - inherit SupportTicket for ticket submission, for phone/email UI use Hardcoded

// Payment Integration (UI only)
export interface PaymentRecord {
  id: string;
  userId: string;
  amount: number;
  status: "pending" | "paid" | "failed";
  createdAt: string;
}

// Book a Session Requirement
export interface SessionRequirement {
  id: string;
  studentId: string;
  subject: string;
  description: string;
  sessionsRequested: number;
  status: "pending" | "accepted" | "completed" | "cancelled";
  createdAt: string;
  assignedTutorId?: string; // tutor whom user accepted
  responses: SessionRequirementResponse[];
}

// Tutor's response to a requirement
export interface SessionRequirementResponse {
  id: string;
  tutorId: string;
  tutorName: string;
  message: string;
  sentAt: string;
  accepted?: boolean;
}

// Points system (simple)
export interface PointTransaction {
  id: string;
  userId: string;
  amount: number;
  reason: string;
  createdAt: string;
}

// User point summary
export interface UserPoints {
  userId: string;
  totalPoints: number;
  transactions: PointTransaction[];
}
