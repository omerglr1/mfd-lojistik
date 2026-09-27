import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, Globe, Shield, ArrowUp, ChevronRight } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { COMPANY_INFO, SERVICES, REGIONS } from '../data/companyData';
import './Footer.css';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        {/* Main Footer Row */}
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <div className="footer-logo-wrap">
                <img src={COMPANY_INFO.logo} alt="MFD Lojistik Logo" className="footer-logo" />
              </div>
              <div className="footer-brand-title">
                <span className="brand-name">MFD <span className="gold-text">LOJİSTİK</span></span>
                <span className="brand-slogan">Uluslararası Taşımacılık & Tedarik Zinciri</span>
              </div>
            </div>

            <p className="footer-desc">
              Avrupa, Ortadoğu ve Orta Asya ülkelerine güçlü özmal filosu ve acente ağıyla 
              kesintisiz, güvenli ve CMR sigortalı lojistik hizmetleri sunar.
            </p>

            <div className="footer-contact-items">
              <a href={`tel:${COMPANY_INFO.phone1Raw}`} className="f-contact-link" title="Türkiye Telefon Hattı">
                <Phone size={16} className="gold-text-icon" />
                <span>🇹🇷 {COMPANY_INFO.phone1Formatted}</span>
              </a>
              <a href={`tel:${COMPANY_INFO.phone2Raw}`} className="f-contact-link" title="Ukrayna / Yurtdışı Telefon Hattı">
                <Phone size={16} className="gold-text-icon" />
                <span>🇺🇦 {COMPANY_INFO.phone2Formatted}</span>
              </a>
              <a href={COMPANY_INFO.instagram} target="_blank" rel="noopener noreferrer" className="f-contact-link f-ig-link" title="MFD Lojistik Instagram Hesabı">
                <InstagramIcon size={16} className="ig-pink-icon" />
                <span>Instagram: @mfdlojistik</span>
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="f-contact-link">
                <Mail size={16} className="gold-text-icon" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <div className="f-contact-link">
                <Globe size={16} className="gold-text-icon" />
                <span>Avrupa • Ortadoğu • Orta Asya</span>
              </div>
              <div className="f-contact-link">
                <span className="gold-text font-bold">Firma Sahipleri:</span>
                <span>{COMPANY_INFO.owner}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="footer-col">
            <h4 className="footer-title">Hızlı Bağlantılar</h4>
            <ul className="footer-nav-list">
              <li><button onClick={() => scrollTo('hero')}><ChevronRight size={14} /> Ana Sayfa</button></li>
              <li><button onClick={() => scrollTo('about')}><ChevronRight size={14} /> Kurumsal & Kurucu</button></li>
              <li><button onClick={() => scrollTo('services')}><ChevronRight size={14} /> Hizmetlerimiz</button></li>
              <li><button onClick={() => scrollTo('routes')}><ChevronRight size={14} /> Güzergahlar & Hatlar</button></li>
              <li><button onClick={() => scrollTo('faq')}><ChevronRight size={14} /> Sıkça Sorulan Sorular</button></li>
              <li><button onClick={() => scrollTo('contact')}><ChevronRight size={14} /> İletişim & Bize Ulaşın</button></li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="footer-col">
            <h4 className="footer-title">Hizmetlerimiz</h4>
            <ul className="footer-nav-list">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button onClick={() => scrollTo('services')}>
                    <ChevronRight size={14} /> {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions & Direct WhatsApp Col */}
          <div className="footer-col">
            <h4 className="footer-title">Faaliyet Alanları</h4>
            <div className="footer-regions-pills">
              <span className="f-pill">🇩🇪 Almanya</span>
              <span className="f-pill">🇳🇱 Hollanda</span>
              <span className="f-pill">🇮🇹 İtalya</span>
              <span className="f-pill">🇦🇹 Avusturya</span>
              <span className="f-pill">🇵🇱 Polonya</span>
              <span className="f-pill">🇮🇶 Irak</span>
              <span className="f-pill">🇦🇪 Dubai (BAE)</span>
              <span className="f-pill">🇸🇦 Suudi Arabistan</span>
              <span className="f-pill">🇦🇿 Azerbaycan</span>
              <span className="f-pill">🇰🇿 Kazakistan</span>
              <span className="f-pill">🇺🇿 Özbekistan</span>
              <span className="f-pill">🇹🇲 Türkmenistan</span>
            </div>

            <div className="footer-wa-box">
              <span>7/24 İletişim & WhatsApp Hattı</span>
              <a 
                href={COMPANY_INFO.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-100"
                title="Türkiye WhatsApp Hattı"
              >
                <MessageCircle size={16} />
                <span>🇹🇷 {COMPANY_INFO.phone1}</span>
              </a>

              <a 
                href={COMPANY_INFO.whatsappUrlUA()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-wa-ua w-100"
                title="Ukrayna / Yurtdışı WhatsApp Hattı"
              >
                <MessageCircle size={16} />
                <span>🇺🇦 {COMPANY_INFO.phone2}</span>
              </a>

              <a 
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-instagram w-100"
                title="MFD Lojistik Resmi Instagram Sayfası"
              >
                <InstagramIcon size={16} />
                <span>Instagram @mfdlojistik</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} <strong>MFD LOJİSTİK</strong>. Tüm hakları saklıdır. Uluslararası Taşımacılık & Lojistik.
          </p>

          <div className="footer-bottom-badges">
            <span className="f-sec-badge"><Shield size={14} /> CMR Sigortalı Taşımacılık</span>
            <span className="f-sec-badge">Euro 6 Çevre Standardı</span>
          </div>

          <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Yukarı Çık">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
