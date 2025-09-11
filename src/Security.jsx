// Security.jsx
// Requires Bootstrap 5.3+ CSS và Bootstrap Icons CSS được include global.
// Bootstrap bundle JS được thêm qua CDN phía dưới để Carousel hoạt động.
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/Subpage/Security.css';
import Carousel from '../src/components/Homepage/Carousel';

// Import toàn bộ data từ file riêng
import {
  breadcrumbs,
  slides,
  filters,
  alerts,
  pages,
  activePage,
  principles,
  docs,
  actions,
} from './Data/security.data.jsx';

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
                      {p.custom ? (<>{p.jsx}</>) : (<>{p.jsx}</>)}
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
