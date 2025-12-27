
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import FloatingButtons from './components/Common/FloatingButtons';

const HomePage = lazy(() => import('./pages/HomePage'));
const LocationPage = lazy(() => import('./pages/LocationPage'));

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-[100px]">
          <Suspense fallback={<div className="h-screen flex items-center justify-center">Carregando...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/local/:location" element={<LocationPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
};

export default App;
