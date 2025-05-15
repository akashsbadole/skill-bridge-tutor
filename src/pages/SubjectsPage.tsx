
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getSubjects } from '@/data/tutors';
import { BookOpen } from 'lucide-react';

interface SubjectCategory {
  name: string;
  subjects: string[];
}

const SubjectsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const highlightedSubject = searchParams.get('name');
  
  // Organize subjects by category
  const categories: SubjectCategory[] = [
    {
      name: 'Academic',
      subjects: ['Mathematics', 'Calculus', 'Statistics', 'Physics', 'Chemistry', 'Biology', 'English', 'Literature', 'History']
    },
    {
      name: 'Languages',
      subjects: ['Spanish', 'English as a Second Language', 'French', 'German', 'Mandarin', 'Japanese', 'Korean']
    },
    {
      name: 'Arts & Music',
      subjects: ['Piano', 'Music Theory', 'Composition', 'Guitar', 'Painting', 'Drawing', 'Photography']
    },
    {
      name: 'Technology',
      subjects: ['Programming', 'Web Development', 'Python', 'JavaScript', 'Data Science', 'Machine Learning']
    },
    {
      name: 'Test Preparation',
      subjects: ['SAT', 'ACT', 'GRE', 'GMAT', 'TOEFL', 'IELTS', 'AP Exams']
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Browse Subjects</h1>
      <p className="text-gray-600 mb-8">Find tutors by subject area</p>
      
      <div className="space-y-10">
        {categories.map((category, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mb-4 text-tutorpro-blue">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.subjects.map((subject, subIndex) => (
                <Link 
                  key={subIndex} 
                  to={`/tutors?subject=${encodeURIComponent(subject)}`}
                  className={`flex items-center p-4 rounded-lg transition-all ${
                    highlightedSubject === subject 
                      ? 'bg-tutorpro-teal text-white shadow-md' 
                      : 'bg-white hover:bg-tutorpro-gray shadow'
                  }`}
                >
                  <BookOpen className={`mr-3 h-5 w-5 ${highlightedSubject === subject ? 'text-white' : 'text-tutorpro-blue'}`} />
                  <span>{subject}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectsPage;
