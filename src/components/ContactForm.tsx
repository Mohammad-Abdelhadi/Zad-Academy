
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      console.log('Form submitted:', formData);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                تم إرسال رسالتك بنجاح!
              </h3>
              <p className="text-green-600">
                شكراً لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zad-primary mb-4">
            تواصل معنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            هل لديك أسئلة أو تحتاج للمساعدة؟ لا تتردد في التواصل معنا وسنكون سعداء لمساعدتك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-zad-primary mb-6">
                معلومات التواصل
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-zad-primary rounded-lg flex items-center justify-center text-white">
                    📧
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">البريد الإلكتروني</h4>
                    <p className="text-gray-600">info@zad-academy.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-zad-primary rounded-lg flex items-center justify-center text-white">
                    📱
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">رقم الهاتف</h4>
                    <p className="text-gray-600">+966 50 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-zad-primary rounded-lg flex items-center justify-center text-white">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">العنوان</h4>
                    <p className="text-gray-600">الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-bold text-zad-primary mb-4">
                تابعنا على وسائل التواصل
              </h4>
              <div className="flex space-x-4 space-x-reverse">
                {[
                  { name: 'Facebook', icon: '📘' },
                  { name: 'Twitter', icon: '🐦' },
                  { name: 'Instagram', icon: '📷' },
                  { name: 'LinkedIn', icon: '💼' },
                  { name: 'YouTube', icon: '📺' }
                ].map((social) => (
                  <button
                    key={social.name}
                    className="w-12 h-12 bg-gray-100 hover:bg-zad-primary hover:text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-zad-light p-6 rounded-xl">
              <h4 className="text-xl font-bold text-zad-primary mb-3">
                الأسئلة الشائعة
              </h4>
              <p className="text-gray-600 mb-4">
                ربما تجد إجابة سؤالك في قسم الأسئلة الشائعة
              </p>
              <button className="text-zad-primary hover:text-zad-secondary font-semibold">
                اطلع على الأسئلة الشائعة ←
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zad-primary focus:border-transparent"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zad-primary focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zad-primary focus:border-transparent"
                    placeholder="+966 50 123 4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    موضوع الرسالة *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zad-primary focus:border-transparent"
                  >
                    <option value="">اختر الموضوع</option>
                    <option value="courses">استفسار عن الدورات</option>
                    <option value="technical">دعم تقني</option>
                    <option value="partnership">شراكة</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  الرسالة *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zad-primary focus:border-transparent resize-vertical"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-zad-primary hover:bg-zad-secondary text-white py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
