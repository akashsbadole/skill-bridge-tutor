
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
          <Link to="/subjects" className="text-tutorpro-darkgray hover:text-tutorpro-teal transition-colors">
            Subjects
          </Link>
          <Link to="/how-it-works" className="text-tutorpro-darkgray hover:text-tutorpro-teal transition-colors">
            How It Works
          </Link>
          <Link to="/become-tutor" className="text-tutorpro-darkgray hover:text-tutorpro-teal transition-colors">
            Become a Tutor
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
