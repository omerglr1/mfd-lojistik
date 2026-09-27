import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, MessageCircle, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { COMPANY_INFO } from '../data/companyData';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Notification / Contact Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <a href={`tel:${COMPANY_INFO.phone1Raw}`} className="top-info-item" title="Türkiye Hattı">
              <Phone size={13} className="top-icon" />
              <span>TR: {COMPANY_INFO.phone1Formatted}</span>
            </a>
            <span className="top-divider">|</span>
            <a href={`tel:${COMPANY_INFO.phone2Raw}`} className="top-info-item" title="Yurtdışı / Ukrayna Hattı">
              <Phone size={13} className="top-icon" />
              <span>UA: {COMPANY_INFO.phone2Formatted}</span>
            </a>
            <span className="top-divider">|</span>
            <a href={`mailto:${COMPANY_INFO.email}`} className="top-info-item">
              <Mail size={13} className="top-icon" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="top-divider mobile-hide">|</span>
            <div className="top-info-item mobile-hide">
              <Clock size={13} className="top-icon" />
              <span>Firma Sahipleri: <strong>{COMPANY_INFO.owner}</strong></span>
            </div>
          </div>

          <div className="top-bar-right">
            <span className="route-badge">Avrupa • Ortadoğu • Orta Asya</span>
            <a 
              href={COMPANY_INFO.instagram}
              target="_blank" 
              rel="noopener noreferrer"
              className="top-ig-badge"
              title="MFD Lojistik Resmi Instagram Sayfası"
            >
              <InstagramIcon size={14} />
              <span>Instagram</span>
            </a>
            <a 
              href={COMPANY_INFO.whatsappUrl("Merhaba MFD Lojistik, taşımacılık hizmetleriniz hakkında bilgi almak istiyorum.")}
              target="_blank" 
              rel="noopener noreferrer"
              className="top-wa-badge"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="main-nav">
        <div className="container main-nav-container">
          {/* Logo & Brand */}
          <a href="#" className="brand-logo-link" onClick={() => scrollTo('hero')}>
            <div className="logo-img-wrapper">
              <img src={COMPANY_INFO.logo} alt="MFD Lojistik Logo" className="brand-logo-img" />
            </div>
            <div className="brand-text">
              <span className="brand-title">MFD <span className="gold-text">LOJİSTİK</span></span>
              <span className="brand-tagline">Uluslararası Taşımacılık • Mehmet Faruk Dere & Mahmut Dere</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="nav-links desktop-only">
            <li><button onClick={() => scrollTo('hero')} className="nav-link-btn">Ana Sayfa</button></li>
            <li><button onClick={() => scrollTo('about')} className="nav-link-btn">Kurumsal & Kurucular</button></li>
            <li><button onClick={() => scrollTo('services')} className="nav-link-btn">Hizmetlerimiz</button></li>
            <li><button onClick={() => scrollTo('routes')} className="nav-link-btn">Güzergahlar</button></li>
            <li><button onClick={() => scrollTo('faq')} className="nav-link-btn">S.S.S.</button></li>
            <li><button onClick={() => scrollTo('contact')} className="nav-link-btn">İletişim</button></li>
          </ul>

          {/* Action CTAs */}
          <div className="nav-actions desktop-only">
            <a 
              href={COMPANY_INFO.instagram}
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-ig-icon-btn"
              title="Instagram'da Takip Edin"
              aria-label="Instagram"
            >
              <InstagramIcon size={19} />
            </a>

            <a 
              href={COMPANY_INFO.whatsappUrl()}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-whatsapp nav-wa-btn"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>

            <button onClick={() => scrollTo('contact')} className="btn btn-gold nav-quote-btn">
              <span>Bize Ulaşın</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menüyü Aç/Kapat"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-links">
            <li><button onClick={() => scrollTo('hero')}>Ana Sayfa</button></li>
            <li><button onClick={() => scrollTo('about')}>Kurumsal & Kurucular</button></li>
            <li><button onClick={() => scrollTo('services')}>Hizmetlerimiz</button></li>
            <li><button onClick={() => scrollTo('routes')}>Güzergahlar & Ülkeler</button></li>
            <li><button onClick={() => scrollTo('faq')}>Sıkça Sorulan Sorular</button></li>
            <li><button onClick={() => scrollTo('contact')}>İletişim</button></li>
          </ul>

          <div className="mobile-drawer-footer">
            <a 
              href={COMPANY_INFO.whatsappUrl()}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-100"
            >
              <MessageCircle size={18} />
              <span>WhatsApp ile Hızlı Ulaşın</span>
            </a>

            <a 
              href={COMPANY_INFO.instagram}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-instagram w-100"
            >
              <InstagramIcon size={18} />
              <span>Instagram (@mfdlojistik)</span>
            </a>

            <div className="mobile-drawer-contact">
              <a href={`tel:${COMPANY_INFO.phone1Raw}`}>📞 TR: {COMPANY_INFO.phone1Formatted}</a>
              <a href={`tel:${COMPANY_INFO.phone2Raw}`}>📞 UA: {COMPANY_INFO.phone2Formatted}</a>
              <a href={`mailto:${COMPANY_INFO.email}`}>✉️ {COMPANY_INFO.email}</a>
              <div className="mobile-drawer-owners">
                <span>Firma Sahipleri:</span>
                <strong>{COMPANY_INFO.owner}</strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
