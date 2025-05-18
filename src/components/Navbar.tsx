
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-tutorpro-blue" />
          <span className="text-xl font-bold text-tutorpro-blue">TutorPro</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/tutors" className="text-tutorpro-darkgray hover:text-tutorpro-teal transition-colors">
            Find Tutors
          </Link>
          <Link to="/courses" className="text-tutorpro-darkgray hover:text-tutorpro-teal transition-colors">
            Course Search
          </Link>
          <Link to="/group-tuitions" className="text-tutorpro-darkgray hover:text-tutorpro-teal transition-colors">
            Group Tuitions
          </Link>
          <Link to="/forum" className="text-tutorpro-darkgray hover:text-tutorpro-teal transition-colors">
            Forum
          </Link>
          <Link to="/training-resources" className="text-tutorpro-darkgray hover:text-tutorpro-teal transition-colors">
            Tutor Training
          </Link>
          <Link to="/bookings" className="text-tutorpro-darkgray hover:text-tutorpro-teal transition-colors">
            Bookings
          </Link>
          <Link to="/payment" className="text-tutorpro-darkgray hover:text-tutorpro-teal transition-colors">
            Payment
          </Link>
          <Link to="/tutor-dashboard" className="text-tutorpro-darkgray hover:text-tutorpro-teal transition-colors">
            Tutor Dashboard
          </Link>
          <Link to="/support" className="text-tutorpro-darkgray hover:text-tutorpro-teal transition-colors">
            Support
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="outline" className="hidden md:inline-flex">Log In</Button>
          </Link>
          <Link to="/signup">
            <Button variant="default" className="bg-tutorpro-teal hover:bg-tutorpro-blue">Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
