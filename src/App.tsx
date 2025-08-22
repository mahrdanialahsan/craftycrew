import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
import AppDevelopmentPage from './pages/AppDevelopmentPage';
import AIAutomationPage from './pages/AIAutomationPage';
import GraphicDesignPage from './pages/GraphicDesignPage';
import RealEstateLeadPage from './pages/RealEstateLeadPage';
import SolarLeadPage from './pages/SolarLeadPage';
import TeamPage from './pages/TeamPage';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/web-app-development/web-development" element={<WebDevelopmentPage />} />
            <Route path="/services/web-app-development/app-development" element={<AppDevelopmentPage />} />
            <Route path="/services/ai-automation" element={<AIAutomationPage />} />
            <Route path="/services/graphic-design" element={<GraphicDesignPage />} />
            <Route path="/services/lead-generation/real-estate" element={<RealEstateLeadPage />} />
            <Route path="/services/lead-generation/solar" element={<SolarLeadPage />} />
        <Route path="/team" element={<TeamPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
