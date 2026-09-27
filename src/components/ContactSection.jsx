import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { COMPANY_INFO } from '../data/companyData';
import './ContactSection.css';

export default function ContactSection() {
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Genel Bilgi ve Navlun Talebi',
    message: ''
  });

  const [formSent, setFormSent] = useState(false);

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  const handleWhatsAppDirect = (phoneRaw = '905522885331') => {
    const text = `Merhaba MFD Lojistik,%0A%0A*Ad Soyad:* ${contactForm.name || 'Ziyaretçi'}%0A*Telefon:* ${contactForm.phone || 'Belirtilmedi'}%0A*E-posta:* ${contactForm.email || 'Belirtilmedi'}%0A*Konu:* ${contactForm.subject}%0A*Mesaj:* ${contactForm.message || 'Lojistik hizmetleriniz hakkında görüşmek istiyorum.'}`;
    window.open(`https://wa.me/${phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Title */}
        <div className="section-title-wrap">
          <span className="badge badge-gold">
            <Phone size={14} />
            <span>BİZE ULAŞIN</span>
          </span>
          <h2 className="section-title">
            7/24 Kesintisiz İletişim & <br />
            <span className="gold-text">Lojistik Destek Masası</span>
          </h2>
          <p className="section-desc">
            Sevkiyatlarınız, navlun sorgulamalarınız veya acil araç talepleriniz için 
            telefon, WhatsApp veya e-posta yoluyla bize dilediğiniz an ulaşabilirsiniz.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="contact-cards-grid">
          {/* Phone Card 1: TR */}
          <a href={`tel:${COMPANY_INFO.phone1Raw}`} className="c-card glass-panel" title="Türkiye Hattını Ara">
            <div className="c-card-icon-wrap">
              <Phone size={26} className="c-card-icon" />
            </div>
            <span className="c-card-label">Türkiye Telefon & Operasyon</span>
            <strong className="c-card-main">{COMPANY_INFO.phone1Formatted}</strong>
            <span className="c-card-sub">🇹🇷 Hemen aramak için tıklayın</span>
          </a>

          {/* Phone Card 2: UA */}
          <a href={`tel:${COMPANY_INFO.phone2Raw}`} className="c-card glass-panel" title="Ukrayna / Yurtdışı Hattını Ara">
            <div className="c-card-icon-wrap">
              <Phone size={26} className="c-card-icon" />
            </div>
            <span className="c-card-label">Yurtdışı / Ukrayna Hattı</span>
            <strong className="c-card-main">{COMPANY_INFO.phone2Formatted}</strong>
            <span className="c-card-sub">🇺🇦 Doğrudan aramak için tıklayın</span>
          </a>

          {/* WhatsApp Card */}
          <a 
            href={COMPANY_INFO.whatsappUrl("Merhaba MFD Lojistik, WhatsApp destek hattınızdan ulaşıyorum.")} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="c-card glass-panel wa-highlight"
          >
            <div className="c-card-icon-wrap wa-icon-wrap">
              <MessageCircle size={26} className="c-card-icon" />
            </div>
            <span className="c-card-label">7/24 WhatsApp Canlı Hat</span>
            <strong className="c-card-main">{COMPANY_INFO.phone1}</strong>
            <span className="c-card-sub">Anında sohbet başlatmak için tıklayın</span>
          </a>

          {/* Instagram Card */}
          <a 
            href={COMPANY_INFO.instagram}
            target="_blank" 
            rel="noopener noreferrer" 
            className="c-card glass-panel ig-card-highlight"
            title="MFD Lojistik Instagram Hesabını Görüntüle"
          >
            <div className="c-card-icon-wrap ig-icon-wrap">
              <InstagramIcon size={26} className="c-card-icon ig-pink-icon" />
            </div>
            <span className="c-card-label">Resmi Instagram</span>
            <strong className="c-card-main">@mfdlojistik</strong>
            <span className="c-card-sub">Filo paylaşımları & güncel seferler</span>
          </a>

          {/* Email Card */}
          <a href={`mailto:${COMPANY_INFO.email}`} className="c-card glass-panel">
            <div className="c-card-icon-wrap">
              <Mail size={26} className="c-card-icon" />
            </div>
            <span className="c-card-label">Kurumsal E-Posta</span>
            <strong className="c-card-main">{COMPANY_INFO.email}</strong>
            <span className="c-card-sub">Resmi teklif & evrak gönderimi</span>
          </a>

          {/* Owner / Leadership Card */}
          <div className="c-card glass-panel">
            <div className="c-card-icon-wrap">
              <ShieldCheck size={26} className="c-card-icon" />
            </div>
            <span className="c-card-label">Firma Sahipleri & Kurucular</span>
            <strong className="c-card-main">{COMPANY_INFO.owner}</strong>
            <span className="c-card-sub">Genel Yönetim & Koordinasyon</span>
          </div>
        </div>

        {/* Form & Map/Route Details */}
        <div className="contact-detail-layout">
          {/* Left Form */}
          <div className="contact-form-box glass-panel">
            <h3>Bize Mesaj Gönderin</h3>
            <p>Aşağıdaki formu doldurarak talebinizi iletebilir veya doğrudan WhatsApp'a aktarabilirsiniz.</p>

            {!formSent ? (
              <form onSubmit={handleSubmit} className="c-form">
                <div className="c-form-row">
                  <div className="c-input-group">
                    <label>Adınız Soyadınız</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={contactForm.name} 
                      onChange={handleChange} 
                      placeholder="Ad Soyad"
                      required 
                    />
                  </div>
                  <div className="c-input-group">
                    <label>Telefon Numaranız</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={contactForm.phone} 
                      onChange={handleChange} 
                      placeholder="05XX XXX XX XX"
                      required 
                    />
                  </div>
                </div>

                <div className="c-form-row">
                  <div className="c-input-group">
                    <label>E-Posta Adresiniz</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={contactForm.email} 
                      onChange={handleChange} 
                      placeholder="ornek@firma.com" 
                    />
                  </div>
                  <div className="c-input-group">
                    <label>Konu</label>
                    <input 
                      type="text" 
                      name="subject" 
                      value={contactForm.subject} 
                      onChange={handleChange} 
                    />
                  </div>
                </div>

                <div className="c-input-group">
                  <label>Mesajınız</label>
                  <textarea 
                    name="message" 
                    rows="4" 
                    value={contactForm.message} 
                    onChange={handleChange} 
                    placeholder="Yükleme güzergahı, tonaj veya sormak istediğiniz ayrıntıları yazınız..."
                    required
                  ></textarea>
                </div>

                <div className="c-form-actions">
                  <button type="submit" className="btn btn-gold">
                    <Send size={18} />
                    <span>Mesajı Gönder</span>
                  </button>

                  <button 
                    type="button" 
                    onClick={() => handleWhatsAppDirect('905522885331')}
                    className="btn btn-whatsapp"
                    title="Türkiye WhatsApp Hattına Aktar"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp TR</span>
                  </button>

                  <button 
                    type="button" 
                    onClick={() => handleWhatsAppDirect('380936113131')}
                    className="btn btn-whatsapp btn-wa-ua"
                    title="Ukrayna / Yurtdışı WhatsApp Hattına Aktar"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp UA</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="c-form-success">
                <CheckCircle2 size={54} className="gold-text-icon" />
                <h4>Mesajınız Başarıyla İletildi!</h4>
                <p>En kısa sürede belirttiğiniz iletişim kanalından geri dönüş sağlayacağız.</p>
                <button onClick={() => setFormSent(false)} className="btn btn-outline">
                  Yeni Mesaj Gönder
                </button>
              </div>
            )}
          </div>

          {/* Right Corridor Hub Map Card */}
          <div className="contact-corridors-box glass-panel">
            <div className="corridor-box-header">
              <span className="badge badge-gold">ULUSLARARASI KORİDORLAR</span>
              <h3>Operasyonel Sevkiyat Hatları</h3>
              <p>MFD Lojistik, Türkiye merkezli olarak 3 ana ticaret hattında tam yetkili ve belgeli taşımacılık yapmaktadır.</p>
            </div>

            <div className="hub-list">
              <div className="hub-item">
                <div className="hub-marker gold"></div>
                <div>
                  <strong>Avrupa Transit Hattı</strong>
                  <span>Kapıkule / Hamzabeyli & Ro-Ro ➔ Almanya, Hollanda, İtalya, Avusturya, Polonya, Fransa</span>
                </div>
              </div>

              <div className="hub-item">
                <div className="hub-marker green"></div>
                <div>
                  <strong>Ortadoğu & Körfez Hattı</strong>
                  <span>Habur & Körfez Geçişi ➔ Irak, Suudi Arabistan, Dubai (BAE), Katar, Kuveyt</span>
                </div>
              </div>

              <div className="hub-item">
                <div className="hub-marker blue"></div>
                <div>
                  <strong>Orta Asya & İpekyolu Hattı</strong>
                  <span>Sarp / Trans-Kafkas & Trans-Hazar ➔ Azerbaycan, Kazakistan, Özbekistan, Türkmenistan</span>
                </div>
              </div>
            </div>

            <div className="direct-wa-callout">
              <div className="wa-callout-text">
                <strong>Anında İletişim İhtiyacınız mı Var?</strong>
                <span>Yetkili dispeçerimiz ile doğrudan WhatsApp üzerinden canlı görüşme başlatın.</span>
              </div>
              <div className="wa-callout-actions">
                <a 
                  href={COMPANY_INFO.whatsappUrl()}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp"
                  title="Türkiye WhatsApp Hattı"
                >
                  <MessageCircle size={16} />
                  <span>🇹🇷 {COMPANY_INFO.phone1}</span>
                </a>
                <a 
                  href={COMPANY_INFO.whatsappUrlUA()}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp btn-wa-ua"
                  title="Ukrayna / Yurtdışı WhatsApp Hattı"
                >
                  <MessageCircle size={16} />
                  <span>🇺🇦 {COMPANY_INFO.phone2}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
