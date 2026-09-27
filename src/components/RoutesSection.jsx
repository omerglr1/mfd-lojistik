import React, { useState } from 'react';
import { Globe, MapPin, Calendar, Clock, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { REGIONS, COMPANY_INFO } from '../data/companyData';
import './RoutesSection.css';

export default function RoutesSection() {
  const [activeRegionId, setActiveRegionId] = useState('avrupa');

  const currentRegion = REGIONS.find(r => r.id === activeRegionId) || REGIONS[0];

  return (
    <section id="routes" className="routes-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <span className="badge badge-gold">
            <Globe size={14} />
            <span>HİZMET VERİLEN COĞRAFYALAR</span>
          </span>
          <h2 className="section-title">
            Üç Kıtada Kesintisiz <br />
            <span className="gold-text">Uluslararası Taşımacılık Ağımız</span>
          </h2>
          <p className="section-desc">
            MFD Lojistik olarak; Avrupa'nın kalbinden Ortadoğu'nun körfez limanlarına ve 
            Orta Asya'nın tarihi İpekyolu güzergahlarına uzanan güçlü lojistik koridorlarını yönetiyoruz.
          </p>
        </div>

        {/* Region Switcher Tabs */}
        <div className="routes-nav-tabs">
          {REGIONS.map((region) => (
            <button
              key={region.id}
              className={`route-tab-pill ${activeRegionId === region.id ? 'active' : ''}`}
              onClick={() => setActiveRegionId(region.id)}
            >
              <span className="tab-pill-name">{region.name}</span>
              <span className="tab-pill-sub">{region.subtitle}</span>
            </button>
          ))}
        </div>

        {/* Active Region Display Card */}
        <div className="region-display-card glass-panel">
          <div className="region-grid">
            {/* Visual with Branded Truck on Route */}
            <div className="region-media">
              <img 
                src={currentRegion.image} 
                alt={`${currentRegion.name} MFD Lojistik Tır Filosu`} 
                className="region-truck-img" 
              />
              <div className="region-media-overlay"></div>
              <div className="region-badge-corner">
                <span className="gold-text font-bold">MFD LOJİSTİK</span>
                <span>{currentRegion.name} Özel Seferleri</span>
              </div>
            </div>

            {/* Information & Countries */}
            <div className="region-info">
              <div className="region-header">
                <span className="badge badge-gold">{currentRegion.subtitle}</span>
                <h3 className="region-heading">{currentRegion.name} Sevkiyat Koridoru</h3>
                <p className="region-p">{currentRegion.description}</p>
              </div>

              {/* Fast stats row */}
              <div className="region-stats-row">
                <div className="r-stat">
                  <Clock size={20} className="gold-text-icon" />
                  <div>
                    <span className="r-stat-label">Ortalama Transit Süre</span>
                    <strong className="r-stat-val gold-text">{currentRegion.transitTime}</strong>
                  </div>
                </div>

                <div className="r-stat">
                  <Calendar size={20} className="gold-text-icon" />
                  <div>
                    <span className="r-stat-label">Sefer Sıklığı</span>
                    <strong className="r-stat-val">{currentRegion.departures}</strong>
                  </div>
                </div>
              </div>

              {/* Countries & Major Hubs */}
              <div className="countries-section">
                <h4 className="countries-title">Düzenli Hizmet Verilen Ülkeler & Merkezler:</h4>
                <div className="countries-grid">
                  {currentRegion.countries.map((c, idx) => (
                    <div key={idx} className="country-card">
                      <div className="country-name-row">
                        <MapPin size={14} className="gold-text-icon" />
                        <strong>{c.name}</strong>
                      </div>
                      <span className="country-hubs">{c.hubs}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corridor Features */}
              <div className="corridor-features-list">
                {currentRegion.features.map((feat, idx) => (
                  <div key={idx} className="corridor-feat-item">
                    <CheckCircle2 size={16} className="gold-text-icon" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="region-cta-wrap">
                <a 
                  href={COMPANY_INFO.whatsappUrl(`Merhaba MFD Lojistik, ${currentRegion.name} (${currentRegion.subtitle}) güzergahınız için navlun teklifi ve sefer programı öğrenmek istiyorum.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} />
                  <span>{currentRegion.name} İçin WhatsApp'tan Teklif Al</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
