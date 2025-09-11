// Requires Bootstrap 5.3+ CSS and Bootstrap Icons CSS to be included globally
// The Bootstrap bundle JS is added via CDN below to preserve carousel functionality
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/Subpage/Security.css';
import Carousel from '../src/components/Homepage/Carousel';

// ==================== DATA ====================
const breadcrumbs = [
  { label: 'Trang chủ', href: '#', current: false },
  { label: 'Nguyên tắc giao dịch an toàn', href: null, current: true },
];

const slides = [
  {
    bg: "https://picsum.photos/seed/phish-bg/1600/900",
    title: "Thông tin cảnh báo về hình thức lừa đảo khi giao dịch trực tuyến",
    desc: "Nhận biết kịch bản giả mạo, bảo vệ tài khoản, tránh cung cấp OTP/mật khẩu.",
    cta: "Xem chi tiết",
    href: "#",
  },
  {
    bg: "https://picsum.photos/seed/sms-bg/1600/900",
    title: "Cảnh giác với SMS chứa liên kết lạ",
    desc: "Không bấm liên kết và không cài app ngoài kho chính thức.",
    cta: "Xem chi tiết",
    href: "#",
  },
  {
    bg: "https://picsum.photos/seed/limit-bg/1600/900",
    title: "Giảm hạn mức online về 0 khi nghi ngờ",
    desc: "Đăng nhập online.acb.com.vn để điều chỉnh tạm thời, rồi liên hệ hotline.",
    cta: "Xem chi tiết",
    href: "#",
  },
];

const filters = [
  { label: 'Giao dịch ngân hàng số an toàn', count: 20, active: true },
  { label: 'Giao dịch thẻ an toàn', count: 2, active: false },
  { label: 'Một số Website lừa đảo phổ biến', count: 2, active: false },
];

const alerts = [
  { img: "https://picsum.photos/seed/acb1/900/675", title: "Cảnh báo", subtitle: "ACB cảnh báo SMS lừa đảo", href: "#" },
  { img: "https://picsum.photos/seed/acb2/900/675", title: "Cảnh báo kịch bản lừa đảo mới lợi dụng việc sáp nhập tỉnh, thành", subtitle: "—", href: "#" },
  { img: "https://picsum.photos/seed/acb3/900/675", title: "Cảnh báo các chiêu thức lừa đảo", subtitle: "—", href: "#" },
  { img: "https://picsum.photos/seed/acb4/900/675", title: "Cảnh báo Thủ đoạn lừa đảo phổ biến", subtitle: "—", href: "#" },
  { img: "https://picsum.photos/seed/acb5/900/675", title: "Cảnh báo mạo danh nhân viên Ngân hàng và cán bộ cơ quan Nhà nước", subtitle: "—", href: "#" },
  { img: "https://picsum.photos/seed/acb6/900/675", title: "Cảnh báo một số website giả mạo, lừa đảo phổ biến 2025", subtitle: "—", href: "#" },
];

const pages = [1, 2, 3, 4];
const activePage = 2;

const principles = [
  {
    icon: "bi bi-bug",
    jsx: (
      <p className="mb-0">
        <span className="fw-semibold">Không tải tệp tin, cài đặt ứng dụng</span>{" "}
        <span className="desc">
          không rõ nguồn gốc và không truy cập đường dẫn lạ từ tin nhắn, email, mạng xã hội, cuộc gọi mạo danh.
        </span>
      </p>
    ),
  },
  {
    icon: "bi bi-key",
    jsx: (
      <p className="mb-0">
        <span className="fw-semibold">Không cung cấp</span>{" "}
        <span className="desc">OTP – Password – Username vào các ứng dụng, website lạ.</span>
      </p>
    ),
  },
  {
    icon: "bi bi-shield-lock",
    jsx: (
      <p className="mb-0">
        <span className="fw-semibold">Đăng ký xác thực khuôn mặt</span>{" "}
        <span className="desc">để tăng cường bảo vệ khi giao dịch trực tuyến theo </span>
        <a href="#" className="link-primary fw-semibold">Quyết định số 2345/QĐ-NHNN</a>
        <span className="desc"> và </span>
        <a href="#" className="link-primary fw-semibold">Thông tư 17, 18/2024/TT-NHNN của Ngân hàng Nhà nước</a>
        <span className="desc">.</span>
      </p>
    ),
  },
  {
    icon: "bi bi-person-lock",
    jsx: (
      <p className="mb-0">
        <span className="fw-semibold">Chủ động</span>{" "}
        <span className="desc">nhập sai mật khẩu 5 lần khi bị mất thông tin bảo mật.</span>
      </p>
    ),
  },
  {
    icon: "bi bi-phone",
    jsx: (
      <p className="mb-0">
        <span className="fw-semibold">Chỉ cài đặt</span>{" "}
        <span className="desc">ứng dụng ACB ONE / ACB ONE BIZ trên </span>
        <span className="fw-semibold">Google Play</span>
        <span className="desc"> hoặc </span>
        <span className="fw-semibold">App Store</span>
        <span className="desc">.</span>
      </p>
    ),
  },
  // Item 6: bố cục đặc biệt (tiêu đề + list links)
  {
    icon: "bi bi-window",
    custom: true,
    jsx: (
      <>
        <p className="mb-2 text-center">
          <span className="fw-semibold">Website chính thức:</span>
        </p>
        <ul className="list-unstyled small m-0 text-center">
          <li><a className="link-primary" href="https://online.acb.com.vn">https://online.acb.com.vn</a></li>
          <li><a className="link-primary" href="https://business.acb.com.vn">https://business.acb.com.vn</a></li>
          <li><a className="link-primary" href="https://qrportal.acb.com.vn">https://qrportal.acb.com.vn</a></li>
          <li><a className="link-primary" href="https://developer.acb.com.vn">https://developer.acb.com.vn</a></li>
        </ul>
      </>
    ),
  },
];

const docs = [
  "Chính sách bảo mật thông tin cá nhân",
  "Hướng dẫn mở khóa thẻ trên ứng dụng ACB ONE",
  "Hướng dẫn khóa thẻ trên ứng dụng ACB ONE",
  "Hướng dẫn cách lấy lại mật khẩu đăng nhập trên ACB ONE BIZ phiên bản web",
  "Hướng dẫn cách thay đổi thông tin cá nhân trên ứng dụng ACB ONE",
];

const actions = [
  {
    img: "https://picsum.photos/seed/act1/450/800",
    alt: "Tắt nguồn/Ngắt kết nối",
    jsx: (
      <p className="small text-secondary m-0">
        Trong trường hợp nghi ngờ hay phát hiện điện thoại bị kiểm soát từ xa, ngay lập tức:{" "}
        <span className="fw-semibold">tắt nguồn điện thoại hoặc ngắt ngay tất cả các kết nối với wifi/4G</span>.
      </p>
    ),
  },
  {
    img: "https://picsum.photos/seed/act2/450/800",
    alt: "Khóa đăng nhập tạm thời",
    jsx: (
      <p className="small text-secondary m-0">
        <span className="fw-semibold">Nhập sai mật khẩu liên tiếp 05 lần</span>{" "}
        để khóa quyền đăng nhập dịch vụ Ngân hàng số của các ứng dụng, website ACB online.
      </p>
    ),
  },
  {
    img: "https://picsum.photos/seed/act3/450/800",
    alt: "Giảm hạn mức về 0",
    jsx: (
      <p className="small text-secondary m-0">
        <span className="fw-semibold">Đăng nhập website</span>{" "}
        <a className="link-primary" href="https://online.acb.com.vn">https://online.acb.com.vn</a>{" "}
        để điều chỉnh hạn mức giao dịch online về 0.
      </p>
    ),
  },
  {
    img: "https://picsum.photos/seed/act4/450/800",
    alt: "Liên hệ ngân hàng",
    jsx: (
      <p className="small text-secondary m-0">
        <span className="fw-semibold">Liên hệ ngay Ngân hàng</span>{" "}
        <a className="link-primary" href="tel:+842838247247">(028) 38 247 247</a> hoặc{" "}
        <a className="link-primary" href="tel:1900545486">1900 54 54 86</a>{" "}
        để tạm khóa các dịch vụ khi phát hiện dấu hiệu nghi ngờ bị lừa đảo/lộ lọt thông tin bảo mật; hoặc đến CN/PGD gần nhất để được hỗ trợ.
      </p>
    ),
  },
  {
    img: "https://picsum.photos/seed/act5/450/800",
    alt: "Khôi phục cài đặt gốc",
    jsx: (
      <p className="small text-secondary m-0">
        <span className="fw-semibold">Khôi phục cài đặt gốc (Factory Reset)</span>{" "}
        đối với thiết bị trong trường hợp phát hiện/ nghi ngờ cài đặt ứng dụng giả mạo.
      </p>
    ),
  },
  {
    img: "https://picsum.photos/seed/act6/450/800",
    alt: "Trình báo cơ quan chức năng",
    jsx: (
      <p className="small text-secondary m-0">
        Nếu có dấu hiệu tội phạm, <span className="fw-semibold">trình báo với Cơ quan Công an</span> nơi gần nhất.
      </p>
    ),
  },
];

// ==================== COMPONENT ====================
function Security() {
  return (
    <>
      <Header />
      <Carousel />
      <main>
        <div className="container my-5">
          {/* Hero Carousel Banner */}
          <section className="hero-banner py-5 position-relative overflow-hidden">
            <div className="container py-2">
              {/* Breadcrumb */}
              <nav aria-label="breadcrumb" className="mb-3">
                <ol className="breadcrumb">
                  {breadcrumbs.map((b) => (
                    <li
                      key={b.label}
                      className={`breadcrumb-item${b.current ? ' active' : ''}`}
                      aria-current={b.current ? 'page' : undefined}
                    >
                      {b.current ? (
                        b.label
                      ) : (
                        <a className="text-decoration-none" href={b.href || '#'}>
                          {b.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Carousel */}
              <div id="securityCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators" style={{ bottom: "-2.25rem" }}>
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      data-bs-target="#securityCarousel"
                      data-bs-slide-to={i}
                      className={i === 0 ? 'active' : undefined}
                      aria-current={i === 0 ? 'true' : undefined}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="carousel-inner">
                  {slides.map((s, i) => (
                    <div key={s.title} className={`carousel-item${i === 0 ? ' active' : ''}`}>
                      <div
                        className="rounded-5 p-5 p-lg-5 slide-bg"
                        style={{ backgroundImage: `url('${s.bg}')` }}
                      >
                        <div className="row align-items-center g-4 banner-slide">
                          <div className="col-lg-7 text-white">
                            <h2 className="display-6 fw-bold mb-3">{s.title}</h2>
                            <p className="lead mb-4 opacity-90">{s.desc}</p>
                            <a href={s.href} className="btn btn-light btn-lg rounded-pill px-4">
                              {s.cta}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#securityCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#securityCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </section>

          {/* Cảnh báo bảo mật (Grid) */}
          <section className="alerts-section py-5">
            <div className="container">
              <h2 className="section-title mb-3">Cảnh báo bảo mật</h2>

              {/* Pills filter */}
              <div className="d-flex flex-wrap gap-2 mb-4">
                {filters.map((f) => (
                  <button key={f.label} className={`filter-pill${f.active ? ' active' : ''}`} type="button">
                    <span>{f.label}</span>
                    <span className="filter-count">{f.count}</span>
                  </button>
                ))}
              </div>

              {/* Cards grid 3x2 */}
              <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
                {alerts.map((a, idx) => (
                  <div key={idx} className="col">
                    <div className="security-card card h-100">
                      <div className="img-top"><img src={a.img} alt="" /></div>
                      <div className="card-body">
                        <div className="fw-semibold mb-1">{a.title}</div>
                        <div className="text-secondary small mb-3">{a.subtitle}</div>
                        <a href={a.href} className="btn btn-primary btn-cta rounded-pill">
                          Xem chi tiết <i className="bi bi-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <nav className="mt-4" aria-label="Security alerts pagination">
                <ul className="pagination justify-content-center gap-2">
                  <li className="page-item">
                    <a className="page-link rounded-pill" href="#" aria-label="Previous">
                      &lsaquo;
                    </a>
                  </li>
                  {pages.map((p) => (
                    <li key={p} className={`page-item${p === activePage ? ' active' : ''}`}>
                      <a className="page-link rounded-pill" href="#">{p}</a>
                    </li>
                  ))}
                  <li className="page-item">
                    <a className="page-link rounded-pill" href="#" aria-label="Next">
                      &rsaquo;
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </section>

          {/* Nguyên tắc an toàn chung */}
          <section id="principles" className="principles-section py-5">
            <div className="container">
              <h2 className="section-title mb-3">Nguyên tắc an toàn chung</h2>
              <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 principles-grid">
                {principles.map((p, i) => (
                  <div key={i} className="col">
                    <div className={`card-principle${p.custom ? ' text-start text-lg-start text-md-start text-center' : ''}`}>
                      <div className={`icon-lg${p.custom ? ' text-center' : ''}`}>
                        <i className={`${p.icon} fs-1`}></i>
                      </div>
                      {p.custom ? (
                        <>{p.jsx}</>
                      ) : (
                        <>{p.jsx}</>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* bundle: gồm Popper + JS components (Carousel, Collapse, Dropdown…) */}
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

          {/* Tài liệu Quý khách cần tham khảo */}
          <section className="docs-section py-5">
            <div className="container">
              <h2 className="section-title mb-4">Tài liệu Quý khách cần tham khảo</h2>

              {docs.map((title, i) => (
                <div key={title} className={`doc-item py-3${i === docs.length - 1 ? ' last' : ''}`}>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <div className="doc-icon"><i className="bi bi-file-earmark"></i></div>
                      <div className="doc-title">{title}</div>
                    </div>
                    <a href="#" className="btn btn-outline-primary rounded-pill btn-doc d-inline-flex align-items-center gap-2">
                      Tải xuống <i className="bi bi-download"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Hành động ngay khi có dấu hiệu bất thường */}
          <section id="actions" className="actions-section py-5 bg-white">
            <div className="container">
              <h2 className="section-title text-center mb-4">Hành động ngay khi có dấu hiệu bất thường</h2>
              <div className="row g-5 row-cols-1 row-cols-md-3">
                {actions.map((a, i) => (
                  <div key={i} className="col">
                    <div className="action-card text-center">
                      <div className="action-illus mx-auto mb-3">
                        <img src={a.img} alt={a.alt} />
                      </div>
                      {a.jsx}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default Security;
