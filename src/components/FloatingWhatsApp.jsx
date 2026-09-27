import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Phone, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const quickMessages = [
    "🚚 Komple Tır (FTL) navlun fiyatı öğrenmek istiyorum.",
    "📦 Parsiyel (LTL) yükümüz için çıkış programı ve fiyat alabilir miyim?",
    "❄️ Frigo soğuk zincir taşımacılığı için araç müsaitliği nedir?",
    "🌍 Avrupa & Ortadoğu hattınız hakkında bilgi almak istiyorum."
  ];

  const handleSend = (textToSend) => {
    const msg = textToSend || userMsg || "Merhaba MFD Lojistik, taşımacılık hizmetleriniz hakkında bilgi almak istiyorum.";
    const url = `https://wa.me/905522885331?text=${encodeURIComponent(msg)}`;
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
              <span>WhatsApp Müşteri Masası • 7/24 Aktif</span>
            </div>
            <button className="wa-close-btn" onClick={() => setIsOpen(false)} aria-label="Kapat">
              <X size={18} />
            </button>
          </div>

          <div className="wa-popup-body">
            <div className="wa-bubble incoming">
              <p>
                Merhaba! 👋 <strong>MFD Lojistik</strong>'e hoş geldiniz.
                Avrupa, Ortadoğu veya Orta Asya sevkiyatlarınız için anında navlun fiyatı ve araç bilgisi alabilirsiniz.
              </p>
              <span className="wa-bubble-time">0552 288 5331</span>
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

      {/* Main Floating Trigger Button */}
      <button 
        className="wa-floating-btn pulse-whatsapp"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="WhatsApp Canlı Destek"
      >
        <MessageCircle size={32} />
        <span className="wa-floating-badge">7/24</span>
      </button>
    </div>
  );
}
