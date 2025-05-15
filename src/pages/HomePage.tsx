
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SearchForm from '@/components/SearchForm';
import TutorCard from '@/components/TutorCard';
import { getFeaturedTutors, getSubjects } from '@/data/tutors';

const HomePage = () => {
  const featuredTutors = getFeaturedTutors();
  const subjects = getSubjects();

  const handleSearch = (searchParams: { keyword: string; subject: string; priceRange: string }) => {
    // In a real application, this would navigate to the search results page with query params
    console.log('Search params:', searchParams);
    window.location.href = `/tutors?keyword=${encodeURIComponent(searchParams.keyword)}&subject=${encodeURIComponent(searchParams.subject)}&price=${encodeURIComponent(searchParams.priceRange)}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="tutorpro-gradient text-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Tutor Today</h1>
            <p className="text-xl mb-8">Connect with expert tutors for personalized learning in any subject</p>
            <Link to="/tutors">
              <Button size="lg" className="bg-white text-tutorpro-blue hover:bg-tutorpro-gray hover:text-tutorpro-blue">
                Browse All Tutors
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="container mx-auto px-6 -mt-8 mb-16">
        <SearchForm onSearch={handleSearch} />
      </section>

      {/* Featured Tutors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-center">Featured Tutors</h2>
          <p className="text-center text-gray-600 mb-12">Discover our highest-rated tutors across various subjects</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTutors.map((tutor) => (
              <TutorCard 
                key={tutor.id}
                id={tutor.id}
                name={tutor.name}
                subjects={tutor.subjects}
                rating={tutor.rating}
                reviews={tutor.reviews}
                hourlyRate={tutor.hourlyRate}
                imageUrl={tutor.imageUrl}
                experience={tutor.experience}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/tutors">
              <Button variant="outline" className="border-tutorpro-teal text-tutorpro-teal hover:bg-tutorpro-teal hover:text-white">
                View All Tutors
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Subjects */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-center">Popular Subjects</h2>
          <p className="text-center text-gray-600 mb-12">Browse tutors by your area of interest</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {subjects.slice(0, 8).map((subject, index) => (
              <Link 
                key={index} 
                to={`/subjects?name=${encodeURIComponent(subject)}`}
                className="bg-white rounded-lg shadow hover:shadow-md p-6 text-center transition-shadow"
              >
                <h3 className="font-medium text-tutorpro-blue">{subject}</h3>
                <p className="text-sm text-gray-500 mt-1">Find Tutors</p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/subjects">
              <Button variant="outline" className="border-tutorpro-teal text-tutorpro-teal hover:bg-tutorpro-teal hover:text-white">
                View All Subjects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-tutorpro-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-center">How TutorPro Works</h2>
          <p className="text-center text-gray-600 mb-12">Your path to academic success in three simple steps</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-tutorpro-blue text-white text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Find a Tutor</h3>
              <p className="text-gray-600">Browse profiles and reviews to find the perfect tutor for your needs.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-tutorpro-blue text-white text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Book a Session</h3>
              <p className="text-gray-600">Schedule lessons that fit your calendar and learning goals.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-tutorpro-blue text-white text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Learn & Succeed</h3>
              <p className="text-gray-600">Connect with your tutor and start making progress today.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button className="bg-tutorpro-blue hover:bg-tutorpro-teal">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-center">What Our Students Say</h2>
          <p className="text-center text-gray-600 mb-12">Real experiences from TutorPro students</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Dr. Chen helped me understand calculus concepts that I had been struggling with for months. Her patient approach and clear explanations made all the difference."</p>
              <div>
                <h4 className="font-bold">Alex Thompson</h4>
                <p className="text-sm text-gray-500">Mathematics Student</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Maria's Spanish lessons were incredibly engaging and effective. After just three months, I was able to hold conversations during my trip to Spain!"</p>
              <div>
                <h4 className="font-bold">Jessica Lee</h4>
                <p className="text-sm text-gray-500">Language Student</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Michael's programming tutorials were game-changing. He helped me build my first web application and gave me the confidence to pursue a career in tech."</p>
              <div>
                <h4 className="font-bold">Ryan Williams</h4>
                <p className="text-sm text-gray-500">Computer Science Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="tutorpro-gradient text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of students who are already achieving their academic goals with TutorPro</p>
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

export default HomePage;
