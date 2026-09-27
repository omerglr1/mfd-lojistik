export const COMPANY_INFO = {
  name: "MFD LOJİSTİK",
  fullName: "MFD Uluslararası Lojistik & Taşımacılık Hizmetleri",
  owner: "Mehmet Faruk Dere",
  ownerTitle: "Firma Sahibi & Kurucu",
  phone: "0552 288 5331",
  phoneFormatted: "+90 552 288 53 31",
  phoneRaw: "905522885331",
  email: "mfdlojistik@gmail.com",
  workingHours: "7/24 Kesintisiz Operasyon ve Sevkiyat Desteği",
  address: "Uluslararası Taşımacılık & Lojistik Koordinasyon Merkezi",
  logo: "/images/logo.jpg",
  whatsappUrl: (message = "Merhaba, MFD Lojistik uluslararası taşımacılık hizmetleriniz hakkında bilgi almak istiyorum.") => {
    return `https://wa.me/905522885331?text=${encodeURIComponent(message)}`;
  }
};

export const STATS = [
  { value: "3", label: "Aktif Kıta & Bölge", sub: "Avrupa, Ortadoğu, Orta Asya" },
  { value: "%99.8", label: "Zamanında Teslimat", sub: "Yüksek operasyonel başarı" },
  { value: "7/24", label: "Uydu & Telematik Takip", sub: "Canlı konum & ısı kontrolü" },
  { value: "CMR", label: "Tam Kapsamlı Sigorta", sub: "Her yük için güvence" },
];

export const SERVICES = [
  {
    id: "ftl",
    title: "Uluslararası Komple Taşımacılık (FTL)",
    shortDesc: "Avrupa, Ortadoğu ve Orta Asya ülkelerine doğrudan, aktarmasız kapıdan kapıya komple tır taşımacılığı.",
    icon: "Truck",
    features: ["Kapıdan kapıya doğrudan teslimat", "Hızlı gümrükleme & transit koridorlar", "Euro 6 modern çekici filosu", "7/24 canlı GPS konumu"]
  },
  {
    id: "ltl",
    title: "Parsiyel & Grupaj Taşımacılık (LTL)",
    shortDesc: "Küçük ve orta ölçekli yükleriniz için düzenli haftalık çıkışlarla ekonomik ve güvenilir parsiyel çözümler.",
    icon: "Boxes",
    features: ["Haftalık düzenli çıkış günleri", "Maliyet avantajı ve esneklik", "Barkodlu güvenli yük takibi", "Konsolidasyon ve depolama"]
  },
  {
    id: "frigo",
    title: "Frigo & Soğuk Zincir Taşımacılığı",
    shortDesc: "-25°C ile +25°C aralığında hassas sıcaklık kontrollü gıda, kimyasal ve farmasötik ürün sevkiyatı.",
    icon: "ThermometerSnowflake",
    features: ["Çift rejimli ısı kontrollü soğutucular", "Anlık uzaktan sıcaklık izleme", "ATP ve hijyen sertifikalı dorseler", "Zaman kritik teslimat garantisi"]
  },
  {
    id: "proje",
    title: "Proje & Gabari Dışı Ağır Nakliyat",
    shortDesc: "Standart ölçüleri aşan sanayi makineleri, inşaat ekipmanları ve enerji santrali bileşenlerinin uzman taşınması.",
    icon: "Layers",
    features: ["Özel yol izinleri ve eskort araçları", "Lowbed ve hidrolik özel platformlar", "Mühendislik ve güzergah fizibilitesi", "Gümrük ve saha vinç koordinasyonu"]
  },
  {
    id: "intermodal",
    title: "Intermodal & Multimodal Taşımacılık",
    shortDesc: "Karayolu, Ro-Ro ve demiryolu modlarının optimize entegrasyonu ile çevreci ve düşük maliyetli rotalar.",
    icon: "Compass",
    features: ["Ro-Ro gemi hatları ile Avrupa geçişi", "Düşük karbon ayak izi & yeşil lojistik", "Sınır kapısı beklemesiz sevkiyat", "Kombine taşıma belgeleri"]
  },
  {
    id: "depo",
    title: "Depolama, Antrepo & Gümrükleme",
    shortDesc: "Yüklerinizin aktarma, paketleme, gümrüklü antrepo ve serbest depolama ihtiyaçlarına profesyonel çözümler.",
    icon: "Warehouse",
    features: ["Gümrüklü & serbest modern antrepolar", "Yükleme, boşaltma ve paletleme", "İhracat/İthalat gümrük müşavirliği", "Sipariş hazırlama ve dağıtım"]
  }
];

export const REGIONS = [
  {
    id: "avrupa",
    name: "Avrupa Hattı",
    subtitle: "Batı, Orta & Doğu Avrupa Ülkeleri",
    image: "/images/truck_europe.jpg",
    description: "Almanya, Hollanda, İtalya, Avusturya ve Balkanlar başta olmak üzere tüm Avrupa ülkelerine düzenli komple ve parsiyel seferler düzenliyoruz.",
    transitTime: "4 - 7 Gün",
    departures: "Haftada 4 Gün Düzenli Sefer",
    countries: [
      { name: "Almanya", hubs: "Frankfurt, Münih, Köln, Berlin" },
      { name: "Hollanda & Belçika", hubs: "Rotterdam, Amsterdam, Anvers" },
      { name: "İtalya", hubs: "Milano, Verona, Trieste, Bologna" },
      { name: "Avusturya & İsviçre", hubs: "Viyana, Linz, Zürih" },
      { name: "Polonya & Çekya", hubs: "Varşova, Katowice, Prag" },
      { name: "Fransa & İspanya", hubs: "Lyon, Paris, Barselona" },
      { name: "Balkan Ülkeleri", hubs: "Bulgaristan, Romanya, Sırbistan, Macaristan" }
    ],
    features: ["Ro-Ro ve karayolu ekspres koridoru", "Kapıkule ve Hamzabeyli hızlı geçiş", "T1 / T2 gümrük transit belgeleri", "Tüm Avrupa'da yerel teslimat ağı"]
  },
  {
    id: "ortadogu",
    name: "Ortadoğu Hattı",
    subtitle: "Körfez & Arap Yarımadası Güzergahı",
    image: "/images/truck_silkroad.jpg",
    description: "Irak, Suudi Arabistan, BAE, Kuveyt ve Katar'a güvenli sınır geçişleri, tecrübeli sürücüler ve iklim şartlarına dayanıklı modern araçlarımızla hizmet veriyoruz.",
    transitTime: "5 - 9 Gün",
    departures: "Haftalık Düzenli Seferler",
    countries: [
      { name: "Irak", hubs: "Erbil, Zaho, Süleymaniye, Bağdat, Basra" },
      { name: "Birleşik Arap Emirlikleri (BAE)", hubs: "Dubai, Abu Dabi, Şarika" },
      { name: "Suudi Arabistan", hubs: "Riyad, Cidde, Dammam" },
      { name: "Katar & Kuveyt", hubs: "Doha, Kuveyt City" },
      { name: "Ürdün & Umman", hubs: "Amman, Maskat" }
    ],
    features: ["Habur sınır kapısı uzmanlığı", "Çöl şartlarına tam uyumlu araçlar", "Arap Yarımadası transit vizeleri", "Kapı teslim ve gümrük boşaltma desteği"]
  },
  {
    id: "ortaasya",
    name: "Orta Asya & Türki Cumhuriyetler",
    subtitle: "Hazar Geçişli & Trans-Kafkas İpekyolu Koridoru",
    image: "/images/truck_hero.jpg",
    description: "Azerbaycan, Kazakistan, Özbekistan ve Türkmenistan'a Trans-Kafkasya ve Hazar denizi güzergahları üzerinden güvenilir karayolu lojistiği sunuyoruz.",
    transitTime: "7 - 13 Gün",
    departures: "Haftalık Planlı Seferler",
    countries: [
      { name: "Azerbaycan", hubs: "Bakü, Gence, Sumgayıt" },
      { name: "Kazakistan", hubs: "Almatı, Astana, Şımkent, Aktau" },
      { name: "Özbekistan", hubs: "Taşkent, Semerkant, Buhara" },
      { name: "Türkmenistan & Kırgızistan", hubs: "Aşkabat, Türkmenbaşı, Bişkek" },
      { name: "Gürcistan (Transit Koridoru)", hubs: "Tiflis, Batum, Poti" }
    ],
    features: ["Orta Koridor (Trans-Caspian) uzmanlığı", "Bakü-Tiflis karayolu bağlantısı", "BDT ülkeleri gümrük mevzuatına tam hakimiyet", "Ağır kış şartlarına dayanıklı donanım"]
  }
];

export const FLEET = [
  {
    id: 1,
    title: "Mercedes-Benz Actros Euro 6 Uluslararası Çekici",
    category: "Standart & Mega Tenteli",
    image: "/images/truck_hero.jpg",
    badge: "Euro 6 Çevre Dostu",
    specs: [
      { label: "Kapasite", value: "24.000 kg / 92 - 100 m³" },
      { label: "Motor Standardı", value: "Euro 6 Düşük Emisyon" },
      { label: "Güvenlik", value: "7/24 Telematik GPS & Çift Sürücü" },
      { label: "Kullanım", value: "Avrupa & Balkanlar Komple Seferler" }
    ]
  },
  {
    id: 2,
    title: "MFD Lojistik Terminal & Dağıtım Filosu",
    category: "Lojistik Merkezi & Antrepo Dağıtım",
    image: "/images/truck_hub.jpg",
    badge: "Lojistik Üs Operasyonu",
    specs: [
      { label: "Operasyon Alanı", value: "Konsolidasyon & Cross-Docking" },
      { label: "Yükleme Kapasitesi", value: "Eşzamanlı 20+ Rampa" },
      { label: "Donanım", value: "Hidrolik Lift & Otomatik Yükleme" },
      { label: "Hizmet", value: "Hızlı Aktarma & Uluslararası Sevk" }
    ]
  },
  {
    id: 3,
    title: "Avrupa Ekspres Frigo & Kayar Perdeli Dorse",
    category: "Hassas Isı & Frigo Soğutucu",
    image: "/images/truck_europe.jpg",
    badge: "Isı Kontrollü (-25°C / +25°C)",
    specs: [
      { label: "Sıcaklık Aralığı", value: "-25°C ile +25°C Canlı Telemetri" },
      { label: "Sertifikasyon", value: "ATP, FRC & Hijyen Sertifikası" },
      { label: "Kullanım", value: "Gıda, İlaç, Medikal & Kimyevi" },
      { label: "Güzergah", value: "Almanya, İtalya, Avusturya & İsviçre" }
    ]
  },
  {
    id: 4,
    title: "Avrasya & İpekyolu Ağır Hizmet Konteyner Taşıyıcı",
    category: "Ağır Hizmet & Konteyner / Lowbed",
    image: "/images/truck_silkroad.jpg",
    badge: "Körfez & Orta Asya Dayanımı",
    specs: [
      { label: "Kapasite", value: "Ağır Tonaj / 20'-40'-45' Konteyner" },
      { label: "Dayanım", value: "Çöl & Zorlu Coğrafya Donanımı" },
      { label: "Güzergah", value: "Irak, BAE, Suudi Arabistan, Kazakistan" },
      { label: "Sigorta", value: "Tam Kapsamlı CMR & Ek Teminatlar" }
    ]
  }
];

export const WHY_US = [
  {
    icon: "Clock",
    title: "Zamanında & Güvenli Teslimat",
    desc: "Yüklerinizin teslimat planına sadık kalınarak zamanında varış noktasına ulaştırılması birinci önceliğimizdir."
  },
  {
    icon: "ShieldCheck",
    title: "Uluslararası CMR Sigortası",
    desc: "Taşınan her yük, uluslararası CMR konvansiyonu ve ek nakliyat emtia sigortası kapsamında tam teminat altındadır."
  },
  {
    icon: "Radio",
    title: "Canlı GPS & Telematik Takip",
    desc: "Müşterilerimiz 7/24 araç konumu, tahmini varış süresi ve frigo yüklerde sıcaklık verilerini anlık izleyebilir."
  },
  {
    icon: "Globe",
    title: "3 Kıtada Geniş Acente Ağı",
    desc: "Avrupa, Ortadoğu ve Orta Asya sınır kapılarında ve transit noktalarında yerel acentelerimizle kesintisiz gümrükleme."
  },
  {
    icon: "MessageCircle",
    title: "7/24 Kesintisiz WhatsApp Desteği",
    desc: "Sorularınız, fiyat teklifleriniz ve operasyonel bilgilendirmeleriniz için 0552 288 5331 WhatsApp hattımız daima aktif."
  },
  {
    icon: "TrendingUp",
    title: "Rekabetçi Navlun Fiyatları",
    desc: "Doğrudan hat operasyonumuz ve geniş filomuz sayesinde optimum maliyet ve şeffaf fiyatlandırma politikası."
  }
];

export const FAQS = [
  {
    q: "Hangi ülkelere taşımacılık hizmeti veriyorsunuz?",
    a: "MFD Lojistik olarak; Almanya, Hollanda, İtalya, Avusturya, Polonya, Fransa gibi Avrupa ülkelerine; Irak, BAE, Suudi Arabistan, Katar, Kuveyt gibi Ortadoğu ülkelerine; ve Azerbaycan, Kazakistan, Özbekistan, Türkmenistan gibi Orta Asya ülkelerine düzenli seferler gerçekleştiriyoruz."
  },
  {
    q: "Fiyat teklifi nasıl alabilirim ve ne kadar sürede geri dönüş yapılır?",
    a: "Sitemizdeki 'Canlı Navlun Teklifi Al' formunu doldurarak veya 0552 288 5331 numaralı WhatsApp destek hattımıza doğrudan mesaj atarak 15-30 dakika içinde detaylı navlun teklifinizi alabilirsiniz."
  },
  {
    q: "Yükümün nerede olduğunu nasıl takip edebilirim?",
    a: "Tüm çekici ve dorselerimiz gelişmiş uydu takip sistemi (telematik GPS) ile donatılmıştır. Operasyon ekibimiz size günlük durum raporu sunar veya müşteri temsilcinizden dilediğiniz an canlı konum bilgisi alabilirsiniz."
  },
  {
    q: "Frigo (soğuk zincir) taşımalarınızda sıcaklık takibi nasıl yapılıyor?",
    a: "Dorselerimiz -25°C ile +25°C arasında ısı ayarına sahiptir. Sıcaklık verileri dijital sensörlerle yolculuk boyunca kaydedilir ve teslimatta detaylı sıcaklık dökümü (termograf çıktısı) müşteriye teslim edilir."
  },
  {
    q: "Yüklerimiz sigortalı mıdır?",
    a: "Evet, MFD Lojistik güvencesindeki tüm taşımalar uluslararası CMR sigortası kapsamındadır. İsteğe bağlı olarak yüksek değerli emtialar için ek 'All-Risks' nakliyat emtia sigortası da düzenlenmektedir."
  },
  {
    q: "Parsiyel (LTL) yükler için haftanın hangi günleri çıkış yapılıyor?",
    a: "Avrupa yönüne her hafta Salı ve Cuma günleri, Ortadoğu ve Orta Asya yönüne ise Çarşamba ve Cumartesi günleri düzenli parsiyel çıkışlarımız bulunmaktadır."
  }
];
