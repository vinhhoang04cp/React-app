import React from "react";
import './styles/Subpage/Ebank.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

/**
 * Refactor: replace repeated HTML blocks with array-driven .map() loops
 * Goal: keep identical markup, classes, aria, and behavior
 */

// Top grid (5 cards)
const BANK_CARDS = [
  {
    href: '#',
    aria: 'ACB ONE - Dành cho Khách hàng Cá nhân',
    imgSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
    imgAlt: 'Khách hàng cá nhân',
    title: (
      <h3>ACB ONE</h3>
    ),
    subtitle: 'Dành cho Khách hàng Cá nhân',
  },
  {
    href: '#',
    aria: 'ACB ONE BIZ - Dành cho Doanh nghiệp vừa và nhỏ',
    imgSrc: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    imgAlt: 'Doanh nghiệp vừa và nhỏ',
    title: (
      <h3>
        ACB ONE <span className="brand-suffix">BIZ</span>
      </h3>
    ),
    subtitle: 'Dành cho Doanh nghiệp vừa và nhỏ',
  },
  {
    href: '#',
    aria: 'ACB ONE PRO - Dành cho Doanh nghiệp lớn',
    imgSrc: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200&auto=format&fit=crop',
    imgAlt: 'Doanh nghiệp lớn',
    title: (
      <h3>
        ACB ONE <span className="brand-suffix">PRO</span>
      </h3>
    ),
    subtitle: 'Dành cho Doanh nghiệp lớn',
  },
  {
    href: '#',
    aria: 'ACB ONE CONNECT - Kết nối tích hợp hệ thống',
    imgSrc: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?q=80&w=1200&auto=format&fit=crop',
    imgAlt: 'Kết nối tích hợp hệ thống API',
    title: (
      <h3>
        ACB ONE <span className="brand-suffix">CONNECT</span>
      </h3>
    ),
    subtitle: 'Kết nối tích hợp hệ thống',
  },
  {
    href: '#',
    aria: 'ACB lite - Ngân hàng tự động',
    imgSrc: 'https://images.unsplash.com/photo-1610900111918-8e2cf236503d?q=80&w=1200&auto=format&fit=crop',
    imgAlt: 'Ngân hàng tự động',
    title: (
      <h3>
        ACB <span className="brand-lite">lite</span>
      </h3>
    ),
    subtitle: 'Ngân hàng tự động',
  },
];

// Carousel slides (4)
const CAROUSEL_SLIDES = [
  {
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="6" y="18" width="40" height="28" rx="6" fill="#dff2ff" />
        <rect x="26" y="26" width="40" height="28" rx="6" fill="#7fda84" />
        <circle cx="20" cy="32" r="4" fill="#0a5bd3" />
        <rect x="10" y="40" width="24" height="4" rx="2" fill="#0a5bd3" />
      </svg>
    ),
    title: 'Mở bộ ba Tài khoản - Thẻ debit - Ứng dụng ACB ONE',
    desc: 'Nhận ưu đãi cả năm',
  },
  {
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M16 48l12-12 12 12" fill="none" stroke="#37c0ff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="46" cy="24" r="6" fill="#17a8ff" />
        <rect x="22" y="34" width="8" height="8" rx="2" fill="#7fdaff" />
      </svg>
    ),
    title: 'Cộng thêm lãi suất so với tại quầy',
    desc: 'Khi gửi tiết kiệm online trên ACB ONE',
  },
  {
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="10" y="18" width="52" height="36" rx="10" fill="#ffd97a" />
        <path d="M20 30h32" stroke="#9a6b00" strokeWidth="4" strokeLinecap="round" />
        <path d="M18 38h36" stroke="#9a6b00" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Săn quà mỗi ngày trên ACB Rewards',
    desc: 'Ngập tràn ưu đãi từ các thương hiệu yêu thích',
  },
  {
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="36" cy="36" r="16" fill="#c0e6ff" />
        <path d="M36 24v12l8 8" stroke="#0a5bd3" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Giao dịch nhanh – an toàn',
    desc: 'Bảo mật đa lớp trên ACB ONE',
  },
];

// Offers (2)
const OFFERS = [
  {
    img: './img/anh2k.jpg',
    imgAlt: 'Săn quà mỗi ngày trên ACB Rewards',
    title: 'Săn quà mỗi ngày trên ACB Rewards',
    desc: 'Quà tặng là deal HOT đa dạng lĩnh vực đến từ các thương hiệu yêu thích.',
    timeLabel: 'Không giới hạn',
    progress: { value: 100, width: '100%', unlimited: true },
    linkAria: 'Đọc thêm về Săn quà mỗi ngày trên ACB Rewards',
    showLeft: false,
  },
  {
    img: './img/anh2k.jpg',
    imgAlt: 'Mở tài khoản chứng khoán trên ACB ONE',
    title: 'Mở tài khoản chứng khoán trên ACB ONE',
    desc: 'Đầu tư an toàn, giao dịch chủ động cùng nhiều quyền lợi ưu đãi và chăm sóc.',
    timeLabel: '01/01/2025 – 31/12/2025',
    progress: { value: 0, width: '0%', start: '2025-01-01', end: '2025-12-31' },
    linkAria: 'Đọc thêm về Mở tài khoản chứng khoán trên ACB ONE',
    showLeft: true,
  },
];

// Integrations (4)
const INTEGRATIONS = [
  {
    icon: (
      <svg viewBox="0 0 160 110">
        <rect x="8" y="8" width="144" height="94" rx="16" fill="#e8f2ff" />
        <circle cx="80" cy="56" r="24" fill="#4992ff" />
        <rect x="54" y="84" width="52" height="10" rx="5" fill="#4992ff" />
        <path d="M22 28h16v-8M138 28h-16v-8M22 82h16v8M138 82h-16v8" fill="none" stroke="#9fc7ff" strokeWidth="6" strokeLinecap="round" />
      </svg>
    ),
    title: 'Mở tài khoản trực tuyến (eKYC)',
    desc: 'Mở tài khoản trực tuyến ACB trên website/ứng dụng đối tác. Hoàn tất định danh và dùng ngay ACB ONE.',
    aria: 'Xem chi tiết eKYC',
  },
  {
    icon: (
      <svg viewBox="0 0 160 110">
        <rect x="10" y="20" width="60" height="50" rx="8" fill="#dff2ff" />
        <rect x="80" y="20" width="70" height="50" rx="8" fill="#bde7ff" />
        <path d="M40 20v-8l40-8 40 8v8" fill="#6fc3ff" />
        <rect x="26" y="36" width="28" height="4" rx="2" fill="#1e6bd6" />
        <rect x="92" y="30" width="42" height="6" rx="3" fill="#1e6bd6" />
        <rect x="92" y="42" width="28" height="6" rx="3" fill="#69b6ff" />
        <rect x="92" y="54" width="18" height="6" rx="3" fill="#69b6ff" />
      </svg>
    ),
    title: 'Thu hộ',
    desc: 'Thanh toán/nhận tiền nhanh qua các kênh giao dịch của ngân hàng. Theo dõi dòng tiền, xuất hóa đơn thuận tiện.',
    aria: 'Xem chi tiết Thu hộ',
  },
  {
    icon: (
      <svg viewBox="0 0 160 110">
        <rect x="12" y="18" width="136" height="74" rx="14" fill="#e6fbef" />
        <rect x="32" y="26" width="60" height="58" rx="10" fill="#29c380" />
        <rect x="100" y="36" width="26" height="8" rx="4" fill="#bdf5d7" />
        <rect x="100" y="50" width="36" height="8" rx="4" fill="#7ae3b0" />
        <rect x="100" y="64" width="22" height="8" rx="4" fill="#7ae3b0" />
        <path d="M46 54l10 10 18-24" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Chi hộ',
    desc: 'Giải pháp chi trả cho doanh nghiệp theo quy trình tự động, giảm rủi ro tiền mặt và tiết kiệm thời gian đối tác.',
    aria: 'Xem chi tiết Chi hộ',
  },
  {
    icon: (
      <svg viewBox="0 0 160 110">
        <rect x="10" y="18" width="140" height="74" rx="14" fill="#eaf2ff" />
        <rect x="90" y="26" width="40" height="58" rx="8" fill="#2767ff" />
        <circle cx="106" cy="74" r="6" fill="#fff" />
        <rect x="28" y="36" width="40" height="32" rx="6" fill="#9ec4ff" />
        <circle cx="44" cy="52" r="8" fill="#2767ff" />
        <rect x="70" y="40" width="10" height="6" rx="3" fill="#c7dbff" />
        <rect x="70" y="52" width="10" height="6" rx="3" fill="#c7dbff" />
      </svg>
    ),
    title: 'Ví điện tử',
    desc: 'Liên kết tài khoản ACB với ví điện tử để nạp/rút nhanh chóng, an toàn; tận hưởng nhiều ưu đãi thanh toán.',
    aria: 'Xem chi tiết Ví điện tử',
  },
];

// Partner logos (3)
const PARTNERS = [
  { src: './img/partners/momo.svg', alt: 'MoMo' },
  { src: './img/partners/zalopay.svg', alt: 'ZaloPay' },
  { src: './img/partners/napas.svg', alt: 'napas' },
];

function OfferCard({ offer }) {
  const progressAttrs = {
    role: 'progressbar',
    'aria-valuemin': 0,
    'aria-valuemax': 100,
    'aria-valuenow': offer.progress.value,
    ...(offer.progress.unlimited ? { 'data-unlimited': 'true' } : {}),
    ...(offer.progress.start ? { 'data-start': offer.progress.start } : {}),
    ...(offer.progress.end ? { 'data-end': offer.progress.end } : {}),
    className: 'offer-progress',
  };

  return (
    <article className="offer-card">
      <figure className="offer-media">
        <img src={offer.img} alt={offer.imgAlt} loading="lazy" />
      </figure>

      <div className="offer-body">
        <h3 className="offer-title">{offer.title}</h3>
        <p className="offer-desc">{offer.desc}</p>

        <div className="offer-meta">
          <div className="offer-time">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 8v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span>{offer.timeLabel}</span>
          </div>

          <div {...progressAttrs}>
            <span className="offer-progress__bar" style={{ width: offer.progress.width }}></span>
          </div>

          {offer.showLeft && <div className="offer-left" aria-live="polite"></div>}
        </div>

        <a className="offer-link" href="#" aria-label={offer.linkAria}>
          Đọc thêm
        </a>
      </div>
    </article>
  );
}

function Ebank() {
  return (
    <>
      <Header />
      <main>
        <section className="section" aria-labelledby="section-title">
          <div className="container">
            <nav className="breadcrumb" aria-label="breadcrumb">
              Trang chủ / <strong>Dịch vụ Ngân hàng số</strong>
            </nav>
            <h2 id="section-title" className="section-title visually-hidden">
              Dịch vụ Ngân hàng số
            </h2>

            <div className="grid">
              {BANK_CARDS.map((c, idx) => (
                <a className="card" href={c.href} aria-label={c.aria} key={idx}>
                  <figure>
                    <img src={c.imgSrc} alt={c.imgAlt} loading="lazy" />
                  </figure>
                  <div className="content">
                    {c.title}
                    <p>{c.subtitle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* HERO ACB ONE */}
        <section className="hero" aria-labelledby="hero-one-title">
          <div className="container">
            <div className="grid">
              <div className="hero-copy">
                <h1 id="hero-one-title">Dành cho Khách hàng Cá nhân</h1>
                <p className="lead">
                  ACB ONE là dịch vụ ngân hàng điện tử của ACB, giúp khách hàng giao dịch
                  tiện lợi, dễ dàng, bảo mật.
                </p>
                <div className="dl-wrap">
                  <div className="qr">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=132x132&data=ACB%20ONE"
                      alt="QR tải ứng dụng ACB ONE"
                    />
                  </div>
                  <div className="stores">
                    <a className="store-badge" href="#" aria-label="Tải trên Google Play">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                        alt="Google Play"
                      />
                    </a>
                    <a className="store-badge" href="#" aria-label="Tải trên App Store">
                      <img
                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                        alt="App Store"
                      />
                    </a>
                  </div>
                </div>
                <a className="cta" href="#">
                  Khám phá ngay <span aria-hidden="true">›</span>
                </a>
              </div>

              <div className="phone">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <img
                      src="https://images.unsplash.com/photo-1598023696416-0193a0bcd302?q=80&w=1200&auto=format&fit=crop"
                      alt="Màn hình ứng dụng ACB ONE"
                    />
                  </div>
                  <div className="phone-notch"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAROUSEL */}
        <section className="carousel" aria-labelledby="carousel-title">
          <div className="container">
            <h2 id="carousel-title">Ưu đãi & Tính năng</h2>
            <div className="carousel-viewport">
              <div className="carousel-track" id="carouselTrack">
                {CAROUSEL_SLIDES.map((s, idx) => (
                  <article className="carousel-card" key={idx}>
                    <div className="carousel-icon" aria-hidden="true">
                      {s.icon}
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="carousel-dots" role="tablist" aria-label="Carousel Pagination">
              {CAROUSEL_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  className="carousel-dot"
                  data-index={idx}
                  role="tab"
                  aria-label={`Trang ${idx + 1}`}
                  {...(idx === 0 ? { 'aria-current': 'true' } : {})}
                ></button>
              ))}
            </div>
          </div>
        </section>

        {/* ƯU ĐÃI */}
        <section className="offers section offers--compact" aria-labelledby="offers-title">
          <div className="container">
            <h2 id="offers-title" className="section-title">Ưu đãi</h2>

            <div className="offers-grid">
              {OFFERS.map((offer, idx) => (
                <OfferCard offer={offer} key={idx} />
              ))}
            </div>

            <div className="offers-actions">
              <a className="cta" href="#" aria-label="Xem thêm ưu đãi">
                Xem thêm <span aria-hidden="true">›</span>
              </a>
            </div>
          </div>
        </section>

        {/* KẾT NỐI TÍCH HỢP HỆ THỐNG */}
        <section className="integrations section" aria-labelledby="integrations-title">
          <div className="container">
            <h2 id="integrations-title" className="section-title">Kết nối tích hợp hệ thống</h2>

            <div className="integr-grid">
              {INTEGRATIONS.map((it, idx) => (
                <article className="integr-card" key={idx}>
                  <div className="integr-thumb" aria-hidden="true">{it.icon}</div>
                  <h3 className="integr-title">{it.title}</h3>
                  <p className="integr-desc">{it.desc}</p>
                  <a href="#" className="integr-link" aria-label={it.aria}>
                    Xem chi tiết <span aria-hidden="true">›</span>
                  </a>
                </article>
              ))}
            </div>

            {/* PARTNERS */}
            <h3 className="partners-title">Đối tác tiêu biểu</h3>
            <ul className="partner-logos" aria-label="Đối tác tiêu biểu">
              {PARTNERS.map((p, idx) => (
                <li className="partner-item" key={idx}>
                  <img src={p.src} alt={p.alt} loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* KẾT THÚC KẾT NỐI TÍCH HỢP HỆ THỐNG */}
      </main>
      <Footer />
    </>
  );
}

export default Ebank;
