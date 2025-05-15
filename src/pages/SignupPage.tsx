
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SignupPage: React.FC = () => {
  const [userType, setUserType] = useState<'student' | 'tutor'>('student');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle the signup logic
    console.log('Signup form submitted as:', userType);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <BookOpen className="h-10 w-10 text-tutorpro-blue" />
            </div>
            <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
            <CardDescription>Join TutorPro to connect with tutors and students</CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs value={userType} onValueChange={(value) => setUserType(value as 'student' | 'tutor')}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="student">I'm a Student</TabsTrigger>
                <TabsTrigger value="tutor">I'm a Tutor</TabsTrigger>
              </TabsList>
              
              <TabsContent value="student">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                  </div>
                  
                  <Button type="submit" className="w-full bg-tutorpro-teal hover:bg-tutorpro-blue">
                    Create Student Account
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="tutor">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name-tutor">First Name</Label>
                      <Input id="first-name-tutor" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name-tutor">Last Name</Label>
                      <Input id="last-name-tutor" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email-tutor">Email</Label>
                    <Input id="email-tutor" type="email" placeholder="you@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password-tutor">Password</Label>
                    <Input id="password-tutor" type="password" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Main Subject</Label>
                    <Input id="subject" placeholder="e.g. Mathematics, Spanish, Piano" required />
                  </div>
                  
                  <Button type="submit" className="w-full bg-tutorpro-teal hover:bg-tutorpro-blue">
                    Create Tutor Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          
          <CardFooter className="flex flex-col gap-4">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300"></span>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" type="button" className="w-full">
                Google
              </Button>
              <Button variant="outline" type="button" className="w-full">
                Facebook
              </Button>
            </div>
            
            <div className="text-center mt-2">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-tutorpro-blue hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignupPage;
