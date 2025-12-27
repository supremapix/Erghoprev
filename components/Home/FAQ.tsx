
import React, { useState } from 'react';
import { FAQ_DATA, COLORS } from '../../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-black text-center mb-16" style={{ color: COLORS.primary }}>
          Perguntas Frequentes
        </h2>
        
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button 
                className="w-full flex items-center justify-between p-6 lg:p-8 text-left transition-colors hover:bg-gray-50"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="text-lg lg:text-xl font-bold text-gray-800">{item.question}</span>
                <span className="flex-shrink-0 ml-4 p-2 rounded-full bg-blue-50 text-blue-600">
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
      </div>
    </section>
  );
};

export default FAQ;
