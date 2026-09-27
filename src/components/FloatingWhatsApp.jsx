import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Phone, ShieldCheck } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { COMPANY_INFO } from '../data/companyData';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');
  const [selectedPhone, setSelectedPhone] = useState('905522885331');

  const quickMessages = [
    "🚚 Komple Tır (FTL) navlun fiyatı öğrenmek istiyorum.",
    "📦 Parsiyel (LTL) yükümüz için çıkış programı ve fiyat alabilir miyim?",
    "❄️ Frigo soğuk zincir taşımacılığı için araç müsaitliği nedir?",
    "🌍 Avrupa & Ortadoğu hattınız hakkında bilgi almak istiyorum."
  ];

  const handleSend = (textToSend, customPhone) => {
    const msg = textToSend || userMsg || "Merhaba MFD Lojistik, taşımacılık hizmetleriniz hakkında bilgi almak istiyorum.";
    const phoneToUse = customPhone || selectedPhone;
    const url = `https://wa.me/${phoneToUse}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="floating-wa-container">
      {/* Floating Popup Card */}
      {isOpen && (
        <div className="wa-popup-card">
          <div className="wa-popup-header">
            <div className="wa-header-avatar">
              <img src={COMPANY_INFO.logo} alt="MFD Logo" className="wa-logo-img" />
              <span className="wa-online-indicator"></span>
            </div>
            <div className="wa-header-text">
              <h4>MFD LOJİSTİK</h4>
              <span>Canlı Müşteri Masası • 7/24 Aktif</span>
            </div>
            <button className="wa-close-btn" onClick={() => setIsOpen(false)} aria-label="Kapat">
              <X size={18} />
            </button>
          </div>

          {/* Number Selector Tabs */}
          <div className="wa-phone-tabs">
            <button 
              className={`wa-phone-tab ${selectedPhone === '905522885331' ? 'active' : ''}`}
              onClick={() => setSelectedPhone('905522885331')}
            >
              🇹🇷 TR: {COMPANY_INFO.phone1Formatted}
            </button>
            <button 
              className={`wa-phone-tab ${selectedPhone === '380936113131' ? 'active' : ''}`}
              onClick={() => setSelectedPhone('380936113131')}
            >
              🇺🇦 UA: {COMPANY_INFO.phone2Formatted}
            </button>
          </div>

          <div className="wa-popup-body">
            <div className="wa-bubble incoming">
              <p>
                Merhaba! 👋 <strong>MFD Lojistik</strong>'e hoş geldiniz.
                Avrupa, Ortadoğu ve Orta Asya sevkiyatlarınız için anında navlun teklifi alabilirsiniz.
              </p>
              <div className="wa-bubble-phones">
                <span>🇹🇷 {COMPANY_INFO.phone1Formatted}</span>
                <span>•</span>
                <span>🇺🇦 {COMPANY_INFO.phone2Formatted}</span>
              </div>
            </div>

            <div className="wa-quick-options">
              <span className="quick-opt-title">Hızlı Konular:</span>
              {quickMessages.map((item, idx) => (
                <button 
                  key={idx} 
                  className="quick-opt-btn"
                  onClick={() => handleSend(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Instagram Banner in Popup */}
            <a 
              href={COMPANY_INFO.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="wa-ig-banner"
            >
              <InstagramIcon size={16} />
              <span>Instagram'da Filomuzu İnceleyin (@mfdlojistik)</span>
            </a>
          </div>

          <div className="wa-popup-footer">
            <input 
              type="text" 
              placeholder="Mesajınızı yazın..." 
              value={userMsg} 
              onChange={(e) => setUserMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              className="wa-input"
            />
            <button 
              className="wa-send-btn" 
              onClick={() => handleSend()}
              aria-label="WhatsApp'ta Gönder"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Buttons Group: Instagram + WhatsApp */}
      <div className="floating-buttons-stack">
        <a 
          href={COMPANY_INFO.instagram}
          target="_blank" 
          rel="noopener noreferrer"
          className="ig-floating-btn"
          aria-label="MFD Lojistik Instagram Sayfası"
          title="Instagram @mfdlojistik"
        >
          <InstagramIcon size={28} />
        </a>

        <button 
          className="wa-floating-btn pulse-whatsapp"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="WhatsApp Canlı Destek"
        >
          <MessageCircle size={32} />
          <span className="wa-floating-badge">7/24</span>
        </button>
      </div>
    </div>
  );
}
