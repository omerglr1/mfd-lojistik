import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/companyData';
import './FaqSection.css';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        {/* Section Title */}
        <div className="section-title-wrap">
          <span className="badge badge-gold">
            <HelpCircle size={14} />
            <span>SIKÇA SORULAN SORULAR</span>
          </span>
          <h2 className="section-title">
            Uluslararası Taşımacılıkta <br />
            <span className="gold-text">Merak Edilenler</span>
          </h2>
          <p className="section-desc">
            Navlun süreçleri, gümrükleme, sigorta ve transit sürelerle ilgili en çok sorulan soruların yanıtları.
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item glass-panel ${isOpen ? 'open' : ''}`}
                onClick={() => toggleAccordion(idx)}
              >
                <div className="faq-question-row">
                  <span className="faq-number">0{idx + 1}</span>
                  <h3 className="faq-question">{faq.q}</h3>
                  <div className={`faq-chevron ${isOpen ? 'rotated' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </div>

                {isOpen && (
                  <div className="faq-answer-row">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Support Footer */}
        <div className="faq-help-footer glass-panel">
          <div>
            <h4>Başka bir sorunuz veya özel bir gereksiniminiz mi var?</h4>
            <p>Müşteri temsilcimiz 7/24 sorularınızı yanıtlamak ve size özel lojistik çözüm üretmek için hazır.</p>
          </div>
          <a 
            href={COMPANY_INFO.whatsappUrl("Merhaba MFD Lojistik, aklıma takılan bir soru hakkında bilgi almak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageCircle size={18} />
            <span>WhatsApp'tan Sorun</span>
          </a>
        </div>
      </div>
    </section>
  );
}
