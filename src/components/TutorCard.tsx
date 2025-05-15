
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface TutorCardProps {
  id: string;
  name: string;
  subjects: string[];
  rating: number;
  reviews: number;
  hourlyRate: number;
  imageUrl: string;
  experience: string;
}

const TutorCard: React.FC<TutorCardProps> = ({ 
  id, 
  name, 
  subjects, 
  rating, 
  reviews, 
  hourlyRate, 
  imageUrl, 
  experience 
}) => {
  return (
    <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <Avatar className="h-16 w-16 border-2 border-tutorpro-teal">
              <img src={imageUrl} alt={`${name}'s profile picture`} />
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-sm text-gray-600">{experience}</p>
              <div className="flex items-center mt-1">
                <div className="flex items-center text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
                </div>
                <span className="mx-2 text-gray-400 text-sm">•</span>
                <span className="text-sm text-gray-600">{reviews} reviews</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex flex-wrap gap-1">
              {subjects.map((subject, index) => (
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
      </CardContent>
      
      <CardFooter className="flex justify-between items-center p-6 bg-gray-50 border-t">
        <div className="text-tutorpro-blue font-semibold">
          ${hourlyRate}/hour
        </div>
        <Link to={`/tutors/${id}`}>
          <Button className="bg-tutorpro-teal hover:bg-tutorpro-blue">
            View Profile
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TutorCard;
