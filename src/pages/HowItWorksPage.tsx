
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Search, Calendar, MessageSquare, Star } from 'lucide-react';

const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-tutorpro-teal" />,
      title: "Find the Perfect Tutor",
      description: "Search through our extensive database of qualified tutors. Filter by subject, price range, availability, and more to find the perfect match for your learning needs.",
      detail: "Our search and filtering system helps you narrow down options based on educational background, teaching experience, hourly rates, and student reviews."
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-tutorpro-teal" />,
      title: "Connect and Discuss Your Needs",
      description: "Message tutors directly to discuss your learning goals, ask questions about their teaching methods, and determine if they're the right fit for you.",
      detail: "Our secure messaging platform allows you to communicate with potential tutors before booking, ensuring you find someone who matches your learning style."
    },
    {
      icon: <Calendar className="h-12 w-12 text-tutorpro-teal" />,
      title: "Book Your Sessions",
      description: "Once you've found your ideal tutor, schedule sessions at times that work for both of you. Our flexible booking system allows for both one-time and recurring lessons.",
      detail: "Manage your entire tutoring schedule through our platform. Receive reminders and easily reschedule if needed."
    },
    {
      icon: <Star className="h-12 w-12 text-tutorpro-teal" />,
      title: "Learn and Provide Feedback",
      description: "After your sessions, rate and review your tutor to help them improve and to guide other students in their selection process.",
      detail: "Your feedback helps us maintain quality standards and assists other students in making informed decisions when choosing tutors."
    }
  ];

  const benefits = [
    {
      title: "Verified Tutors",
      description: "All tutors undergo a thorough verification process including identity checks and credential verification."
    },
    {
      title: "Secure Payments",
      description: "Our protected payment system ensures you only pay for completed sessions."
    },
    {
      title: "Flexible Learning",
      description: "Choose between online or in-person sessions based on your preference and location."
    },
    {
      title: "Quality Assurance",
      description: "Our rating system and moderation team ensure consistently high teaching standards."
    },
    {
      title: "Specialized Expertise",
      description: "Find tutors for niche subjects and specialized areas of study."
    },
    {
      title: "Learning Resources",
      description: "Access additional study materials and resources shared by tutors."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-tutorpro-gray py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">How TutorPro Works</h1>
            <p className="text-lg text-gray-600 mb-8">Your simple path to academic success and skill development</p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="flex-shrink-0 p-4 bg-tutorpro-gray rounded-full">
                  {step.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-tutorpro-blue text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <h2 className="text-2xl font-bold">{step.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <p className="text-sm text-gray-500">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-tutorpro-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">The TutorPro Advantage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <CheckCircle className="h-8 w-8 text-tutorpro-teal mb-4" />
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-xl font-semibold mb-2">How much do tutors cost?</h3>
              <p className="text-gray-600">Tutor rates vary based on subject, experience, and location. Our tutors set their own hourly rates, typically ranging from $20 to $100 per hour.</p>
            </div>
            
            <div className="border-b pb-6">
              <h3 className="text-xl font-semibold mb-2">How do I pay for sessions?</h3>
              <p className="text-gray-600">Payments are processed securely through our platform. You can pay with credit/debit cards or PayPal. Funds are only released to the tutor after your session is completed.</p>
            </div>
            
            <div className="border-b pb-6">
              <h3 className="text-xl font-semibold mb-2">Can I change tutors if I'm not satisfied?</h3>
              <p className="text-gray-600">Yes, you can switch tutors at any time. We recommend communicating any concerns with your current tutor first, as they may be able to adjust their teaching approach to better suit your needs.</p>
            </div>
            
            <div className="border-b pb-6">
              <h3 className="text-xl font-semibold mb-2">Are online sessions effective?</h3>
              <p className="text-gray-600">Yes! Our online tutoring platform includes video conferencing, screen sharing, and a collaborative whiteboard to create an interactive learning environment. Many students find online sessions equally or more effective than in-person tutoring.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">How do I become a tutor on TutorPro?</h3>
              <p className="text-gray-600">To become a tutor, you'll need to create a profile, pass our verification process, and list your subjects and expertise. Visit our "Become a Tutor" page to learn more and sign up.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tutorpro-gradient text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of students who are achieving their academic goals with TutorPro</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-tutorpro-blue hover:bg-tutorpro-gray">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/tutors">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-tutorpro-blue">
                Browse Tutors
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
