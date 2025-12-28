import { Service, FAQItem, GallerySlide, TimelineStep } from './types';

export const COLORS = {
  primary: '#1e3a8a',
  secondary: '#93c5fd',
  darkBlue: '#1a365d',
  accent: '#f43f5e',
  warning: '#fbbf24',
  success: '#10b981',
  bgLight: '#f0f9ff'
};

export const CONTACT_INFO = {
  phone: '(41) 99780-1951',
  phoneRaw: '5541997801951',
  email: 'contato@erghoprev.com.br',
  whatsappBase: 'https://api.whatsapp.com/send?phone=5541997801951&text=Ol%C3%A1%20encontrei%20seu%20site%3A%20*%20Erghoprev*%20no%20Google%20gostaria%20de%20saber%20*sobre%3A*'
};

// Imagens em Base64 para garantir que nunca quebrem
export const ASSETS = {
  // Logo Principal (Imagem 1 enviada)
  logo: '/assets/logo.png',
  
  // Hero Background (Imagem 2 enviada)
  heroBg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
  
  // Solutions Section (Imagem 3 enviada)
  solutionsMain: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80',
  
  // Ergonomia Section (Imagem 4 enviada)
  ergonomiaMain: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
  
  // Home Office (Imagem 5 enviada)
  homeOffice: 'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&q=80'
};
