import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import '../src/styles/Subpage/Reward.css'; // CSS tuỳ chỉnh cho trang ACB Rewards
import Carousel from '../src/components/Homepage/Carousel';

// ==================== DATA ====================
const activeSlideIndex = 2; // giữ nguyên: slide thứ 3 active lúc load

const slides = [
  // Slide 1
  [
    { icon: "bi bi-receipt", title: "Thanh toán hóa đơn bằng điểm thưởng", desc: "Biến điểm thưởng thành giá trị tiết kiệm thực tế mỗi khi thanh toán hóa đơn Nước, Internet, Nạp di động trả trước..." },
    { icon: "bi bi-arrow-down-up", title: "Dễ dàng chuyển điểm", desc: "Khi là khách hàng ưu tiên hoặc tham gia gói sản phẩm \"Dịch vụ tài chính Gia Đình Việt\"" },
    { icon: "bi bi-stars", title: "Kho quà hấp dẫn", desc: "Từ các thương hiệu yêu thích" },
  ],
  // Slide 2
  [
    { icon: "bi bi-lightning-charge", title: "Săn quà mỗi ngày", desc: "Deal HOT chỉ từ 1 điểm. Nhận ưu đãi quanh năm." },
    { icon: "bi bi-credit-card-2-front", title: "Tích điểm không giới hạn", desc: "Khi chi tiêu bằng thẻ tín dụng ACB." },
    { icon: "bi bi-heart", title: "Đổi quà theo sở thích", desc: "Mua sắm, Ăn uống, Giải trí và hơn thế nữa." },
  ],
  // Slide 3 (active)
  [
    { icon: "bi bi-receipt", title: "Thanh toán hóa đơn bằng điểm thưởng", desc: "Biến điểm thưởng thành giá trị tiết kiệm thực tế mỗi khi thanh toán hóa đơn Nước, Internet, Nạp di động trả trước..." },
    { icon: "bi bi-arrow-down-up", title: "Dễ dàng chuyển điểm", desc: "Khi là khách hàng ưu tiên hoặc tham gia gói sản phẩm \"Dịch vụ tài chính Gia Đình Việt\"" },
    { icon: "bi bi-stars", title: "Kho quà hấp dẫn", desc: "Từ các thương hiệu yêu thích" },
  ],
  // Slide 4
  [
    { icon: "bi bi-gift-fill", title: "Ưu đãi dịp đặc biệt", desc: "Sự kiện lễ tết, Black Friday, sinh nhật ACB..." },
    { icon: "bi bi-shield-check", title: "An toàn bảo mật", desc: "Chuẩn xác và minh bạch khi đổi quà/chi tiêu điểm." },
    { icon: "bi bi-bag-check", title: "Mua sắm linh hoạt", desc: "Đổi e-voucher, thanh toán hóa đơn, nạp dịch vụ." },
  ],
  // Slide 5
  [
    { icon: "bi bi-receipt", title: "Thanh toán hóa đơn bằng điểm thưởng", desc: "Biến điểm thưởng thành tiết kiệm thực tế cho gia đình." },
    { icon: "bi bi-arrow-down-up", title: "Dễ dàng chuyển điểm", desc: "Chia sẻ điểm linh hoạt cho người thân." },
    { icon: "bi bi-stars", title: "Kho quà hấp dẫn", desc: "Nhiều thương hiệu và danh mục yêu thích." },
  ],
];

const accordionItems = [
  { key: "Food",   title: "Ăn uống",  body: "Gợi ý: nhà hàng, cà phê, fast food, e-voucher giảm giá..." },
  { key: "Fun",    title: "Giải trí", body: "Rạp phim, công viên giải trí, gói streaming..." },
  { key: "Beauty", title: "Làm đẹp",  body: "Spa, chăm sóc tóc/da, mỹ phẩm..." },
  { key: "Shop",   title: "Mua sắm",  body: "Siêu thị, thời trang, điện máy..." },
  { key: "Util",   title: "Tiện ích", body: "Nạp điện thoại, thanh toán hóa đơn, dịch vụ số..." },
];

const pointCategories = [
  {
    title: "Thẻ",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
    alt: "Thẻ",
    href: "#",
  },
  {
    title: "Khách hàng ưu tiên",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    alt: "Khách hàng ưu tiên",
    href: "#",
  },
  {
    title: "Bảo hiểm",
    img: "https://images.unsplash.com/photo-1520975682031-a603130fc8a1?q=80&w=1200&auto=format&fit=crop",
    alt: "Bảo hiểm",
    href: "#",
  },
];

const stepsVoucher = [
  <>Chọn mục “ACB Rewards” tại màn hình chính.</>,
  <>Nhấn vào danh mục quà tặng muốn đổi.</>,
  <>Xem quà tặng trong từng danh mục.</>,
  <>Xem chi tiết quà tặng, chọn giá trị đổi và nhấn <em>Đổi ngay</em>.</>,
  <>Nhấn <em>Xác nhận</em> để hoàn tất.</>,
  <>Màn hình hiển thị đổi quà thành công, chọn <em>Xem quà đã đổi</em>.</>,
  <>Xem chi tiết quà tặng đã đổi.</>,
];

const stepsBill = [
  <>Chọn <em>Thanh toán</em> tại trang chủ ACB ONE.</>,
  <>Chọn hóa đơn cần thanh toán tại mục <em>Tất cả dịch vụ</em>.</>,
  <>Chọn <em>Số tài khoản (VND)</em> để thay đổi nguồn tiền.</>,
  <>Chọn nguồn tiền là <em>Điểm ACB Rewards</em>.</>,
  <>Kiểm tra thông tin và chọn <em>Tiếp tục</em>.</>,
  <>Chọn <em>Xác nhận</em> thông tin giao dịch.</>,
  <>Nhập mật mã <em>Safekey</em>.</>,
  <>Chọn <em>Nhập OTP – Xác nhận</em>.</>,
  <>Vào <em>Lịch sử điểm Rewards</em> để xem lại giao dịch.</>,
  <>Xem trạng thái giao dịch.</>,
];

// ==================== COMPONENT ====================
function Reward() {
  return (
    <>
      <Header />
      <Carousel />
      <main>
        {/* Features / Benefits */}
        <section id="features" className="section">
          <div className="container benefit-slider">
            <h2 className="display-5 fw-bold benefit-heading">Thêm gắn kết cùng ACB Rewards</h2>

            <div id="featuresCarousel" className="carousel slide" data-bs-ride="false">
              <div className="carousel-inner">
                {slides.map((items, i) => (
                  <div key={i} className={`carousel-item${i === activeSlideIndex ? " active" : ""}`}>
                    <div className="row g-4">
                      {items.map((it, j) => (
                        <div key={j} className="col-12 col-lg-4">
                          <div className="card p-4 text-center h-100">
                            <div className="benefit-icon"><i className={`${it.icon} fs-1`}></i></div>
                            <h5 className="title mb-2">{it.title}</h5>
                            <p className="desc mb-0">{it.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Controls */}
              <button className="carousel-control-prev" type="button" data-bs-target="#featuresCarousel" data-bs-slide="prev" aria-label="Prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#featuresCarousel" data-bs-slide="next" aria-label="Next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>

              {/* Indicators (third is active) */}
              <div className="carousel-indicators benefit-indicators">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    data-bs-target="#featuresCarousel"
                    data-bs-slide-to={i}
                    className={i === activeSlideIndex ? "active" : undefined}
                    aria-current={i === activeSlideIndex ? "true" : undefined}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="section section-muted">
          <div className="container">
            <div className="category-wrap mx-auto">
              <h2 className="display-6 category-title mb-4">Lựa chọn quà tặng theo sở thích từ kho quà đa dạng</h2>

              <div className="accordion category-list" id="categoryAccordion">
                {accordionItems.map(({ key, title, body }) => {
                  const headingId = `heading${key}`;
                  const collapseId = `collapse${key}`;
                  return (
                    <div key={key} className="accordion-item">
                      <h2 className="accordion-header" id={headingId}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${collapseId}`}
                          aria-expanded="false"
                          aria-controls={collapseId}
                        >
                          {title}
                        </button>
                      </h2>
                      <div
                        id={collapseId}
                        className="accordion-collapse collapse"
                        aria-labelledby={headingId}
                        data-bs-parent="#categoryAccordion"
                      >
                        <div className="accordion-body">{body}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Daily deals CTA */}
        <section id="deals" className="section">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <h2 className="deals-title h2 mb-2">Đặc biệt Săn quà mỗi ngày</h2>
                <p className="deals-desc mb-4">
                  Ngập tràn quà HOT chỉ từ 1 điểm trên ACB Rewards, thỏa thích săn quà quanh năm với ưu đãi mỗi ngày và ưu đãi dịp đặc biệt từ các thương hiệu yêu thích.
                </p>

                <div className="d-flex align-items-center deals-qrbadges mb-4">
                  <img className="deals-qr" alt="QR ACB ONE" src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=ACB%20ONE" />
                  <div className="d-flex flex-column flex-sm-row gap-2">
                    <a className="store-badge" href="#" aria-label="Get it on Google Play">
                      <i className="bi bi-google-play"></i>
                      <span>
                        <small>GET IT ON</small>
                        <br />
                        Google Play
                      </span>
                    </a>
                    <a className="store-badge" href="#" aria-label="Download on the App Store">
                      <i className="bi bi-apple"></i>
                      <span>
                        <small>Download on the</small>
                        <br />
                        App Store
                      </span>
                    </a>
                  </div>
                </div>

                <a className="btn btn-primary btn-cta" href="#">
                  Khám phá ngay <i className="bi bi-arrow-right ms-1"></i>
                </a>
              </div>

              <div className="col-lg-6">
                <div className="deals-phones">
                  <div className="phone phone-left"></div>
                  <div className="phone phone-right"></div>
                  <div className="float-app">SĂN QUÀ MỖI NGÀY</div>
                  <div className="float-chip">Từ 1 điểm</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Point categories (Thẻ, Ưu tiên, Bảo hiểm) */}
        <section id="point-categories" className="section section-muted">
          <div className="container">
            <h2 className="pointcats-title display-6 mb-4">Danh mục tích điểm</h2>
            <div className="row g-4 row-cols-1 row-cols-md-3">
              {pointCategories.map((c) => (
                <div key={c.title} className="col">
                  <div className="pcard h-100">
                    <img src={c.img} alt={c.alt} />
                    <div className="pcard-gradient"></div>
                    <div className="pcard-content">
                      <div className="pcard-title">{c.title}</div>
                      <a href={c.href} className="btn btn-chip">
                        Xem thêm <i className="bi bi-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guides */}
        <section id="guides" className="section">
          <div className="container">
            <h3 className="h5 mb-4">Hướng dẫn sử dụng ACB Rewards</h3>
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h6 className="mb-3">Cách đổi quà E-Voucher</h6>
                    <div className="stepper">
                      <ol>
                        {stepsVoucher.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h6 className="mb-3">Cách thanh toán hóa đơn bằng điểm</h6>
                    <div className="stepper">
                      <ol>
                        {stepsBill.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms */}
        <section id="terms" className="section section-muted">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
              <div>
                <h3 className="h5 mb-1">Thể lệ chương trình ACB Rewards</h3>
                <p className="mb-0 text-body-secondary">Vui lòng tham khảo chi tiết thể lệ trước khi tham gia chương trình.</p>
              </div>
              <a className="btn btn-outline-primary" href="#">Xem chi tiết</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Reward;
