
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '@/components/SearchForm';
import TutorCard from '@/components/TutorCard';
import { tutors, searchTutors, getSubjects } from '@/data/tutors';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TutorsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredTutors, setFilteredTutors] = useState(tutors);
  const [sortOption, setSortOption] = useState('featured');
  
  const keyword = searchParams.get('keyword') || '';
  const subject = searchParams.get('subject') || '';
  const priceRange = searchParams.get('price') || '';

  useEffect(() => {
    // Apply filters based on URL search params
    const results = searchTutors({
      keyword: keyword,
      subject: subject,
      priceRange: priceRange
    });
    
    // Apply sorting
    let sortedResults = [...results];
    if (sortOption === 'price-low') {
      sortedResults.sort((a, b) => a.hourlyRate - b.hourlyRate);
    } else if (sortOption === 'price-high') {
      sortedResults.sort((a, b) => b.hourlyRate - a.hourlyRate);
    } else if (sortOption === 'rating') {
      sortedResults.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'reviews') {
      sortedResults.sort((a, b) => b.reviews - a.reviews);
    }
    
    setFilteredTutors(sortedResults);
  }, [keyword, subject, priceRange, sortOption]);

  const handleSearch = (searchParams: { keyword: string; subject: string; priceRange: string }) => {
    setSearchParams({
      keyword: searchParams.keyword,
      subject: searchParams.subject,
      price: searchParams.priceRange
    });
  };

  const handleSortChange = (value: string) => {
    setSortOption(value);
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8">Find Your Perfect Tutor</h1>
        
        {/* Search Form */}
        <div className="mb-8">
          <SearchForm onSearch={handleSearch} />
        </div>
        
        {/* Results Count and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <p className="text-gray-600 mb-4 md:mb-0">
            {filteredTutors.length} {filteredTutors.length === 1 ? 'tutor' : 'tutors'} found
            {keyword && ` for "${keyword}"`}
            {subject && ` in ${subject}`}
            {priceRange && ` with price ${priceRange}`}
          </p>
          
          <Tabs defaultValue={sortOption} onValueChange={handleSortChange}>
            <TabsList>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="rating">Top Rated</TabsTrigger>
              <TabsTrigger value="price-low">Price: Low to High</TabsTrigger>
              <TabsTrigger value="price-high">Price: High to Low</TabsTrigger>
              <TabsTrigger value="reviews">Most Reviews</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        {/* No Results Message */}
        {filteredTutors.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No tutors found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search filters</p>
          </div>
        )}
        
        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutors.map((tutor) => (
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
      </div>
    </div>
  );
};

export default TutorsPage;
