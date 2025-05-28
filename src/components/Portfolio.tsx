import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'fineline', label: 'Fine Line' },
    { id: 'blackwork', label: 'Blackwork' },
    { id: 'color', label: 'Coloridas' },
    { id: 'minimal', label: 'Minimalistas' }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'fineline',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400',
      title: 'Fine Line Floral',
      description: 'Tatuagem delicada com traços finos'
    },
    {
      id: 2,
      category: 'blackwork',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400',
      title: 'Blackwork Geometric',
      description: 'Geometria em preto sólido'
    },
    {
      id: 3,
      category: 'color',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400',
      title: 'Aquarela Colorida',
      description: 'Estilo aquarela vibrante'
    },
    {
      id: 4,
      category: 'minimal',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400',
      title: 'Minimalista',
      description: 'Design clean e simples'
    },
    {
      id: 5,
      category: 'fineline',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400',
      title: 'Fine Line Portrait',
      description: 'Retrato em traços finos'
    },
    {
      id: 6,
      category: 'blackwork',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400',
      title: 'Blackwork Traditional',
      description: 'Estilo tradicional em preto'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-tattoo-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Meu <span className="gradient-text">Portfólio</span>
          </h2>
          <p className="text-lg text-tattoo-cream/90 max-w-2xl mx-auto">
            Cada tatuagem conta uma história única. Explore alguns dos meus trabalhos 
            mais recentes e descubra a arte que posso criar para você.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                border border-color1
                ${activeFilter === filter.id 
                  ? 'bg-color4 text-color1 hover:bg-color5' 
                  : 'bg-color3 text-color5 hover:bg-color5 hover:text-white'
                }
                transition-all duration-300
              `}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="portfolio-item animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square bg-tattoo-charcoal rounded-lg overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="portfolio-overlay">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            size="lg"
            className="bg-tattoo-red hover:bg-tattoo-red/90 text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
          >
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
