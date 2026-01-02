
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import FloatingButtons from './components/Common/FloatingButtons';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-[100px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/local/:location" element={<LocationPage />} />
            
            {/* Rotas de Compatibilidade Legado (.html) */}
            <Route path="/contato.html" element={<Navigate to="/" replace state={{ scrollTo: 'contact' }} />} />
            <Route path="/index.html" element={<Navigate to="/" replace />} />
            
            {/* Rota 404 Personalizada */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
};

export default App;
