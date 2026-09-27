import React, { useState } from 'react';
import { Search, MapPin, Calendar, Clock, CheckCircle2, AlertCircle, ArrowRight, Truck, MessageCircle, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import './QuickTracker.css';

const SAMPLE_TRACKS = {
  'MFD-TR7820': {
    code: 'MFD-TR7820',
    origin: 'İstanbul, Türkiye',
    destination: 'Münih, Almanya',
    status: 'Yolda - Kapıkule & Macaristan Transiti Tamamlandı',
    type: 'Komple Tır (FTL) - Mega Tenteli',
    progress: 75,
    eta: 'Yarın 14:00',
    plate: '34 MFD 108',
    temp: 'Standart Kuru Yük'
  },
  'MFD-DE4190': {
    code: 'MFD-DE4190',
    origin: 'Frankfurt, Almanya',
    destination: 'Bursa, Türkiye',
    status: 'Gümrük İşlemleri Sürüyor - Hamzabeyli',
    type: 'Frigo Soğuk Zincir (-18°C)',
    progress: 88,
    eta: 'Bugün 18:30',
    plate: '34 MFD 245',
    temp: '-18.4°C (Stabil)'
  },
  'MFD-AZ1034': {
    code: 'MFD-AZ1034',
    origin: 'İzmir, Türkiye',
    destination: 'Bakü, Azerbaycan',
    status: 'Trans-Kafkas Koridoru - Tiflis Geçildi',
    type: 'Proje & Endüstriyel Makine',
    progress: 60,
    eta: '2 Gün Sonra',
    plate: '34 MFD 330',
    temp: 'Standart'
  }
};

export default function QuickTracker() {
  const [trackInput, setTrackInput] = useState('');
  const [trackResult, setTrackResult] = useState(null);
  const [searchError, setSearchError] = useState('');

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    setSearchError('');
    const code = trackInput.trim().toUpperCase();
    if (!code) {
      setSearchError('Lütfen bir takip numarası giriniz.');
      return;
    }

    if (SAMPLE_TRACKS[code]) {
      setTrackResult(SAMPLE_TRACKS[code]);
    } else {
      setTrackResult({
        code: code,
        origin: 'İstanbul Hub, Türkiye',
        destination: 'Avrupa / Transit Merkezi',
        status: 'Yükleme Tamamlandı - Sefer Hazırlığında',
        type: 'Uluslararası Karayolu Taşımacılığı',
        progress: 35,
        eta: '3 Gün İçerisinde',
        plate: '34 MFD ' + Math.floor(100 + Math.random() * 900),
        temp: 'Normal'
      });
    }
  };

  const handleSampleClick = (code) => {
    setTrackInput(code);
    setSearchError('');
    setTrackResult(SAMPLE_TRACKS[code]);
  };

  return (
    <section className="quick-tracker-section">
      <div className="container">
        <div className="tracker-card glass-panel">
          <div className="tracker-header-row">
            <div className="tracker-title-wrap">
              <span className="badge badge-gold">
                <Truck size={14} />
                <span>CANLI SEVKİYAT TAKİBİ</span>
              </span>
              <h3>Uluslararası Yük & Konum Sorgulama</h3>
            </div>
            <div className="tracker-header-info">
              <span>GPS Telematik & Uydu Takibi</span>
            </div>
          </div>

          <div className="tracker-body">
            <form onSubmit={handleTrackSubmit} className="track-form">
              <div className="track-input-group">
                <Search className="input-search-icon" size={20} />
                <input 
                  type="text" 
                  placeholder="Gönderi / Takip Kodunuzu Girin (Örn: MFD-TR7820)" 
                  value={trackInput}
                  onChange={(e) => setTrackInput(e.target.value)}
                  className="track-input"
                />
                <button type="submit" className="btn btn-gold track-submit-btn">
                  <span>Yükü Sorgula</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              <div className="sample-chips">
                <span className="sample-label">Örnek Canlı Yükler:</span>
                {Object.keys(SAMPLE_TRACKS).map((code) => (
                  <button 
                    key={code} 
                    type="button" 
                    onClick={() => handleSampleClick(code)}
                    className="sample-btn"
                  >
                    {code}
                  </button>
                ))}
              </div>
            </form>

            {searchError && <p className="track-error"><AlertCircle size={16} /> {searchError}</p>}

            {trackResult && (
              <div className="track-result-box">
                <div className="result-header">
                  <div className="result-code-tag">
                    <Truck size={18} className="gold-text-icon" />
                    <strong>Takip No: {trackResult.code}</strong>
                    <span className="live-pulse-badge">Canlı Telematik</span>
                  </div>
                  <div className="result-plate">
                    Araç Plaka: <strong>{trackResult.plate}</strong>
                  </div>
                </div>

                <div className="result-route-display">
                  <div className="route-node">
                    <span className="node-dot origin"></span>
                    <div>
                      <span className="node-title">Çıkış Noktası</span>
                      <h4 className="node-loc">{trackResult.origin}</h4>
                    </div>
                  </div>

                  <div className="route-bar-wrap">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${trackResult.progress}%` }}></div>
                    </div>
                    <span className="progress-status-text">{trackResult.status}</span>
                  </div>

                  <div className="route-node">
                    <span className="node-dot dest"></span>
                    <div>
                      <span className="node-title">Varış Noktası</span>
                      <h4 className="node-loc">{trackResult.destination}</h4>
                    </div>
                  </div>
                </div>

                <div className="result-details-grid">
                  <div className="detail-item">
                    <span className="detail-label">Taşıma Tipi</span>
                    <span className="detail-val">{trackResult.type}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Tahmini Varış (ETA)</span>
                    <span className="detail-val text-gold">{trackResult.eta}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Sıcaklık / Durum</span>
                    <span className="detail-val">{trackResult.temp}</span>
                  </div>
                  <div className="detail-item">
                    <a 
                      href={COMPANY_INFO.whatsappUrl(`Merhaba, ${trackResult.code} numaralı yüküm hakkında detaylı bilgi ve canlı konum rica ediyorum.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wa-track-btn"
                    >
                      <MessageCircle size={15} />
                      <span>WhatsApp'tan Canlı Konum İste</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
