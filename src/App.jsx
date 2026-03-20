import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import GraphicPage from './pages/GraphicPage';
import FashionPage from './pages/FashionPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import useScrollReveal from './hooks/useScrollReveal';
import './components/PortfolioGrid.css';
import './page-transitions.css';

function AnimatedRoutes() {
  const location = useLocation();
  useScrollReveal();

  return (
    <div key={location.pathname} className="page-enter">
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/graphic" element={<GraphicPage />} />
        <Route path="/fashion" element={<FashionPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
