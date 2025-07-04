
import React from 'react';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  originalPrice: string;
  level: string;
  studentsCount: number;
  rating: number;
  instructor: string;
  category: string;
  featured: boolean;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
      {/* Course Image */}
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        
        {/* Featured Badge */}
        {course.featured && (
          <div className="absolute top-4 right-4 bg-zad-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
            مميز
          </div>
        )}
        
        {/* Level Badge */}
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
          {course.level}
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Category */}
        <div className="text-zad-primary text-sm font-semibold mb-2">
          {course.category}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-zad-primary transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {course.description}
        </p>

        {/* Instructor */}
        <div className="text-sm text-gray-500 mb-4">
          <span className="font-medium">المدرب:</span> {course.instructor}
        </div>

        {/* Rating and Students */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1 space-x-reverse">
            {renderStars(course.rating)}
            <span className="text-sm text-gray-600 mr-2">
              ({course.rating})
            </span>
          </div>
          <div className="text-sm text-gray-500">
            {course.studentsCount.toLocaleString()} طالب
          </div>
        </div>

        {/* Duration and Price */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-gray-600">
            <span className="font-medium">المدة:</span> {course.duration}
          </div>
          <div className="text-left">
            {course.originalPrice && (
              <span className="text-sm text-gray-400 line-through mr-2">
                {course.originalPrice}
              </span>
            )}
            <span className="text-lg font-bold text-zad-primary">
              {course.price}
            </span>
          </div>
        </div>

        {/* Enroll Button */}
        <button className="w-full bg-zad-primary hover:bg-zad-secondary text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]">
          سجّل الآن
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
