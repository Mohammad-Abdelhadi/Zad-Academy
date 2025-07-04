
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'الرئيسية', href: '#home' },
    { 
      name: 'الدورات', 
      href: '#courses',
      hasDropdown: true,
      dropdownItems: [
        { name: 'البرمجة', href: '#courses?category=programming' },
        { name: 'التصميم', href: '#courses?category=design' },
        { name: 'التسويق', href: '#courses?category=marketing' },
        { name: 'الأعمال', href: '#courses?category=business' },
        { name: 'التقنية', href: '#courses?category=technology' }
      ]
    },
    { name: 'من نحن', href: '#about' },
    { name: 'اتصل بنا', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href.split('?')[0]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    setIsCoursesOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-r from-zad-primary to-zad-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">ز</span>
            </div>
            <h1 className={`text-2xl font-bold ${
              isScrolled ? 'text-zad-primary' : 'text-white'
            }`}>
              أكاديمية زاد
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsCoursesOpen(true)}
                    onMouseLeave={() => setIsCoursesOpen(false)}
                  >
                    <button className={`flex items-center space-x-1 space-x-reverse px-3 py-2 rounded-md font-medium transition-colors ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-zad-primary' 
                        : 'text-white hover:text-zad-secondary'
                    }`}>
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border transition-all duration-200 ${
                      isCoursesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      <div className="py-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <button
                            key={dropdownItem.name}
                            onClick={() => scrollToSection(dropdownItem.href)}
                            className="block w-full text-right px-4 py-2 text-gray-700 hover:bg-zad-light hover:text-zad-primary transition-colors"
                          >
                            {dropdownItem.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`px-3 py-2 rounded-md font-medium transition-colors ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-zad-primary' 
                        : 'text-white hover:text-zad-secondary'
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
            
            <button className="bg-zad-primary hover:bg-zad-secondary text-white px-6 py-2 rounded-lg font-medium transition-colors">
              تسجيل الدخول
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-md ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                        className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:bg-zad-light rounded-md"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isCoursesOpen && (
                        <div className="mr-4 mt-2 space-y-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <button
                              key={dropdownItem.name}
                              onClick={() => scrollToSection(dropdownItem.href)}
                              className="block w-full text-right px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                            >
                              {dropdownItem.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-right px-3 py-2 text-gray-700 hover:bg-zad-light rounded-md"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
              <button className="bg-zad-primary hover:bg-zad-secondary text-white px-6 py-2 rounded-lg font-medium transition-colors mt-4">
                تسجيل الدخول
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
