import React from 'react';
import { COLORS, CONTACT_INFO } from '../../constants';

interface VideoSectionProps {
  location?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ location = 'sua região' }) => {
  return (
    <div className="video-section py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl lg:text-4xl font-black text-center mb-8" style={{ color: COLORS.primary }}>
          Conheça Nossos Serviços de Ergonomia em {location}
        </h2>
        
        <div className="video-intro mb-10 text-gray-700 leading-relaxed text-lg">
          <p>
            A ergonomia no ambiente de trabalho em {location} é um fator determinante para o sucesso de qualquer organização. 
            Nossa equipe especializada realiza análises profundas para garantir que cada colaborador trabalhe em condições ideais, 
            minimizando riscos de lesões e maximizando a eficiência produtiva. Com a implementação correta da NR-17, 
            as empresas de {location} conseguem reduzir significativamente o absenteísmo e melhorar o clima organizacional. 
            Oferecemos soluções completas que vão desde o laudo técnico até treinamentos personalizados para gestores e operacionais. 
            Entender as particularidades do mobiliário, iluminação e fluxo de tarefas é o que nos diferencia no mercado de {location}.
          </p>
        </div>
        
        <div className="relative pb-[56.25%] h-0 rounded-3xl overflow-hidden shadow-2xl mb-10 border-8 border-white">
          <iframe 
            src="https://www.youtube.com/embed/ligkLHCYQaM" 
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            title="Vídeo Institucional ErghoPrev"
          ></iframe>
        </div>
        
        <div className="video-cta text-center p-8 lg:p-12 rounded-[2rem] shadow-2xl text-white" style={{ backgroundColor: COLORS.primary }}>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">Precisa de Análise Ergonômica em {location}?</h3>
          <p className="mb-8 text-blue-100 text-lg">Nossa equipe está pronta para atender sua empresa com soluções personalizadas!</p>
          <a 
            href={CONTACT_INFO.whatsappBase} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-blue-900 font-black rounded-full transition-all hover:scale-105 shadow-xl"
          >
            <i className="fab fa-whatsapp text-2xl"></i>
            Solicitar Análise Agora
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;