// src/pages/Investors.jsx
// Lưu ý: Đoạn JSX này giữ nguyên cấu trúc & class Bootstrap như bản HTML.
// Để hoạt động đúng, trang của bạn cần nạp Bootstrap CSS/JS và Bootstrap Icons toàn cục (CDN hoặc bundle).

import React from 'react'
import Header from './components/Header.jsx'            // chỉnh đường dẫn theo dự án của bạn
import Footer from './components/Footer.jsx'
import '../src/styles/Subpage/Investors.css'            // chỉnh đường dẫn theo dự án của bạn
import Carousel from './components/Homepage/Carousel.jsx'

// Import DATA đã tách riêng
import {
  breadcrumbItems,
  yearOptions,
  reportSlides,
  agmItems,
  charterItems,
  disclosureItems,
  toolkitItems,
  contactList,
  subscribeFields
} from './Data/investors.data.jsx'

// Component nhỏ: Select Năm (giữ nguyên class & id)
const YearSelect = ({ id }) => (
  <select id={id} className="form-select">
    {yearOptions.map((y, i) => (
      <option key={y} {...(i === 0 ? { defaultValue: true } : {})}>
        {y}
      </option>
    ))}
  </select>
)

function Investors() {
  return (
    <>
      <Header />
      <Carousel />
      <main>
        {/* Breadcrumb */}
        <div className="bg-body-tertiary py-2">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 small">
                {breadcrumbItems.map((item, idx) => (
                  <li
                    key={idx}
                    className={`breadcrumb-item ${item.active ? 'active' : ''}`}
                    aria-current={item.active ? 'page' : undefined}
                  >
                    {item.active ? (
                      item.label
                    ) : (
                      <a href={item.href}>{item.label}</a>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-card row g-0 align-items-center shadow-sm">
              <div className="col-lg-7">
                <div className="hero-img"></div>
              </div>
              <div className="col-lg-5">
                <div className="hero-content">
                  <span className="badge bg-light text-dark mb-3">Quan hệ Nhà đầu tư</span>
                  <h1 className="display-5 fw-bold mb-3">Khung Tài chính bền vững</h1>
                  <p className="lead text-secondary mb-4">
                    ACB đã ban hành Khung Tài chính bền vững nhằm thiết lập các tiêu chuẩn cơ bản để ACB phát hành trái phiếu/khoản vay bền vững, đồng thời giúp thúc đẩy hoạt động kinh doanh của ngân hàng thông qua cho vay có trách nhiệm và tài chính bền vững. Tải ngay bằng cách bấm vào nút "Đọc thêm" bên dưới.
                  </p>
                  <a className="btn-hero" href="#">
                    <span>Đọc thêm</span>
                    <span className="circle">
                      <i className="bi bi-chevron-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Periodic Reports */}
        <section className="py-5">
          <div className="container">
            <div className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-4">
              <div>
                <h2 className="section-title mb-1">Báo cáo định kỳ</h2>
                <p className="text-secondary mb-0">
                  Tổng hợp các báo cáo Quản trị, Tài chính, Thường niên, Phát triển bền vững…
                </p>
              </div>
              <a href="#" className="btn btn-outline-primary">
                Tất cả báo cáo
              </a>
            </div>

            <div id="reportsCarousel" className="carousel slide" data-bs-ride="false">
              <div className="carousel-indicators position-static my-3">
                {reportSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    data-bs-target="#reportsCarousel"
                    data-bs-slide-to={idx}
                    className={idx === 0 ? 'active' : ''}
                    aria-current={idx === 0 ? 'true' : undefined}
                    aria-label={`Slide ${idx + 1}`}
                  ></button>
                ))}
              </div>

              <div className="carousel-inner">
                {reportSlides.map((slide, sIdx) => (
                  <div
                    className={`carousel-item ${sIdx === 0 ? 'active' : ''}`}
                    key={sIdx}
                  >
                    <div className="row g-4 row-cols-1 row-cols-lg-3">
                      {slide.map((card, cIdx) => (
                        <div className="col" key={cIdx}>
                          <div className="report-tile h-100">
                            <img className="cover" src={card.src} alt={card.alt} />
                            <div className="meta">
                              <div className="title">{card.title}</div>
                              <a className="cta link-primary" href={card.href}>
                                Xem chi tiết <i className="bi bi-chevron-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#reportsCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#reportsCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>

        {/* AGM Section */}
        <section className="py-5 bg-body-tertiary">
          <div className="container">
            <h2 className="section-title mb-4">Đại hội đồng cổ đông thường niên</h2>
            <div className="panel-xl shadow-0">
              <div className="row g-4 align-items-start">
                <aside className="col-lg-4">
                  <div className="side-filter">
                    <div className="mb-3">
                      <div className="label-caption mb-1">Năm</div>
                      <YearSelect id="agmYear" />
                    </div>
                    <div className="pill-nav mt-3">
                      <button type="button" className="btn btn-primary active">
                        Thông báo và thư mời
                      </button>
                      <button type="button" className="btn btn-light disabled">
                        Tài liệu họp
                      </button>
                      <button type="button" className="btn btn-light disabled">
                        Biên bản họp và Nghị quyết
                      </button>
                    </div>
                  </div>
                </aside>

                <div className="col-lg-8">
                  <div className="items-wrap">
                    {agmItems.map((it, idx) => (
                      <div className="item-row" key={idx}>
                        <div className="flex-grow-1">
                          <div className="title">{it.title}</div>
                        </div>
                        <a className={it.btnClass} href="#">
                          Tải xuống <i className="bi bi-download"></i>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Charters / Prospectus */}
        <section className="py-5">
          <div className="container">
            <h2 className="section-title mb-4">Điều lệ, quy chế, bản cáo bạch</h2>
            <div className="panel-xl">
              <div className="row g-4 align-items-start">
                <aside className="col-lg-4">
                  <div className="side-filter">
                    <div className="mb-3">
                      <div className="label-caption mb-1">Năm</div>
                      <YearSelect id="charterYear" />
                    </div>
                    <div className="pill-nav mt-3">
                      <button className="btn btn-primary active" type="button">
                        Điều lệ tổ chức và hoạt động
                      </button>
                      <button className="btn btn-light disabled" type="button">
                        Quy chế quản trị nội bộ
                      </button>
                    </div>
                  </div>
                </aside>
                <div className="col-lg-8">
                  <div className="items-wrap">
                    {charterItems.map((it, idx) => (
                      <div className="item-row" key={idx}>
                        <div className="flex-grow-1">
                          <div className="title">{it.title}</div>
                        </div>
                        <a className="btn-download" href="#">
                          Tải xuống <i className="bi bi-download"></i>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclosures */}
        <section className="py-5 bg-body-tertiary">
          <div className="container">
            <h2 className="section-title mb-4">Công bố thông tin</h2>
            <div className="panel-xl">
              <div className="row g-4 align-items-start">
                <aside className="col-lg-4">
                  <div className="side-filter">
                    <div className="mb-3">
                      <div className="label-caption mb-1">Năm</div>
                      <YearSelect id="disclosureYear" />
                    </div>
                    <div className="pill-nav mt-3">
                      <button className="btn btn-primary active" type="button">
                        Tất cả
                      </button>
                      <button className="btn btn-light disabled" type="button">
                        Bản trình bày
                      </button>
                      <button className="btn btn-light disabled" type="button">
                        Tài liệu họp
                      </button>
                    </div>
                  </div>
                </aside>
                <div className="col-lg-8">
                  <div className="items-wrap">
                    {disclosureItems.map((it, idx) => (
                      <div className="item-row" key={idx}>
                        <div className="flex-grow-1">
                          <div className="title">{it.title}</div>
                        </div>
                        <a className="btn-download" href="#">
                          Tải xuống <i className="bi bi-download"></i>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investor Toolkit */}
        <section className="py-5">
          <div className="container">
            <h2 className="section-title mb-4">Tài liệu nhà đầu tư</h2>
            <div className="panel-xl">
              <div className="row g-4 align-items-start">
                <aside className="col-lg-4">
                  <div className="side-filter">
                    <div className="mb-3">
                      <div className="label-caption mb-1">Năm</div>
                      <YearSelect id="charterYear" />
                    </div>
                    <div className="pill-nav mt-3">
                      <button className="btn btn-primary active" type="button">
                        Điều lệ tổ chức và hoạt động
                      </button>
                    </div>
                  </div>
                </aside>
                <div className="col-lg-8">
                  <div className="items-wrap">
                    {toolkitItems.map((it, idx) => (
                      <div className="item-row" key={idx}>
                        <div className="flex-grow-1">
                          <div className="title">{it.title}</div>
                        </div>
                        <a className="btn-download" href="#">
                          Tải xuống <i className="bi bi-download"></i>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-5 bg-body-tertiary">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
              <h2 className="section-title mb-0">Thông tin liên hệ ACB IR</h2>
              <a
                className="btn btn-primary btn-pill"
                href="https://maps.google.com/?q=442+Nguyen+Thi+Minh+Khai,+Quan+3,+TPHCM"
                target="_blank"
                rel="noopener"
              >
                Chỉ đường{' '}
                <span className="circle">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </a>
            </div>
            <div className="row g-4">
              <div className="col-lg-7">
                <div className="p-4 bg-white rounded-3 shadow-sm h-100">
                  <ul className="list-group list-group-flush info-list">
                    {contactList.map((row, idx) => (
                      <li
                        className="list-group-item d-flex align-items-start gap-3"
                        key={idx}
                      >
                        <i className={row.icon}></i>
                        {row.html}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="p-4 bg-white rounded-3 shadow-sm h-100">
                  <h6 className="fw-semibold mb-3">Hỗ trợ 24/7</h6>
                  <p className="mb-2">
                    <i className="bi bi-telephone me-2"></i>(028) 38 247 247
                  </p>
                  <p className="mb-0">
                    <i className="bi bi-telephone me-2"></i>1900 54 54 86
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe */}
        <section className="py-5">
          <div className="container">
            <h2 className="section-title mb-4">Đăng ký nhận thông tin từ ACB IR</h2>
            <div className="panel-xl">
              <form>
                <div className="row g-3">
                  {subscribeFields.map((f, idx) => (
                    <div className="col-md-4" key={idx}>
                      <label className="form-label small text-uppercase text-secondary fw-semibold">
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        className="form-control input-soft"
                        placeholder={f.placeholder}
                        required
                      />
                    </div>
                  ))}
                  <div className="col-12 d-flex gap-3 mt-2">
                    <button type="submit" className="btn btn-primary btn-pill">
                      Gửi yêu cầu
                    </button>
                    <div className="panel-note small">
                      Bằng cách gửi, bạn đồng ý nhận thông tin từ ACB IR.
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Investors
