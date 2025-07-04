
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'الدورات', href: '#courses' },
    { name: 'من نحن', href: '#about' },
    { name: 'المدونة', href: '#blog' },
    { name: 'اتصل بنا', href: '#contact' }
  ];

  const courses = [
    { name: 'تطوير المواقع', href: '#courses' },
    { name: 'التسويق الرقمي', href: '#courses' },
    { name: 'تصميم الجرافيك', href: '#courses' },
    { name: 'تطوير التطبيقات', href: '#courses' },
    { name: 'إدارة الأعمال', href: '#courses' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-zad-primary to-zad-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">ز</span>
              </div>
              <h3 className="text-2xl font-bold">أكاديمية زاد</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              منصة تعليمية متميزة تهدف إلى تمكين الأفراد من اكتساب المهارات التقنية والرقمية المطلوبة في سوق العمل الحديث.
            </p>
            
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">تابعنا</h4>
              <div className="flex space-x-4 space-x-reverse">
                {[
                  { name: 'Facebook', icon: '📘', href: '#' },
                  { name: 'Twitter', icon: '🐦', href: '#' },
                  { name: 'Instagram', icon: '📷', href: '#' },
                  { name: 'LinkedIn', icon: '💼', href: '#' },
                  { name: 'YouTube', icon: '📺', href: '#' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-zad-primary rounded-lg flex items-center justify-center transition-colors duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-zad-secondary transition-colors duration-300 block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h5 className="text-md font-semibold mb-4 text-white">خدمات أخرى</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-zad-secondary transition-colors">الشهادات المعتمدة</a></li>
                <li><a href="#" className="text-gray-400 hover:text-zad-secondary transition-colors">الاستشارات</a></li>
                <li><a href="#" className="text-gray-400 hover:text-zad-secondary transition-colors">التدريب المؤسسي</a></li>
              </ul>
            </div>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6">الدورات الشائعة</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <button
                    onClick={() => scrollToSection(course.href)}
                    className="text-gray-400 hover:text-zad-secondary transition-colors duration-300 block"
                  >
                    {course.name}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h5 className="text-md font-semibold mb-4 text-white">مستويات التعلم</h5>
              <ul className="space-y-2">
                <li><span className="text-gray-400">مبتدئ</span></li>
                <li><span className="text-gray-400">متوسط</span></li>
                <li><span className="text-gray-400">متقدم</span></li>
                <li><span className="text-gray-400">خبير</span></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-6 h-6 text-zad-secondary mt-1">📍</div>
                <div>
                  <p className="text-gray-400">
                    الرياض، المملكة العربية السعودية
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-6 h-6 text-zad-secondary">📧</div>
                <a href="mailto:info@zad-academy.com" className="text-gray-400 hover:text-zad-secondary transition-colors">
                  info@zad-academy.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-6 h-6 text-zad-secondary">📱</div>
                <a href="tel:+966501234567" className="text-gray-400 hover:text-zad-secondary transition-colors">
                  +966 50 123 4567
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="text-md font-semibold mb-4 text-white">النشرة البريدية</h5>
              <p className="text-gray-400 text-sm mb-4">
                احصل على آخر الأخبار والعروض
              </p>
              <div className="flex space-x-2 space-x-reverse">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-zad-primary focus:border-transparent text-sm"
                />
                <button className="bg-zad-primary hover:bg-zad-secondary px-4 py-2 rounded-md transition-colors text-sm font-medium">
                  اشترك
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-center md:text-right">
              <p>© {currentYear} أكاديمية زاد. جميع الحقوق محفوظة.</p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 space-x-reverse text-sm">
              <a href="#" className="text-gray-400 hover:text-zad-secondary transition-colors">سياسة الخصوصية</a>
              <a href="#" className="text-gray-400 hover:text-zad-secondary transition-colors">شروط الاستخدام</a>
              <a href="#" className="text-gray-400 hover:text-zad-secondary transition-colors">سياسة الاسترداد</a>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              منصة معتمدة من المؤسسة العامة للتدريب التقني والمهني • رخصة رقم: 12345678
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
