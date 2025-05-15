
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

interface SearchFormProps {
  onSearch: (searchParams: {
    keyword: string;
    subject: string;
    priceRange: string;
  }) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [priceRange, setPriceRange] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ keyword, subject, priceRange });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-2">
          <label htmlFor="keyword" className="block text-sm font-medium text-gray-700 mb-1">
            Search Keywords
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              id="keyword"
              placeholder="Subject, skill or tutor name"
              className="pl-10"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <Select value={subject} onValueChange={setSubject}>
            <SelectTrigger id="subject">
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mathematics">Mathematics</SelectItem>
              <SelectItem value="science">Science</SelectItem>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="history">History</SelectItem>
              <SelectItem value="programming">Programming</SelectItem>
              <SelectItem value="language">Foreign Languages</SelectItem>
              <SelectItem value="music">Music</SelectItem>
              <SelectItem value="art">Art</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            Price Range
          </label>
          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger id="price">
              <SelectValue placeholder="Any price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-25">$0 - $25 / hour</SelectItem>
              <SelectItem value="25-50">$25 - $50 / hour</SelectItem>
              <SelectItem value="50-75">$50 - $75 / hour</SelectItem>
              <SelectItem value="75-100">$75 - $100 / hour</SelectItem>
              <SelectItem value="100+">$100+ / hour</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-4">
        <Button type="submit" className="w-full md:w-auto bg-tutorpro-blue hover:bg-tutorpro-teal">
          Find Tutors
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
