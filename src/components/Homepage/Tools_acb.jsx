import React from "react";
import { Helmet } from "react-helmet";
import '../../styles/Tools_acb.css';

// JSX chuyển từ HTML gốc, giữ nguyên chức năng & hiển thị
// - Không thêm JS ngoài so với bản gốc (tab & carousel cần bootstrap.bundle.js đã có ở layout)
// - Nhúng đúng CSS và Bootstrap Icons như file gốc

export default function ToolsSection() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="css/homepage/tools_acb.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </Helmet>

      <section className="tools-section py-5 bg-white">
        <div className="container">
          <h3 className="fw-bold mb-4">Công cụ</h3>

          {/* HAI CỘT BẰNG NHAU & CAO BẰNG NHAU */}
          <div className="row g-eq align-items-stretch">
            {/* LEFT: Tỷ giá & lãi suất */}
            <div className="col-12 col-lg-6 d-flex">
              <div className="panel-soft rounded-5 p-4 p-lg-4 h-100 w-100">
                <h4 className="fw-bold mb-3">Tỷ giá và lãi suất tiết kiệm</h4>

                {/* Tabs */}
                <ul className="nav tab-underline small fw-semibold">
                  <li className="nav-item">
                    <button
                      className="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-fx"
                    >
                      Bảng cập nhật tỷ giá
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-gold">
                      Giá vàng
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-rate">
                      Lãi suất
                    </button>
                  </li>
                </ul>
                <hr className="mt-0 mb-3" />

                <div className="tab-content">
                  {/* FX tab */}
                  <div className="tab-pane fade show active" id="tab-fx">
                    <div id="fxCarousel" className="carousel slide" data-bs-ride="false">
                      <div className="carousel-inner">
                        {/* Slide 1 */}
                        <div className="carousel-item active">
                          <div className="vstack gap-3">
                            {/* USD */}
                            <div className="rate-row p-3">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                <img
                                  src="https://flagcdn.com/w40/us.png"
                                  width={32}
                                  height={24}
                                  className="rounded border"
                                  alt="US"
                                />
                                <div className="fw-bold fs-5">
                                  USD <span className="text-secondary fw-normal">(50,100)</span>
                                </div>
                                <div className="text-secondary small ms-2">Đô la Mỹ</div>
                              </div>
                              <hr className="my-2" />
                              <div className="row text-secondary small">
                                <div className="col-6">Mua vào chuyển khoản</div>
                                <div className="col-6 text-end">Bán ra chuyển khoản</div>
                              </div>
                              <div className="row">
                                <div className="col-6 fw-bold fs-5">26,050</div>
                                <div className="col-6 fw-bold fs-5 text-end">26,400</div>
                              </div>
                            </div>
                            {/* AUD */}
                            <div className="rate-row p-3">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                <img
                                  src="https://flagcdn.com/w40/au.png"
                                  width={32}
                                  height={24}
                                  className="rounded border"
                                  alt="AU"
                                />
                                <div className="fw-bold fs-5">AUD</div>
                                <div className="text-secondary small ms-2">Đô la Úc</div>
                              </div>
                              <hr className="my-2" />
                              <div className="row text-secondary small">
                                <div className="col-6">Mua vào chuyển khoản</div>
                                <div className="col-6 text-end">Bán ra chuyển khoản</div>
                              </div>
                              <div className="row">
                                <div className="col-6 fw-bold fs-5">16,851</div>
                                <div className="col-6 fw-bold fs-5 text-end">17,421</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="carousel-item">
                          <div className="vstack gap-3">
                            <div className="rate-row p-3">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                <img
                                  src="https://flagcdn.com/w40/eu.png"
                                  width={32}
                                  height={24}
                                  className="rounded border"
                                  alt="EU"
                                />
                                <div className="fw-bold fs-5">EUR</div>
                                <div className="text-secondary small ms-2">Euro</div>
                              </div>
                              <hr className="my-2" />
                              <div className="row text-secondary small">
                                <div className="col-6">Mua vào chuyển khoản</div>
                                <div className="col-6 text-end">Bán ra chuyển khoản</div>
                              </div>
                              <div className="row">
                                <div className="col-6 fw-bold fs-5">28,220</div>
                                <div className="col-6 fw-bold fs-5 text-end">28,690</div>
                              </div>
                            </div>
                            <div className="rate-row p-3">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                <img
                                  src="https://flagcdn.com/w40/jp.png"
                                  width={32}
                                  height={24}
                                  className="rounded border"
                                  alt="JP"
                                />
                                <div className="fw-bold fs-5">JPY</div>
                                <div className="text-secondary small ms-2">Yên Nhật</div>
                              </div>
                              <hr className="my-2" />
                              <div className="row text-secondary small">
                                <div className="col-6">Mua vào chuyển khoản</div>
                                <div className="col-6 text-end">Bán ra chuyển khoản</div>
                              </div>
                              <div className="row">
                                <div className="col-6 fw-bold fs-5">173.20</div>
                                <div className="col-6 fw-bold fs-5 text-end">177.50</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Dots (trái) */}
                      <div className="carousel-indicators indicators-left mt-3">
                        <button
                          type="button"
                          data-bs-target="#fxCarousel"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                        ></button>
                        <button type="button" data-bs-target="#fxCarousel" data-bs-slide-to="1"></button>
                      </div>
                    </div>

                    <div className="mt-3">
                      <a href="#" className="link-primary fw-semibold">
                        Xem thêm <i className="bi bi-chevron-right"></i>
                      </a>
                    </div>
                  </div>

                  {/* Gold tab */}
                  <div className="tab-pane fade" id="tab-gold">
                    <div className="placeholder-box">Dữ liệu giá vàng (demo)…</div>
                  </div>

                  {/* Rate tab */}
                  <div className="tab-pane fade" id="tab-rate">
                    <div className="placeholder-box">Bảng lãi suất (demo)…</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Biểu mẫu biểu phí */}
            <div className="col-12 col-lg-6 d-flex">
              <div className="panel-soft rounded-5 p-4 p-lg-4 h-100 w-100">
                <h4 className="fw-bold mb-3">Biểu mẫu biểu phí</h4>

                <div className="vstack gap-3">
                  <div className="doc-row">
                    <div className="fw-semibold">
                      Giấy đề nghị mở tài khoản và đăng ký dịch vụ (dành cho cá nhân)
                    </div>
                    <a
                      href="#"
                      className="btn btn-outline-primary rounded-pill px-4 d-flex align-items-center gap-2"
                    >
                      Tải xuống <i className="bi bi-download"></i>
                    </a>
                  </div>

                  <div className="doc-row">
                    <div className="fw-semibold">Giấy đề nghị cấp thẻ tín dụng</div>
                    <a
                      href="#"
                      className="btn btn-outline-primary rounded-pill px-4 d-flex align-items-center gap-2"
                    >
                      Tải xuống <i className="bi bi-download"></i>
                    </a>
                  </div>

                  <div className="doc-row">
                    <div className="fw-semibold">Giấy đề nghị cấp thẻ ghi nợ</div>
                    <a
                      href="#"
                      className="btn btn-outline-primary rounded-pill px-4 d-flex align-items-center gap-2"
                    >
                      Tải xuống <i className="bi bi-download"></i>
                    </a>
                  </div>

                  <div className="doc-row">
                    <div className="fw-semibold">Giấy đề nghị cấp thẻ trả trước</div>
                    <a
                      href="#"
                      className="btn btn-outline-primary rounded-pill px-4 d-flex align-items-center gap-2"
                    >
                      Tải xuống <i className="bi bi-download"></i>
                    </a>
                  </div>
                </div>

                {/* Bên phải yêu cầu “Xem thêm” ở giữa */}
                <div className="text-center mt-3">
                  <a href="#" className="link-primary fw-semibold">
                    Xem thêm <i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
