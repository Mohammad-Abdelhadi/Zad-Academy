import React, { useEffect, useRef } from 'react';
import blogData from '../data/blog.json';

const BlogPreview = () => {
  const blogRef = useRef<HTMLDivElement>(null);

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

    const elements = blogRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-zad-light" ref={blogRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-zad-primary mb-4">
            أحدث المقالات
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اطلع على آخر المقالات والنصائح في عالم التقنية والتعليم الإلكتروني
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16 animate-on-scroll">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={blogData[0].image}
                  alt={blogData[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-zad-primary text-white px-3 py-1 rounded-full text-sm">
                  مقال مميز
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="text-zad-secondary text-sm font-semibold mb-2">
                  {blogData[0].category}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 hover:text-zad-primary transition-colors cursor-pointer">
                  {blogData[0].title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {blogData[0].excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <span className="font-medium">{blogData[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <span>{formatDate(blogData[0].date)}</span>
                    <span>•</span>
                    <span>{blogData[0].readTime}</span>
                  </div>
                </div>
                <button className="bg-zad-primary hover:bg-zad-secondary text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-fit">
                  اقرأ المزيد
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogData.slice(1).map((article, index) => (
            <div 
              key={article.id}
              className="animate-on-scroll bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-zad-primary text-white px-3 py-1 rounded-full text-sm">
                  {article.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-zad-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="font-medium">{article.author}</span>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <span>{formatDate(article.date)}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <button className="text-zad-primary hover:text-zad-secondary font-semibold transition-colors">
                  اقرأ المزيد ←
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 animate-on-scroll">
          <div className="bg-gradient-to-r from-zad-primary to-zad-secondary rounded-xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              📧 اشترك في نشرتنا البريدية
            </h3>
            <p className="text-xl opacity-90 mb-6">
              احصل على آخر المقالات والنصائح التقنية مباشرة في بريدك الإلكتروني
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 w-full sm:w-auto"
              />
              <button className="bg-white text-zad-primary hover:bg-zad-light px-6 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto">
                اشترك الآن
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
