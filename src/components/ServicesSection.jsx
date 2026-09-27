import React from 'react';
import { 
  Truck, 
  Boxes, 
  ThermometerSnowflake, 
  Layers, 
  Compass, 
  Warehouse, 
  ArrowRight, 
  Check, 
  MessageCircle, 
  ShieldCheck 
} from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/companyData';
import './ServicesSection.css';

const ICON_MAP = {
  Truck: Truck,
  Boxes: Boxes,
  ThermometerSnowflake: ThermometerSnowflake,
  Layers: Layers,
  Compass: Compass,
  Warehouse: Warehouse
};

export default function ServicesSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <span className="badge badge-gold">
            <Truck size={14} />
            <span>LOJİSTİK HİZMETLERİMİZ</span>
          </span>
          <h2 className="section-title">
            Uluslararası Ticarette <br />
            <span className="gold-text">Kapsamlı Taşıma Çözümleri</span>
          </h2>
          <p className="section-desc">
            Avrupa, Ortadoğu ve Orta Asya hatlarında yükünüzün cinsine ve aciliyetine uygun, 
            yüksek güvenlikli ve maliyet avantajlı taşımacılık modelleri sunuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {SERVICES.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Truck;
            return (
              <div key={service.id} className="service-card glass-panel">
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <IconComponent size={28} className="service-icon" />
                  </div>
                  <span className="service-number">0{SERVICES.indexOf(service) + 1}</span>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.shortDesc}</p>

                <div className="service-features-list">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="service-feature-item">
                      <Check size={14} className="feature-check" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="service-card-footer">
                  <a 
                    href={COMPANY_INFO.whatsappUrl(`Merhaba MFD Lojistik, "${service.title}" hizmetiniz hakkında detaylı bilgi ve navlun fiyatı almak istiyorum.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-wa-link"
                  >
                    <MessageCircle size={16} />
                    <span>Hızlı Teklif İste</span>
                  </a>

                  <button onClick={() => scrollTo('contact')} className="service-calc-btn">
                    <span>İletişime Geç</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="services-cta-banner glass-panel">
          <div className="cta-banner-content">
            <ShieldCheck size={36} className="gold-text-icon banner-icon" />
            <div>
              <h3>Özel Bir Yükünüz veya Projeniz mi Var?</h3>
              <p>Mühendislerimiz ve lojistik uzmanlarımız rotanızı ve yükünüzü inceleyip size özel maliyet çalışması hazırlasın.</p>
            </div>
          </div>
          <div className="cta-banner-actions">
            <a 
              href={COMPANY_INFO.whatsappUrl("Merhaba MFD Lojistik, özel bir yük sevkiyatımız var. Lojistik ve taşıma planı için görüşmek istiyoruz.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={18} />
              <span>Uzmanla Görüş (0552 288 5331)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
