import React from "react";
import './styles/Subpage/Ebank.css';


function Ebank() {
  return (
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
            <a className="card" href="#" aria-label="ACB ONE - Dành cho Khách hàng Cá nhân">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
                  alt="Khách hàng cá nhân"
                  loading="lazy"
                />
              </figure>
              <div className="content">
                <h3>ACB ONE</h3>
                <p>Dành cho Khách hàng Cá nhân</p>
              </div>
            </a>

            <a className="card" href="#" aria-label="ACB ONE BIZ - Dành cho Doanh nghiệp vừa và nhỏ">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
                  alt="Doanh nghiệp vừa và nhỏ"
                  loading="lazy"
                />
              </figure>
              <div className="content">
                <h3>
                  ACB ONE <span className="brand-suffix">BIZ</span>
                </h3>
                <p>Dành cho Doanh nghiệp vừa và nhỏ</p>
              </div>
            </a>

            <a className="card" href="#" aria-label="ACB ONE PRO - Dành cho Doanh nghiệp lớn">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200&auto=format&fit=crop"
                  alt="Doanh nghiệp lớn"
                  loading="lazy"
                />
              </figure>
              <div className="content">
                <h3>
                  ACB ONE <span className="brand-suffix">PRO</span>
                </h3>
                <p>Dành cho Doanh nghiệp lớn</p>
              </div>
            </a>

            <a className="card" href="#" aria-label="ACB ONE CONNECT - Kết nối tích hợp hệ thống">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1633419461186-7d40a38105ec?q=80&w=1200&auto=format&fit=crop"
                  alt="Kết nối tích hợp hệ thống API"
                  loading="lazy"
                />
              </figure>
              <div className="content">
                <h3>
                  ACB ONE <span className="brand-suffix">CONNECT</span>
                </h3>
                <p>Kết nối tích hợp hệ thống</p>
              </div>
            </a>

            <a className="card" href="#" aria-label="ACB lite - Ngân hàng tự động">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1610900111918-8e2cf236503d?q=80&w=1200&auto=format&fit=crop"
                  alt="Ngân hàng tự động"
                  loading="lazy"
                />
              </figure>
              <div className="content">
                <h3>
                  ACB <span className="brand-lite">lite</span>
                </h3>
                <p>Ngân hàng tự động</p>
              </div>
            </a>
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
              {/* Slide 1 */}
              <article className="carousel-card">
                <div className="carousel-icon" aria-hidden="true">
                  <svg width="72" height="72" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="6" y="18" width="40" height="28" rx="6" fill="#dff2ff" />
                    <rect x="26" y="26" width="40" height="28" rx="6" fill="#7fda84" />
                    <circle cx="20" cy="32" r="4" fill="#0a5bd3" />
                    <rect x="10" y="40" width="24" height="4" rx="2" fill="#0a5bd3" />
                  </svg>
                </div>
                <h3>Mở bộ ba Tài khoản - Thẻ debit - Ứng dụng ACB ONE</h3>
                <p>Nhận ưu đãi cả năm</p>
              </article>

              {/* Slide 2 */}
              <article className="carousel-card">
                <div className="carousel-icon" aria-hidden="true">
                  <svg width="72" height="72" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M16 48l12-12 12 12" fill="none" stroke="#37c0ff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="46" cy="24" r="6" fill="#17a8ff" />
                    <rect x="22" y="34" width="8" height="8" rx="2" fill="#7fdaff" />
                  </svg>
                </div>
                <h3>Cộng thêm lãi suất so với tại quầy</h3>
                <p>Khi gửi tiết kiệm online trên ACB ONE</p>
              </article>

              {/* Slide 3 */}
              <article className="carousel-card">
                <div className="carousel-icon" aria-hidden="true">
                  <svg width="72" height="72" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="10" y="18" width="52" height="36" rx="10" fill="#ffd97a" />
                    <path d="M20 30h32" stroke="#9a6b00" strokeWidth="4" strokeLinecap="round" />
                    <path d="M18 38h36" stroke="#9a6b00" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Săn quà mỗi ngày trên ACB Rewards</h3>
                <p>Ngập tràn ưu đãi từ các thương hiệu yêu thích</p>
              </article>

              {/* Slide 4 */}
              <article className="carousel-card">
                <div className="carousel-icon" aria-hidden="true">
                  <svg width="72" height="72" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="36" cy="36" r="16" fill="#c0e6ff" />
                    <path d="M36 24v12l8 8" stroke="#0a5bd3" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Giao dịch nhanh – an toàn</h3>
                <p>Bảo mật đa lớp trên ACB ONE</p>
              </article>
            </div>
          </div>
          <div className="carousel-dots" role="tablist" aria-label="Carousel Pagination">
            <button className="carousel-dot" data-index="0" role="tab" aria-label="Trang 1" aria-current="true"></button>
            <button className="carousel-dot" data-index="1" role="tab" aria-label="Trang 2"></button>
            <button className="carousel-dot" data-index="2" role="tab" aria-label="Trang 3"></button>
            <button className="carousel-dot" data-index="3" role="tab" aria-label="Trang 4"></button>
          </div>
        </div>
      </section>

      {/* ƯU ĐÃI */}
      <section className="offers section offers--compact" aria-labelledby="offers-title">
        <div className="container">
          <h2 id="offers-title" className="section-title">Ưu đãi</h2>

          <div className="offers-grid">
            {/* Card 1 */}
            <article className="offer-card">
              <figure className="offer-media">
                <img src="./img/anh2k.jpg" alt="Săn quà mỗi ngày trên ACB Rewards" loading="lazy" />
              </figure>

              <div className="offer-body">
                <h3 className="offer-title">Săn quà mỗi ngày trên ACB Rewards</h3>
                <p className="offer-desc">
                  Quà tặng là deal HOT đa dạng lĩnh vực đến từ các thương hiệu yêu thích.
                </p>

                <div className="offer-meta">
                  <div className="offer-time">
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 8v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <span>Không giới hạn</span>
                  </div>

                  <div
                    className="offer-progress"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={100}
                    data-unlimited="true"
                  >
                    <span className="offer-progress__bar" style={{ width: "100%" }}></span>
                  </div>
                </div>

                <a className="offer-link" href="#" aria-label="Đọc thêm về Săn quà mỗi ngày trên ACB Rewards">
                  Đọc thêm
                </a>
              </div>
            </article>

            {/* Card 2 */}
            <article className="offer-card">
              <figure className="offer-media">
                <img src="./img/anh2k.jpg" alt="Mở tài khoản chứng khoán trên ACB ONE" loading="lazy" />
              </figure>

              <div className="offer-body">
                <h3 className="offer-title">Mở tài khoản chứng khoán trên ACB ONE</h3>
                <p className="offer-desc">
                  Đầu tư an toàn, giao dịch chủ động cùng nhiều quyền lợi ưu đãi và chăm sóc.
                </p>

                <div className="offer-meta">
                  <div className="offer-time">
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 8v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <span>01/01/2025 – 31/12/2025</span>
                  </div>

                  <div
                    className="offer-progress"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={0}
                    data-start="2025-01-01"
                    data-end="2025-12-31"
                  >
                    <span className="offer-progress__bar" style={{ width: "0%" }}></span>
                  </div>

                  <div className="offer-left" aria-live="polite"></div>
                </div>

                <a className="offer-link" href="#" aria-label="Đọc thêm về Mở tài khoản chứng khoán trên ACB ONE">
                  Đọc thêm
                </a>
              </div>
            </article>
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
            {/* Card 1: eKYC */}
            <article className="integr-card">
              <div className="integr-thumb" aria-hidden="true">
                <svg viewBox="0 0 160 110">
                  <rect x="8" y="8" width="144" height="94" rx="16" fill="#e8f2ff" />
                  <circle cx="80" cy="56" r="24" fill="#4992ff" />
                  <rect x="54" y="84" width="52" height="10" rx="5" fill="#4992ff" />
                  <path
                    d="M22 28h16v-8M138 28h-16v-8M22 82h16v8M138 82h-16v8"
                    fill="none"
                    stroke="#9fc7ff"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="integr-title">Mở tài khoản trực tuyến (eKYC)</h3>
              <p className="integr-desc">
                Mở tài khoản trực tuyến ACB trên website/ứng dụng đối tác. Hoàn tất định danh và dùng ngay ACB ONE.
              </p>
              <a href="#" className="integr-link" aria-label="Xem chi tiết eKYC">
                Xem chi tiết <span aria-hidden="true">›</span>
              </a>
            </article>

            {/* Card 2: Thu hộ */}
            <article className="integr-card">
              <div className="integr-thumb" aria-hidden="true">
                <svg viewBox="0 0 160 110">
                  <rect x="10" y="20" width="60" height="50" rx="8" fill="#dff2ff" />
                  <rect x="80" y="20" width="70" height="50" rx="8" fill="#bde7ff" />
                  <path d="M40 20v-8l40-8 40 8v8" fill="#6fc3ff" />
                  <rect x="26" y="36" width="28" height="4" rx="2" fill="#1e6bd6" />
                  <rect x="92" y="30" width="42" height="6" rx="3" fill="#1e6bd6" />
                  <rect x="92" y="42" width="28" height="6" rx="3" fill="#69b6ff" />
                  <rect x="92" y="54" width="18" height="6" rx="3" fill="#69b6ff" />
                </svg>
              </div>
              <h3 className="integr-title">Thu hộ</h3>
              <p className="integr-desc">
                Thanh toán/nhận tiền nhanh qua các kênh giao dịch của ngân hàng. Theo dõi dòng tiền, xuất hóa đơn thuận tiện.
              </p>
              <a href="#" className="integr-link" aria-label="Xem chi tiết Thu hộ">
                Xem chi tiết <span aria-hidden="true">›</span>
              </a>
            </article>

            {/* Card 3: Chi hộ */}
            <article className="integr-card">
              <div className="integr-thumb" aria-hidden="true">
                <svg viewBox="0 0 160 110">
                  <rect x="12" y="18" width="136" height="74" rx="14" fill="#e6fbef" />
                  <rect x="32" y="26" width="60" height="58" rx="10" fill="#29c380" />
                  <rect x="100" y="36" width="26" height="8" rx="4" fill="#bdf5d7" />
                  <rect x="100" y="50" width="36" height="8" rx="4" fill="#7ae3b0" />
                  <rect x="100" y="64" width="22" height="8" rx="4" fill="#7ae3b0" />
                  <path d="M46 54l10 10 18-24" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="integr-title">Chi hộ</h3>
              <p className="integr-desc">
                Giải pháp chi trả cho doanh nghiệp theo quy trình tự động, giảm rủi ro tiền mặt và tiết kiệm thời gian đối tác.
              </p>
              <a href="#" className="integr-link" aria-label="Xem chi tiết Chi hộ">
                Xem chi tiết <span aria-hidden="true">›</span>
              </a>
            </article>

            {/* Card 4: Ví điện tử */}
            <article className="integr-card">
              <div className="integr-thumb" aria-hidden="true">
                <svg viewBox="0 0 160 110">
                  <rect x="10" y="18" width="140" height="74" rx="14" fill="#eaf2ff" />
                  <rect x="90" y="26" width="40" height="58" rx="8" fill="#2767ff" />
                  <circle cx="106" cy="74" r="6" fill="#fff" />
                  <rect x="28" y="36" width="40" height="32" rx="6" fill="#9ec4ff" />
                  <circle cx="44" cy="52" r="8" fill="#2767ff" />
                  <rect x="70" y="40" width="10" height="6" rx="3" fill="#c7dbff" />
                  <rect x="70" y="52" width="10" height="6" rx="3" fill="#c7dbff" />
                </svg>
              </div>
              <h3 className="integr-title">Ví điện tử</h3>
              <p className="integr-desc">
                Liên kết tài khoản ACB với ví điện tử để nạp/rút nhanh chóng, an toàn; tận hưởng nhiều ưu đãi thanh toán.
              </p>
              <a href="#" className="integr-link" aria-label="Xem chi tiết Ví điện tử">
                Xem chi tiết <span aria-hidden="true">›</span>
              </a>
            </article>
          </div>

          {/* PARTNERS */}
          <h3 className="partners-title">Đối tác tiêu biểu</h3>
          <ul className="partner-logos" aria-label="Đối tác tiêu biểu">
            <li className="partner-item">
              <img src="./img/partners/momo.svg" alt="MoMo" loading="lazy" />
            </li>
            <li className="partner-item">
              <img src="./img/partners/zalopay.svg" alt="ZaloPay" loading="lazy" />
            </li>
            <li className="partner-item">
              <img src="./img/partners/napas.svg" alt="napas" loading="lazy" />
            </li>
          </ul>
        </div>
      </section>
      {/* KẾT THÚC KẾT NỐI TÍCH HỢP HỆ THỐNG */}
    </main>
  );
}
export default Ebank;