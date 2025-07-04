
import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center justify-center relative">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            تعلم المهارات
            <span className="block text-zad-secondary">التي تحتاجها</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed max-w-3xl mx-auto opacity-90">
            انضم إلى أكاديمية زاد واكتسب المهارات التقنية والرقمية التي يطلبها سوق العمل. 
            دورات تفاعلية، مدربين محترفين، وشهادات معتمدة تفتح لك آفاق مهنية جديدة.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button
              onClick={() => scrollToSection('#courses')}
              className="bg-zad-primary hover:bg-zad-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto min-w-[200px]"
            >
              تصفح الدورات
            </button>
            
            <button
              onClick={() => scrollToSection('#about')}
              className="border-2 border-white text-white hover:bg-white hover:text-zad-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto min-w-[200px]"
            >
              تعرف علينا
            </button>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center animate-scale-in">
              <div className="text-4xl md:text-5xl font-bold text-zad-secondary mb-2">
                +5000
              </div>
              <div className="text-white text-lg">
                طالب مسجل
              </div>
            </div>
            
            <div className="text-center animate-scale-in">
              <div className="text-4xl md:text-5xl font-bold text-zad-secondary mb-2">
                +50
              </div>
              <div className="text-white text-lg">
                دورة تدريبية
              </div>
            </div>
            
            <div className="text-center animate-scale-in">
              <div className="text-4xl md:text-5xl font-bold text-zad-secondary mb-2">
                98%
              </div>
              <div className="text-white text-lg">
                معدل رضا الطلاب
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
