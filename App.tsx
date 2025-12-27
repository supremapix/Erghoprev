
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import FloatingButtons from './components/Common/FloatingButtons';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-[100px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/local/:location" element={<LocationPage />} />
            {/* Fallback para rotas não encontradas redirecionando para home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
};

export default App;
