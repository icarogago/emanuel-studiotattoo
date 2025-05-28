
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-tattoo-dark">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <FloatingButtons />
      <Footer />
    </div>
  );
};

export default Index;
