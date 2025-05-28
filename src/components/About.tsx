import React from 'react';
import { Award, Clock, Palette, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, label: 'Anos de Experiência', value: '8+' },
    { icon: Users, label: 'Clientes Satisfeitos', value: '500+' },
    { icon: Palette, label: 'Tatuagens Realizadas', value: '1000+' },
    { icon: Award, label: 'Prêmios Conquistados', value: '5' }
  ];

  const specialties = [
    'Fine Line',
    'Blackwork',
    'Old School',
    'Realismo',
    'Minimalista',
    'Geometric'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="section-title">
              Sobre o <span className="gradient-text">Artista</span>
            </h2>

            <p className="text-lg text-color5 mb-6 leading-relaxed">
              Com mais de 8 anos de experiência na arte da tatuagem, Emanuel R. Lopes 
              transformou sua paixão por arte em uma carreira dedicada a criar obras 
              únicas na pele de seus clientes.
            </p>
            
            <p className="text-lg text-color5 mb-8 leading-relaxed">
              Especializado em técnicas refinadas como fine line e blackwork, cada 
              tatuagem é cuidadosamente planejada e executada com precisão artística, 
              garantindo que cada cliente leve consigo uma peça de arte personalizada 
              e significativa.
            </p>

            {/* Specialties */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-color3 mb-4">Especialidades</h3>
              <div className="flex flex-wrap gap-3">
                {specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-color1 border border-color3/30 rounded-full text-color5 text-sm hover:border-color3/60 transition-colors duration-300"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-color1 rounded-lg border border-color3/20 hover:border-color3/40 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-color3 mx-auto mb-4" />
                <div className="text-3xl font-bold text-color5 mb-2">{stat.value}</div>
                <div className="text-color5/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
