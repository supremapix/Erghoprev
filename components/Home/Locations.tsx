
import React from 'react';
import { COLORS } from '../../constants';

const Locations: React.FC = () => {
  const bairrosCuritiba = [
    'Abranches', 'Água Verde', 'Ahú', 'Alto Boqueirão', 'Alto da Glória', 'Alto da Rua XV', 'Atuba', 'Augusta', 'Bacacheri', 'Bairro Alto', 'Batel', 'Bigorrilho', 'Boa Vista', 'Bom Retiro', 'Boqueirão', 'Butiatuvinha', 'Cabral', 'Cachoeira', 'Cajuru', 'Campina do Siqueira', 'Campo Comprido', 'Campo de Santana', 'Capão da Imbuia', 'Capão Raso', 'Cascatinha', 'Caximba', 'Centro', 'Centro Cívico', 'Cidade Industrial', 'Cristo Rei', 'Fanny', 'Fazendinha', 'Ganchinho', 'Guabirotuba', 'Guaíra', 'Hauer', 'Hugo Lange', 'Jardim Botânico', 'Jardim das Américas', 'Jardim Social', 'Juvevê', 'Lamenha Pequena', 'Lindóia', 'Mercês', 'Mossunguê', 'Novo Mundo', 'Orleans', 'Parolin', 'Pilarzinho', 'Pinheirinho', 'Portão', 'Prado Velho', 'Rebouças', 'Riviera', 'Santa Cândida', 'Santa Felicidade', 'Santa Quitéria', 'Santo Inácio', 'São Braz', 'São Francisco', 'São João', 'São Lourenço', 'São Miguel', 'Seminário', 'Sítio Cercado', 'Taboão', 'Tarumã', 'Tatuquara', 'Tingui', 'Uberaba', 'Umbará', 'Vila Izabel', 'Vista Alegre', 'Xaxim'
  ];

  const cidadesMetropolitanas = [
    'Adrianópolis', 'Agudos do Sul', 'Almirante Tamandaré', 'Araucária', 'Balsa Nova', 'Bocaiúva do Sul', 'Campina Grande do Sul', 'Campo do Tenente', 'Campo Largo', 'Campo Magro', 'Cerro Azul', 'Colombo', 'Contenda', 'Doutor Ulysses', 'Fazenda Rio Grande', 'Itaperuçu', 'Lapa', 'Mandirituba', 'Piên', 'Pinhais', 'Piraquara', 'Quatro Barras', 'Quitandinha', 'Rio Branco do Sul', 'Rio Negro', 'São José dos Pinhais', 'Tijucas do Sul', 'Tunas do Paraná'
  ];

  return (
    <section id="locations" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative group">
                <img 
                    src="/erghoprev-analises.png" 
                    alt="Erghoprev Análises Ergonômicas" 
                    className="rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] relative z-10 w-full aspect-[3/4] object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                />
            </div>
            <div className="lg:w-1/2">
                <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight text-center lg:text-left" style={{ color: COLORS.primary }}>
                Atendemos em Toda a Região de Curitiba
                </h2>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium text-center lg:text-left">
                Nossa equipe está pronta para levar soluções ergonômicas para sua empresa, onde quer que ela esteja em Curitiba e região metropolitana.
                </p>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-rose-500 mb-4 tracking-widest uppercase text-center lg:text-left">Bairros de Curitiba</h3>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                        {bairrosCuritiba.map(bairro => (
                        <span key={bairro} className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                            {bairro}
                        </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-rose-500 mb-4 tracking-widest uppercase text-center lg:text-left">Cidades da Região Metropolitana</h3>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                        {cidadesMetropolitanas.map(cidade => (
                        <span key={cidade} className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                            {cidade}
                        </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
