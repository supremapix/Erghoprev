
import React, { useState } from 'react';
import { FAQ_DATA, COLORS, CONTACT_INFO } from '../../constants';
import { Plus, Minus, MessageSquare } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-widest mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-center" style={{ color: COLORS.primary }}>
            Tire suas Dúvidas Técnicas
          </h2>
        </div>
        
        <div className="space-y-4 mb-16">
          {FAQ_DATA.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md">
              <button 
                className="w-full flex items-center justify-between p-6 lg:p-8 text-left transition-colors hover:bg-gray-50"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="text-lg lg:text-xl font-bold text-gray-800">{item.question}</span>
                <span className={`flex-shrink-0 ml-4 p-2 rounded-full transition-colors ${openIdx === idx ? 'bg-rose-500 text-white' : 'bg-blue-50 text-blue-600'}`}>
                  {openIdx === idx ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <div className={`transition-all duration-300 ${openIdx === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-6 lg:p-8 lg:pt-0 text-gray-600 text-lg leading-relaxed border-t border-gray-50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 rounded-[3rem] p-10 text-center text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 opacity-50"></div>
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-black mb-6">Ainda tem alguma dúvida específica?</h3>
            <p className="text-blue-100 mb-8 text-lg font-medium">Nossos especialistas estão prontos para te dar uma consultoria técnica preliminar sem compromisso.</p>
            <a 
              href={CONTACT_INFO.whatsappBase}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-10 py-5 bg-rose-500 hover:bg-rose-600 text-white font-black text-xl rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              <MessageSquare size={24} />
              Chamar no WhatsApp Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
