import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import RoutesSection from './components/RoutesSection';
import WhyChooseUs from './components/WhyChooseUs';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="app-root">
      {/* Top Bar & Navigation */}
      <Navbar />

      <main>
        {/* Hero with Branded Truck & Actions */}
        <Hero />

        {/* Corporate Profile, Mehmet Faruk Dere Vision & Values */}
        <AboutSection />

        {/* Logistics Services */}
        <ServicesSection />

        {/* International Trade Corridors (Europe, Middle East, Central Asia) */}
        <RoutesSection />

        {/* Why Choose Us & Standards */}
        <WhyChooseUs />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Contact & Dispatch Desk */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* 7/24 Floating WhatsApp Support Widget */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
