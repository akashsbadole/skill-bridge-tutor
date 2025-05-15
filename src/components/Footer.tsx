
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-tutorpro-blue text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              <span className="text-xl font-bold">TutorPro</span>
            </Link>
            <p className="mt-4 text-sm">
              Connecting students with expert tutors for personalized learning experiences.
            </p>
            <div className="flex mt-6 gap-4">
              <a href="#" className="hover:text-tutorpro-lightblue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-tutorpro-lightblue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-tutorpro-lightblue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-tutorpro-lightblue transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Students</h3>
            <ul className="space-y-2">
              <li><Link to="/tutors" className="hover:text-tutorpro-lightblue transition-colors">Find Tutors</Link></li>
              <li><Link to="/subjects" className="hover:text-tutorpro-lightblue transition-colors">Browse Subjects</Link></li>
              <li><Link to="/how-it-works" className="hover:text-tutorpro-lightblue transition-colors">How It Works</Link></li>
              <li><Link to="/pricing" className="hover:text-tutorpro-lightblue transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Tutors</h3>
            <ul className="space-y-2">
              <li><Link to="/become-tutor" className="hover:text-tutorpro-lightblue transition-colors">Become a Tutor</Link></li>
              <li><Link to="/tutor-resources" className="hover:text-tutorpro-lightblue transition-colors">Resources</Link></li>
              <li><Link to="/tutor-faq" className="hover:text-tutorpro-lightblue transition-colors">FAQ</Link></li>
              <li><Link to="/success-stories" className="hover:text-tutorpro-lightblue transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-tutorpro-lightblue transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-tutorpro-lightblue transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-tutorpro-lightblue transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-tutorpro-lightblue transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-tutorpro-teal/30 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} TutorPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
