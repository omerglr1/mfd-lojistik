import React from 'react';
import { MessageCircle, Phone, ChevronRight, ShieldCheck, Clock, Globe2, Truck, Award } from 'lucide-react';
import { COMPANY_INFO, STATS } from '../data/companyData';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      {/* Background with Dark Glass & Gradient Vignette */}
      <div className="hero-bg-media">
        <img 
          src="/images/truck_hero.jpg" 
          alt="MFD Lojistik Uluslararası Taşımacılık Tır Filosu" 
          className="hero-bg-img"
        />
        <div className="hero-overlay-gradient"></div>
        <div className="hero-grid-pattern"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Top Badge */}
          <div className="hero-badge-wrap">
            <span className="badge badge-gold">
              <Globe2 size={15} />
              <span>Avrupa • Ortadoğu • Orta Asya Koridoru</span>
            </span>
            <span className="badge hero-badge-sub">
              <ShieldCheck size={14} className="gold-text-icon" />
              <span>CMR Sigortalı Taşımacılık</span>
            </span>
            <span className="badge badge-gold">
              <span>Kurucu: <strong>{COMPANY_INFO.owner}</strong></span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title">
            Sınırları Aşan Güven, <br />
            <span className="gold-text">Zamanında Teslimat</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            <strong>MFD Lojistik</strong> (Mehmet Faruk Dere); modern Euro 6 tır filosu, tecrübeli uzman kadrosu ve 
            güçlü acente ağıyla Avrupa, Ortadoğu ve Orta Asya ülkelerine 
            komple, parsiyel, frigo ve ağır proje taşımacılığında kesintisiz lojistik çözümleri sunar.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a 
              href={COMPANY_INFO.whatsappUrl("Merhaba MFD Lojistik, web sitenizden ulaşıyorum. Sevkiyatımız hakkında bilgi ve navlun teklifi almak istiyoruz.")}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-whatsapp hero-btn-wa pulse-whatsapp"
            >
              <MessageCircle size={22} />
              <span>WhatsApp'tan Hemen Ulaşın</span>
            </a>

            <button onClick={() => scrollTo('contact')} className="btn btn-gold hero-btn-quote">
              <Phone size={19} />
              <span>Bize Ulaşın</span>
            </button>

            <button onClick={() => scrollTo('services')} className="btn btn-outline hero-btn-fleet">
              <Truck size={20} />
              <span>Hizmetlerimiz</span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Key Advantages Badges */}
          <div className="hero-highlights">
            <div className="highlight-pill">
              <Clock size={16} className="pill-icon" />
              <span>Hızlı & Düzenli Seferler</span>
            </div>
            <div className="highlight-pill">
              <Award size={16} className="pill-icon" />
              <span>Gümrükleme & Antrepo</span>
            </div>
            <div className="highlight-pill">
              <Truck size={16} className="pill-icon" />
              <span>Özmal & Sözleşmeli Araçlar</span>
            </div>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="hero-stats-grid">
          {STATS.map((stat, idx) => (
            <div key={idx} className="hero-stat-card glass-panel">
              <span className="stat-value gold-text">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-sub">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
