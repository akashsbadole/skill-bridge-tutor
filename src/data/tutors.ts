
export interface Tutor {
  id: string;
  name: string;
  imageUrl: string;
  subjects: string[];
  rating: number;
  reviews: number;
  hourlyRate: number;
  experience: string;
  bio: string;
  education: string[];
  location: string;
  languages: string[];
  availability: string;
  featured: boolean;
}

export const tutors: Tutor[] = [
  {
    id: '1',
    name: 'Dr. Amanda Chen',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    subjects: ['Mathematics', 'Calculus', 'Statistics'],
    rating: 4.9,
    reviews: 127,
    hourlyRate: 45,
    experience: 'Mathematics PhD, 8+ years teaching',
    bio: 'I have a PhD in Applied Mathematics and over 8 years of teaching experience at the university level. My teaching style focuses on building a strong foundation and helping students develop problem-solving skills that extend beyond the classroom.',
    education: ['PhD in Applied Mathematics, MIT', 'MSc in Mathematics, Stanford University'],
    location: 'Boston, MA (Remote available)',
    languages: ['English', 'Mandarin'],
    availability: 'Weekdays evenings, Weekends',
    featured: true
  },
  {
    id: '2',
    name: 'James Wilson',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    subjects: ['Physics', 'Engineering', 'Computer Science'],
    rating: 4.7,
    reviews: 89,
    hourlyRate: 50,
    experience: 'Mechanical Engineer, 5+ years tutoring',
    bio: 'As an experienced mechanical engineer with a passion for teaching, I specialize in making complex physics and engineering concepts accessible to students of all levels.',
    education: ['MS in Mechanical Engineering, Georgia Tech', 'BS in Physics, University of Michigan'],
    location: 'Atlanta, GA (Remote available)',
    languages: ['English'],
    availability: 'Weekends, Monday & Wednesday evenings',
    featured: true
  },
  {
    id: '3',
    name: 'Maria Rodriguez',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    subjects: ['Spanish', 'English as a Second Language', 'Literature'],
    rating: 5.0,
    reviews: 61,
    hourlyRate: 35,
    experience: 'Certified language teacher, Native Spanish speaker',
    bio: 'I am a certified language instructor with native fluency in Spanish. My interactive teaching approach emphasizes practical conversation skills while building a strong grammatical foundation.',
    education: ['MA in Language Education, University of Barcelona', 'BA in Spanish Literature, NYU'],
    location: 'Miami, FL (Remote available)',
    languages: ['Spanish', 'English', 'Portuguese'],
    availability: 'Flexible schedule, 7 days a week',
    featured: false
  },
  {
    id: '4',
    name: 'David Kim',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    subjects: ['Piano', 'Music Theory', 'Composition'],
    rating: 4.8,
    reviews: 94,
    hourlyRate: 60,
    experience: 'Juilliard graduate, Concert pianist',
    bio: 'As a Juilliard-trained pianist with international performance experience, I provide comprehensive music education for students at all levels, from beginners to advanced performers preparing for conservatory auditions.',
    education: ['MM in Piano Performance, Juilliard School', 'BM in Music, Seoul National University'],
    location: 'New York, NY (Remote available)',
    languages: ['English', 'Korean'],
    availability: 'Afternoons and weekends',
    featured: true
  },
  {
    id: '5',
    name: 'Sarah Johnson',
    imageUrl: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    subjects: ['Biology', 'Chemistry', 'AP Sciences'],
    rating: 4.6,
    reviews: 72,
    hourlyRate: 40,
    experience: 'Biology teacher, 6+ years experience',
    bio: 'I am a high school science teacher with expertise in AP Biology and Chemistry. I specialize in breaking down complex scientific concepts into understandable components and helping students prepare for standardized tests.',
    education: ['MS in Biology, UC Berkeley', 'BS in Biochemistry, University of Washington'],
    location: 'Seattle, WA (Remote available)',
    languages: ['English'],
    availability: 'Weekday evenings, Saturday mornings',
    featured: false
  },
  {
    id: '6',
    name: 'Michael Taylor',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    subjects: ['Programming', 'Web Development', 'Python'],
    rating: 4.9,
    reviews: 108,
    hourlyRate: 55,
    experience: 'Senior Software Engineer, Former CS Instructor',
    bio: 'With 10+ years of industry experience as a software engineer and former university instructor, I teach practical programming skills with an emphasis on real-world applications and best practices.',
    education: ['MS in Computer Science, Carnegie Mellon', 'BS in Software Engineering, University of Texas'],
    location: 'Austin, TX (Remote available)',
    languages: ['English'],
    availability: 'Evenings and weekends',
    featured: true
  }
];

export const getSubjects = (): string[] => {
  const allSubjects = tutors.flatMap(tutor => tutor.subjects);
  const uniqueSubjects = [...new Set(allSubjects)];
  return uniqueSubjects.sort();
};

export const getFeaturedTutors = (): Tutor[] => {
  return tutors.filter(tutor => tutor.featured);
};

export const searchTutors = (params: { 
  keyword?: string; 
  subject?: string; 
  priceRange?: string;
}): Tutor[] => {
  let results = [...tutors];
  
  if (params.keyword) {
    const keyword = params.keyword.toLowerCase();
    results = results.filter(tutor => 
      tutor.name.toLowerCase().includes(keyword) || 
      tutor.subjects.some(subject => subject.toLowerCase().includes(keyword)) ||
      tutor.bio.toLowerCase().includes(keyword)
    );
  }
  
  if (params.subject && params.subject !== 'all') {
    results = results.filter(tutor => 
      tutor.subjects.some(subject => subject.toLowerCase() === params.subject?.toLowerCase())
    );
  }
  
  if (params.priceRange) {
    const [min, max] = params.priceRange.split('-').map(Number);
    if (max) {
      results = results.filter(tutor => tutor.hourlyRate >= min && tutor.hourlyRate <= max);
    } else {
      // For "100+" case
      results = results.filter(tutor => tutor.hourlyRate >= min);
    }
  }
  
  return results;
};
