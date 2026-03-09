import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import Header from './components/Header';
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

      <footer style={{
        padding: '2.5rem 1.5rem',
        textAlign: 'center',
        borderTop: '3px solid #1A1A1A',
        backgroundColor: '#0D0D0D',
        color: '#8C8C8C',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', color: '#aaa', letterSpacing: '0.1em' }}>
          © {new Date().getFullYear()} MAHEEN'S PALETTE. ALL RIGHTS RESERVED.
        </p>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/privacy" style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.72rem',
            letterSpacing: '0.15em',
            color: '#666',
            textDecoration: 'none',
            borderBottom: '1px solid #444',
            paddingBottom: '2px',
          }}>
            PRIVACY POLICY
          </Link>
          <span style={{ color: '#333', fontSize: '0.6rem' }}>◆</span>
          <Link to="/terms" style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.72rem',
            letterSpacing: '0.15em',
            color: '#666',
            textDecoration: 'none',
            borderBottom: '1px solid #444',
            paddingBottom: '2px',
          }}>
            TERMS OF SERVICE
          </Link>
        </div>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', color: '#333', letterSpacing: '0.08em' }}>
          POWERED BY <span style={{ color: '#555', letterSpacing: '0.1em' }}>UAN TECHNOLOGIES</span>
        </p>
      </footer>
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
