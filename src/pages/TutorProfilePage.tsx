
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar } from '@/components/ui/avatar';
import { Star, Calendar, MessageSquare, Check, Shield } from 'lucide-react';
import { tutors, Tutor } from '@/data/tutors';

const TutorProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [tutor, setTutor] = useState<Tutor | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch with a slight delay
    setLoading(true);
    setTimeout(() => {
      const foundTutor = tutors.find(t => t.id === id);
      setTutor(foundTutor || null);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-12 flex justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-tutorpro-teal border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-tutorpro-blue">Loading tutor profile...</p>
        </div>
      </div>
    );
  }

  if (!tutor) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Tutor Not Found</h2>
          <p className="text-gray-600 mb-6">The tutor you're looking for doesn't exist or has been removed.</p>
          <Link to="/tutors">
            <Button>Browse All Tutors</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Tutor Info */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <Avatar className="h-24 w-24 border-4 border-tutorpro-teal">
                <img src={tutor.imageUrl} alt={`${tutor.name}'s profile picture`} />
              </Avatar>
              
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold">{tutor.name}</h1>
                    <p className="text-tutorpro-darkgray">{tutor.experience}</p>
                  </div>
                  
                  <div className="mt-4 md:mt-0 flex items-center">
                    <div className="flex items-center text-yellow-500 mr-4">
                      <Star className="h-5 w-5 fill-current" />
                      <span className="ml-1 font-semibold">{tutor.rating.toFixed(1)}</span>
                    </div>
                    <span className="text-gray-500">({tutor.reviews} reviews)</span>
                  </div>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {tutor.subjects.map((subject, index) => (
                    <span 
                      key={index} 
                      className="inline-flex text-xs bg-tutorpro-gray text-tutorpro-blue px-2 py-1 rounded-full"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs for About/Reviews */}
          <Tabs defaultValue="about">
            <TabsList className="mb-6">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({tutor.reviews})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="bg-white rounded-lg shadow p-6">
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">About {tutor.name}</h2>
                <p className="text-gray-700">{tutor.bio}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Education</h3>
                <ul className="space-y-2">
                  {tutor.education.map((edu, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-tutorpro-teal mr-2">•</span>
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {tutor.languages.map((language, index) => (
                    <div key={index} className="flex items-center bg-tutorpro-gray rounded-full px-3 py-1">
                      <span>{language}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-6">Student Reviews</h2>
              
              {/* Sample reviews (in a real app, these would come from the API) */}
              <div className="space-y-6">
                <div className="border-b pb-6">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">1 month ago</span>
                  </div>
                  <p className="text-gray-700 mb-2">"An excellent teacher who explains complex concepts clearly and patiently. I've improved significantly since starting lessons."</p>
                  <div className="flex items-center">
                    <div className="text-sm font-medium">Emma W.</div>
                  </div>
                </div>
                
                <div className="border-b pb-6">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">2 months ago</span>
                  </div>
                  <p className="text-gray-700 mb-2">"Very knowledgeable and makes the subject interesting. Highly recommend for anyone struggling with this subject."</p>
                  <div className="flex items-center">
                    <div className="text-sm font-medium">Jason T.</div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4" stroke="currentColor" fill="none" />
                    </div>
                    <span className="ml-2 text-sm text-gray-500">3 months ago</span>
                  </div>
                  <p className="text-gray-700 mb-2">"Great tutor, but sometimes sessions ran over the scheduled time. Still, I learned a lot and improved my grades."</p>
                  <div className="flex items-center">
                    <div className="text-sm font-medium">Sarah L.</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Column - Booking & Info */}
        <div>
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-tutorpro-blue mb-2">${tutor.hourlyRate}/hour</div>
              
              <div className="space-y-4 mt-6">
                <Button className="w-full bg-tutorpro-teal hover:bg-tutorpro-blue">
                  <Calendar className="mr-2 h-4 w-4" /> Book a Session
                </Button>
                
                <Button variant="outline" className="w-full border-tutorpro-teal text-tutorpro-teal hover:bg-tutorpro-teal hover:text-white">
                  <MessageSquare className="mr-2 h-4 w-4" /> Message {tutor.name.split(' ')[0]}
                </Button>
              </div>
              
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Availability</h3>
                <p className="text-sm text-gray-600">{tutor.availability}</p>
              </div>
              
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-sm text-gray-600">{tutor.location}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Verified Information</h3>
              
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm">Identity Verified</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm">Credentials Confirmed</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-tutorpro-blue mr-2" />
                  <span className="text-sm">Background Checked</span>
                </li>
              </ul>
              
              <div className="mt-4 text-xs text-gray-500">
                TutorPro verifies the identity and credentials of all tutors on our platform to ensure a safe learning environment.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TutorProfilePage;
