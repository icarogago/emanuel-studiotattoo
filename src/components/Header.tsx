import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Sobre', id: 'about' },
    { label: 'Galeria', id: 'portfolio' },
    { label: 'Vídeos', id: 'videos' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-color5 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="font-sans text-2xl font-bold bg-gradient-to-r from-color1 to-color3 bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Emanuel Lopes Studio Tattoo
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-color1 transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            {/* Botão de Orçamento */}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-color3 hover:bg-color4 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 shadow-md"
            >
              Orçamento
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-color1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-color5 shadow-lg border-t border-color1/10">
            <div className="container mx-auto px-4 py-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 text-white hover:text-color1 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              {/* Botão de Orçamento Mobile */}
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-4 block w-full text-left py-3 bg-color3 hover:bg-color4 text-white font-semibold px-4 rounded-lg transition-colors duration-300"
              >
                Orçamento
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
