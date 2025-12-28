
import React from 'react';
import { COLORS } from '../../constants';

const Locations: React.FC = () => {
  const bairrosCuritiba = [
    'Água Verde', 'Alto da Glória', 'Alto da XV', 'Bairro Alto', 'Batel', 'Bigorrilho', 'Boa Vista', 'Boqueirão',
    'Cabral', 'Cajuru', 'Campina do Siqueira', 'Campo Comprido', 'Capão Raso', 'Centro', 'Centro Cívico',
    'Cidade Industrial De Curitiba (CIC)', 'Cristo Rei', 'Fanny', 'Fazendinha', 'Guaíra', 'Hauer', 'Hugo Lange',
    'Jardim Botânico', 'Jardim das Américas', 'Juvevê', 'Lindóia', 'Mercês', 'Novo Mundo', 'Parolin',
    'Pinheirinho', 'Portão', 'Prado Velho', 'Rebouças', 'Santa Cândida', 'Santa Felicidade', 'Santa Quitéria',
    'Santo Inácio', 'São Braz', 'São Francisco', 'São João', 'São Lourenço', 'Seminário', 'Tarumã',
    'Tatuquara', 'Tingui', 'Uberaba', 'Umbará', 'Vila Izabel', 'Vista Alegre', 'Xaxim'
  ];

  const cidadesMetropolitanas = [
    'Almirante Tamandaré', 'Araucária', 'Balsa Nova', 'Bocaiúva do Sul', 'Campina Grande do Sul', 'Campo Largo',
    'Campo Magro', 'Colombo', 'Contenda', 'Fazenda Rio Grande', 'Itaperuçu', 'Mandirituba', 'Pinhais',
    'Piraquara', 'Quatro Barras', 'Rio Branco do Sul', 'São José dos Pinhais', 'Tijucas do Sul'
  ];

  return (
    <section id="locations" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight text-center" style={{ color: COLORS.primary }}>
          Atendemos em Toda a Região de Curitiba
        </h2>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium text-center">
          Nossa equipe está pronta para levar soluções ergonômicas para sua empresa, onde quer que ela esteja em Curitiba e região metropolitana.
        </p>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-rose-500 mb-4 tracking-widest uppercase text-center">Bairros de Curitiba</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {bairrosCuritiba.map(bairro => (
              <span key={bairro} className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                {bairro}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-rose-500 mb-4 tracking-widest uppercase text-center">Cidades da Região Metropolitana</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {cidadesMetropolitanas.map(cidade => (
              <span key={cidade} className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                {cidade}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
