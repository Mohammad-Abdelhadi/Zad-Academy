
import React, { useEffect, useRef } from 'react';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

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

    const elements = featuresRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '🎯',
      title: 'تعلم مخصص',
      description: 'مسارات تعليمية مخصصة تناسب مستواك وأهدافك المهنية لضمان أفضل النتائج'
    },
    {
      icon: '👨‍🏫',
      title: 'مدربين خبراء',
      description: 'فريق من المدربين المحترفين ذوي الخبرة العملية في مجالاتهم المختلفة'
    },
    {
      icon: '🏆',
      title: 'شهادات معتمدة',
      description: 'احصل على شهادات معتمدة تعزز من فرصك المهنية في سوق العمل'
    },
    {
      icon: '💻',
      title: 'مشاريع عملية',
      description: 'طبق ما تعلمته من خلال مشاريع حقيقية تضيف قيمة لمعرض أعمالك'
    },
    {
      icon: '🤝',
      title: 'دعم مستمر',
      description: 'احصل على الدعم والمساعدة من فريقنا ومجتمع الطلاب على مدار الساعة'
    },
    {
      icon: '📱',
      title: 'تعلم مرن',
      description: 'ادرس في أي وقت ومن أي مكان باستخدام منصتنا المتوافقة مع جميع الأجهزة'
    }
  ];

  return (
    <section className="py-20 bg-zad-light" ref={featuresRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-zad-primary mb-4">
            لماذا أكاديمية زاد؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن ملتزمون بتقديم تجربة تعليمية استثنائية تساعدك على تحقيق أهدافك المهنية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="animate-on-scroll bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-zad-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-zad-primary mb-4">
              هل أنت مستعد للبدء؟
            </h3>
            <p className="text-xl text-gray-600 mb-6">
              انضم إلى آلاف الطلاب الذين غيروا مستقبلهم المهني معنا
            </p>
            <button className="bg-zad-primary hover:bg-zad-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
              ابدأ رحلتك الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
