
import React, { useState } from 'react';
import { COLORS, CONTACT_INFO } from '../../constants';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Using the user requested base text structure
    const baseText = "Ol%C3%A1%20encontrei%20seu%20site%3A%20*%20Erghoprev*%20no%20Google%20gostaria%20de%20saber%20*sobre%3A*";
    const detailedMessage = `\n\n*Nome:* ${formData.name}\n*Serviço:* ${formData.service}\n*Mensagem:* ${formData.message}`;
    
    const whatsappURL = `https://api.whatsapp.com/send?phone=5541997801951&text=${baseText}${encodeURIComponent(detailedMessage)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: '#dbeafe' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-6xl font-black mb-8" style={{ color: COLORS.primary }}>
              Como Começar? <br />
              <span style={{ color: COLORS.accent }}>Fale Conosco!</span>
            </h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Deseja realizar uma análise ergonômica em sua empresa? Preencha o formulário ao lado e nossa equipe entrará em contato em breve para agendar uma visita técnica.
            </p>
            
            <div className="space-y-6">
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg text-blue-900 text-2xl group-hover:bg-blue-900 group-hover:text-white transition-all">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Telefone</p>
                  <p className="text-xl font-black text-blue-900">{CONTACT_INFO.phone}</p>
                </div>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg text-rose-500 text-2xl group-hover:bg-rose-500 group-hover:text-white transition-all">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">E-mail</p>
                  <p className="text-xl font-black text-blue-900">{CONTACT_INFO.email}</p>
                </div>
              </a>
              <a href={CONTACT_INFO.whatsappBase} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg text-emerald-500 text-2xl group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">WhatsApp</p>
                  <p className="text-xl font-black text-blue-900">Conversar Agora</p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl space-y-4 border border-blue-50">
              <input 
                type="text" 
                placeholder="Nome completo" 
                required
                className="w-full px-6 py-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  required
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-400 transition-all outline-none"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
                <input 
                  type="tel" 
                  placeholder="WhatsApp / Telefone" 
                  required
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-400 transition-all outline-none"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <select 
                required
                className="w-full px-6 py-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-400 transition-all outline-none"
                value={formData.service}
                onChange={e => setFormData({...formData, service: e.target.value})}
              >
                <option value="">Selecione o serviço</option>
                <option value="Análise Ergonômica">Análise Ergonômica (AET)</option>
                <option value="Laudo Ergonômico">Laudo Ergonômico (LET)</option>
                <option value="Treinamentos">Treinamentos / NR-17</option>
                <option value="Projeto Ergonômico">Projeto Ergonômico</option>
                <option value="Home Office">Home Office</option>
              </select>
              <textarea 
                placeholder="Como podemos te ajudar?" 
                rows={4} 
                required
                className="w-full px-6 py-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-400 transition-all outline-none"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
              <button 
                type="submit" 
                className="w-full py-5 rounded-xl text-white font-black text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
                style={{ backgroundColor: COLORS.primary }}
              >
                <i className="fab fa-whatsapp"></i>
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
