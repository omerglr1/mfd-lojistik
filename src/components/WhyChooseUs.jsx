import React from 'react';
import { 
  Clock, 
  ShieldCheck, 
  Radio, 
  Globe, 
  MessageCircle, 
  TrendingUp, 
  Award,
  CheckCircle2
} from 'lucide-react';
import { WHY_US, COMPANY_INFO } from '../data/companyData';
import './WhyChooseUs.css';

const ICON_MAP = {
  Clock: Clock,
  ShieldCheck: ShieldCheck,
  Radio: Radio,
  Globe: Globe,
  MessageCircle: MessageCircle,
  TrendingUp: TrendingUp
};

export default function WhyChooseUs() {
  return (
    <section className="why-us-section">
      <div className="container">
        {/* Title */}
        <div className="section-title-wrap">
          <span className="badge badge-gold">
            <Award size={14} />
            <span>NEDEN MFD LOJİSTİK?</span>
          </span>
          <h2 className="section-title">
            Uluslararası Taşımacılıkta <br />
            <span className="gold-text">Ayrıcalıklı Hizmet Standartlarımız</span>
          </h2>
          <p className="section-desc">
            Sadece yük taşımıyoruz; firmanızın küresel rekabet gücünü artıran 
            zamanında, güvenli ve şeffaf bir lojistik ortaklığı inşa ediyoruz.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="why-grid">
          {WHY_US.map((item, idx) => {
            const IconComp = ICON_MAP[item.icon] || ShieldCheck;
            return (
              <div key={idx} className="why-card glass-panel">
                <div className="why-icon-box">
                  <IconComp size={28} className="why-icon" />
                </div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.desc}</p>
                <div className="why-card-bar"></div>
              </div>
            );
          })}
        </div>

        {/* Big Assurance Callout */}
        <div className="why-assurance-banner glass-panel">
          <div className="assurance-left">
            <span className="badge badge-gold">KURUMSAL TAAHHÜDÜMÜZ</span>
            <h3>Sıfır Hasar, Tam Zamanında Teslim İlkesi</h3>
            <p>
              Yükleme anından varış gümrüğüne ve son teslim adresine kadar 
              her sevkiyat özel operasyon sorumlumuz tarafından anlık olarak yönetilir.
            </p>
          </div>
          <div className="assurance-right">
            <a 
              href={COMPANY_INFO.whatsappUrl("Merhaba MFD Lojistik, firmanızın hizmet güvenceleri ve taşımacılık şartları hakkında bilgi almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Operasyon Hattı</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
