import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    size: '',
    localAtendimento: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Olá! Gostaria de solicitar um orçamento:
    
Nome: ${formData.name}
Telefone: ${formData.phone}
Tamanho: ${formData.size}
Local de Atendimento: ${formData.localAtendimento}
Mensagem: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/5527997942852?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Sua mensagem será enviada via WhatsApp para finalizar o orçamento.",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefone',
      value: '(27) 99794-2852',
      link: 'tel:+5527997942852'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'emanuellopes198@gmail.com',
      link: 'mailto:emanuellopes198@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Conceição da Barra, ES<br />São Mateus, ES',
      link: '#'
    },
    {
      icon: Clock,
      label: 'Horário',
      value: 'Seg - Sáb: 9h às 18h',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title">
            Solicite seu <span className="gradient-text">Orçamento</span>
          </h2>
          <p className="text-lg text-color5 max-w-2xl mx-auto">
            Pronto para transformar sua ideia em arte? Entre em contato e vamos 
            criar juntos a tatuagem perfeita para você.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-color5 mb-2 block">Nome Completo</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-white border-color1 text-color5 focus:border-color3"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-color5 mb-2 block">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-white border-color1 text-color5 focus:border-color3"
                    placeholder="(XX) XXXXX-XXXX"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-color5 mb-2 block">Local de Atendimento</Label>
                  <Select onValueChange={(value) => handleInputChange('localAtendimento', value)}>
                    <SelectTrigger className="bg-white border-color1 text-color5 focus:border-color3">
                      <SelectValue placeholder="Selecione o local" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-color1 text-color5">
                      <SelectItem value="conceicaoDaBarra">Conceição da Barra, ES</SelectItem>
                      <SelectItem value="saoMateus">São Mateus, ES</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-color5 mb-2 block">Tamanho</Label>
                  <Select onValueChange={(value) => handleInputChange('size', value)}>
                    <SelectTrigger className="bg-white border-color1 text-color5 focus:border-color3">
                      <SelectValue placeholder="Tamanho aproximado" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-color1 text-color5">
                      <SelectItem value="pequena">Pequena (até 5cm)</SelectItem>
                      <SelectItem value="media">Média (5-15cm)</SelectItem>
                      <SelectItem value="grande">Grande (15-30cm)</SelectItem>
                      <SelectItem value="muito-grande">Muito Grande (+30cm)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-color5 mb-2 block">Descrição da Tatuagem</Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="bg-white border-color1 text-color5 focus:border-color3 min-h-[120px]"
                  placeholder="Descreva sua ideia, incluindo localização no corpo, referências, cores desejadas, etc."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-color3 hover:bg-color4 text-white font-semibold py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Enviar Orçamento via WhatsApp
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in p-0 bg-transparent">
            <div className="p-0">
              <h3 className="font-sans text-2xl font-bold text-color5 mb-6">Informações de Contato</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-color3/20 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-color5" />
                    </div>
                    <div>
                      <div className="text-color5/80 text-sm">{info.label}</div>
                      {info.link !== '#' ? (
                        <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-color5 font-medium hover:underline">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-color5 font-medium" dangerouslySetInnerHTML={{ __html: info.value }} />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-color3/20">
                <h4 className="text-lg font-semibold text-color5 mb-4">Dicas para seu Orçamento</h4>
                <ul className="space-y-2 text-color5/90 text-sm">
                  <li>• Descreva detalhadamente sua ideia</li>
                  <li>• Informe o tamanho e localização desejados</li>
                  <li>• Envie referências se possível</li>
                  <li>• Mencione se é sua primeira tatuagem</li>
                  <li>• Considere agendar uma consulta presencial</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
