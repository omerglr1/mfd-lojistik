import React from 'react';
import { ShieldCheck, Globe, Truck, Award, CheckCircle, ArrowRight, Phone, MessageCircle, UserCheck, Quote } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import './AboutSection.css';

export default function AboutSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Visual Presentation with Logistics Hub Image & Overlay Badges */}
          <div className="about-visual">
            <div className="about-image-wrapper">
              <img 
                src="/images/truck_hub.jpg" 
                alt="MFD Lojistik Uluslararası Dağıtım ve Lojistik Merkezi" 
                className="about-main-img" 
              />
              <div className="about-image-overlay"></div>

              {/* Floating Badge 1: Logo Stamp */}
              <div className="about-stamp-card">
                <img src={COMPANY_INFO.logo} alt="MFD Logo" className="stamp-logo" />
                <div>
                  <span className="stamp-title">MFD LOJİSTİK</span>
                  <span className="stamp-sub">Mehmet Faruk Dere</span>
                </div>
              </div>

              {/* Floating Badge 2: Corridors */}
              <div className="about-corridor-badge glass-panel">
                <div className="corridor-dot"></div>
                <span>Avrupa • Ortadoğu • Orta Asya</span>
              </div>
            </div>

            {/* Sub-strip with Key Credentials */}
            <div className="credentials-strip">
              <div className="credential-item">
                <ShieldCheck size={20} className="gold-text-icon" />
                <div>
                  <strong>CMR & Emtia</strong>
                  <span>%100 Yük Sigortası</span>
                </div>
              </div>
              <div className="credential-item">
                <Truck size={20} className="gold-text-icon" />
                <div>
                  <strong>Euro 6 Filo</strong>
                  <span>Çevre Dostu & Güçlü</span>
                </div>
              </div>
              <div className="credential-item">
                <Award size={20} className="gold-text-icon" />
                <div>
                  <strong>7/24 Dispeçer</strong>
                  <span>Kesintisiz Takip</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Description */}
          <div className="about-content">
            <div className="badge badge-gold">
              <Globe size={14} />
              <span>KURUMSAL PROFİL</span>
            </div>

            <h2 className="about-title">
              Küresel Ticarette <br />
              <span className="gold-text">Güvenilir Lojistik Ortağınız</span>
            </h2>

            <p className="about-lead">
              <strong>MFD LOJİSTİK</strong>, kurulduğu günden itibaren uluslararası taşımacılık standartlarını 
              en üst seviyede uygulayan, modern tır filosu ve güçlü uluslararası acente bağlantılarıyla 
              üç kıtada kesintisiz lojistik köprüleri kuran dinamik bir taşımacılık markasıdır.
            </p>

            <p className="about-paragraph">
              Türkiye'nin stratejik konumunu avantaja çevirerek <strong>Avrupa, Ortadoğu ve Orta Asya</strong> coğrafyasındaki 
              ithalatçı ve ihracatçılara; komple tır (FTL), parsiyel yük (LTL), sıcaklık kontrollü frigo taşımacılık 
              ve gabari dışı proje lojistiğinde yüksek hassasiyetle hizmet veriyoruz.
            </p>

            {/* Check points */}
            <div className="about-checks-list">
              <div className="check-item">
                <CheckCircle size={18} className="gold-text-icon" />
                <span>Uluslararası standartlarda CMR sigorta teminatı</span>
              </div>
              <div className="check-item">
                <CheckCircle size={18} className="gold-text-icon" />
                <span>Tüm araçlarda 7/24 anlık uydu & telematik GPS takibi</span>
              </div>
              <div className="check-item">
                <CheckCircle size={18} className="gold-text-icon" />
                <span>Gümrük kapılarında deneyimli acente ve hızlı geçiş prosedürleri</span>
              </div>
              <div className="check-item">
                <CheckCircle size={18} className="gold-text-icon" />
                <span>İhracat ve ithalat süreçlerinde tek elden operasyonel yönetim</span>
              </div>
            </div>

            {/* Actions */}
            <div className="about-actions">
              <a 
                href={COMPANY_INFO.whatsappUrl("Merhaba MFD Lojistik, kurumsal lojistik iş ortaklığı hakkında görüşmek istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} />
                <span>WhatsApp'tan Danışın</span>
              </a>

              <button onClick={() => scrollTo('contact')} className="btn btn-outline">
                <span>İletişime Geçin</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Founder & Owner Section: Mehmet Faruk Dere */}
        <div className="founder-quote-card glass-panel">
          <div className="founder-quote-header">
            <Quote size={38} className="gold-quote-icon" />
            <div className="founder-badge">
              <UserCheck size={16} className="gold-text-icon" />
              <span>FİRMA SAHİBİ & KURUCU VİZYONU</span>
            </div>
          </div>

          <p className="founder-quote-text">
            "Uluslararası taşımacılıkta güven, hız ve dürüstlük esastır. MFD Lojistik olarak; 
            Avrupa, Ortadoğu ve Orta Asya hatlarında iş ortaklarımızın yükünü kendi yükümüz gibi taşıyor; 
            her sevkiyatı zamanında ve kusursuz teslim etme sözümüzü tutuyoruz."
          </p>

          <div className="founder-signature-wrap">
            <div className="founder-info-block">
              <strong className="founder-name">Mehmet Faruk Dere</strong>
              <span className="founder-title">MFD LOJİSTİK — Firma Sahibi & Kurucu</span>
            </div>

            <div className="founder-acronym-badge">
              <div className="mfd-letters">
                <span><strong>M</strong>ehmet</span>
                <span className="sep">•</span>
                <span><strong>F</strong>aruk</span>
                <span className="sep">•</span>
                <span><strong>D</strong>ere</span>
              </div>
              <span className="mfd-tag">MFD LOJİSTİK GÜVENCESİ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
