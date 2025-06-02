import React, { useState } from 'react';
import ImageViewer from './ImageViewer';

const imageList = [
  'Arte- (1).jpeg',
  'Arte- (2).jpeg',
  'Arte- (3).jpeg',
  'Arte- (4).jpeg',
  'Arte- (5).jpeg',
  'Arte- (6).jpeg',
  'Arte- (7).jpeg',
  'Arte- (8).jpeg',
  'Arte- (9).jpeg',
];

const videoList = [
  'video- (1).mp4',
  'video- (2).mp4',
  'video- (3).mp4',
  'video- (4).mp4',
  'video- (5).mp4',
  'video- (6).mp4',
  'video- (7).mp4',
  'video- (8).mp4',
  'video- (9).mp4',
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-10 text-center">Galeria</h2>
          {/* Galeria de Imagens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {imageList.map((img, idx) => (
              <div key={img} className="portfolio-item animate-fade-in">
                <div 
                  className="aspect-square bg-color5/10 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(`/img/${img}`)}
                >
                  <img
                    src={`/img/${img}`}
                    alt={`Tatuagem ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visualizador de Imagem */}
        {selectedImage && (
          <ImageViewer
            imageUrl={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </section>

      <section id="videos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-10 text-center">Vídeos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoList.map((vid, idx) => (
              <div key={vid} className="portfolio-item animate-fade-in">
                <div className="aspect-square bg-color5/10 rounded-lg overflow-hidden flex items-center justify-center">
                  <video controls className="w-full h-full object-cover">
                    <source src={`/img/videos/${vid}`} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
