
import React, { useEffect, useRef } from 'react';
import testimonialsData from '../data/testimonials.json';

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

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

    const elements = testimonialsRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-xl ${
          index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zad-primary to-zad-secondary" ref={testimonialsRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ماذا يقول طلابنا
          </h2>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            آراء حقيقية من طلاب حققوا نجاحات مميزة بعد التحاق بدوراتنا التدريبية
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: '98%', label: 'معدل رضا الطلاب' },
            { number: '85%', label: 'حصلوا على وظائف جديدة' },
            { number: '92%', label: 'أكملوا دوراتهم بنجاح' },
            { number: '4.8/5', label: 'متوسط التقييمات' }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-on-scroll bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="animate-on-scroll bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="text-6xl text-zad-primary opacity-20 mb-4">"</div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                {testimonial.testimonial}
              </p>
              
              {/* Rating */}
              <div className="flex items-center mb-6">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Student Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover ml-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonial.role}
                  </p>
                  <p className="text-zad-primary text-sm font-medium">
                    دورة: {testimonial.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              كن جزءاً من قصص النجاح
            </h3>
            <p className="text-xl text-white opacity-90 mb-6">
              ابدأ رحلتك التعليمية اليوم وكن من الطلاب المتميزين
            </p>
            <button className="bg-white text-zad-primary hover:bg-zad-light px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105">
              ابدأ الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
