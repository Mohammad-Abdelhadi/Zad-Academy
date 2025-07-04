
import React, { useState, useEffect, useRef } from 'react';
import CourseCard from './CourseCard';
import coursesData from '../data/courses.json';

const CourseList = () => {
  const [courses] = useState(coursesData);
  const [filteredCourses, setFilteredCourses] = useState(coursesData);
  const [activeFilter, setActiveFilter] = useState('الكل');
  const coursesRef = useRef<HTMLDivElement>(null);

  const categories = [
    'الكل',
    'البرمجة',
    'التصميم', 
    'التسويق',
    'الأعمال',
    'التقنية'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = coursesRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredCourses]);

  const filterCourses = (category: string) => {
    setActiveFilter(category);
    if (category === 'الكل') {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter(course => course.category === category);
      setFilteredCourses(filtered);
    }
  };

  return (
    <section id="courses" className="py-20 bg-white" ref={coursesRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-zad-primary mb-4">
            دوراتنا التدريبية
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اختر من بين مجموعة واسعة من الدورات المصممة لتطوير مهاراتك وتحقيق أهدافك المهنية
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => filterCourses(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-zad-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-zad-light hover:text-zad-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Courses Banner */}
        <div className="bg-gradient-to-r from-zad-primary to-zad-secondary rounded-xl p-8 mb-12 text-white animate-on-scroll">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">🌟 الدورات المميزة</h3>
            <p className="text-lg opacity-90">
              دورات مختارة بعناية من قبل خبرائنا لتمنحك أفضل تجربة تعليمية
            </p>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div 
              key={course.id}
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12 animate-on-scroll">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">
              لا توجد دورات في هذا التصنيف
            </h3>
            <p className="text-gray-500">
              جرب تصنيف آخر أو تصفح جميع الدورات المتاحة
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-zad-light p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-zad-primary mb-4">
              لم تجد الدورة المناسبة؟
            </h3>
            <p className="text-xl text-gray-600 mb-6">
              تواصل معنا وسنساعدك في اختيار المسار التعليمي المناسب لأهدافك
            </p>
            <button className="bg-zad-primary hover:bg-zad-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseList;
