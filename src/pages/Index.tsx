
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CourseList from '../components/CourseList';
import Testimonials from '../components/Testimonials';
import BlogPreview from '../components/BlogPreview';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <CourseList />
      <Testimonials />
      <BlogPreview />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
