import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('/img/hero-image.png')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-white">Emanuel Lopes</span>
          <span className="block gradient-text">Studio Tattoo</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-color1 mb-8 max-w-2xl mx-auto leading-relaxed">
          Tatuagens com alma, traço e propósito
        </p>
        
        <p className="text-lg text-color1/80 mb-12 max-w-xl mx-auto">
          Arte corporal que conta histórias únicas através de técnicas refinadas e designs personalizados
        </p>
        
        <Button
          onClick={scrollToPortfolio}
          size="lg"
          className="bg-color1 hover:bg-color2 text-color5 font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
        >
          Ver Portfólio
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ChevronDown className="text-color1 w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
