
import React from 'react';
import { TESTIMONIALS, COLORS } from '../../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4" style={{ color: COLORS.primary }}>
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A confiança de grandes empresas é o que nos motiva a entregar sempre o melhor em ergonomia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="bg-blue-50 p-8 lg:p-10 rounded-[2.5rem] shadow-xl border border-blue-100 flex flex-col justify-between transition-transform hover:-translate-y-2"
            >
              <div>
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="text-xl text-gray-700 italic leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center text-white text-xl font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 leading-none mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
