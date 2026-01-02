
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import { COLORS } from '../constants';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-rose-200 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <AlertTriangle size={100} className="text-rose-500 relative z-10" />
          </div>
        </div>
        
        <h1 className="text-6xl lg:text-8xl font-black mb-4 text-blue-900">404</h1>
        <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-gray-800">Página Não Encontrada</h2>
        
        <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto">
          Parece que a página que você está procurando não existe ou foi movida. 
          Não se preocupe, vamos te ajudar a voltar para a segurança.
        </p>
        
        <Link 
          to="/"
          className="inline-flex items-center gap-3 px-8 py-4 text-white font-black text-lg rounded-2xl shadow-xl hover:scale-105 transition-all active:scale-95"
          style={{ backgroundColor: COLORS.primary }}
        >
          <Home size={20} />
          Voltar para o Início
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
