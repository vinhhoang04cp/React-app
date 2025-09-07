import React from "react";
import { Helmet } from "react-helmet";
import '../../styles/Services_5per.css';

// JSX chuyển từ HTML gốc, giữ nguyên chức năng & hiển thị.
// - Phụ thuộc vào Bootstrap CSS/JS đã có sẵn trên trang (carousel sẽ cần bootstrap.bundle.js).
// - Đoạn này chỉ nhúng CSS riêng cho section và Bootstrap Icons giống hệt file gốc.

export default function Services5() {
  return (
    <>
      <Helmet>
        {/* Import CSS cho services section */}
        <link rel="stylesheet" href="css/homepage/services_5per.css" />
        {/* Import Bootstrap Icons */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </Helmet>

      {/* Services section chính */}
      <section className="services5 py-3 bg-white">
        <div className="container-fluid position-relative">
          {/* Bootstrap Carousel cho services */}
          <div
            id="services5Carousel"
            className="carousel slide"
            data-bs-ride="false"
            data-bs-interval="false"
          >
            <div className="carousel-inner">
              {/* SLIDE 1: 5 dịch vụ đầu tiên */}
              <div className="carousel-item active">
                <div className="services-rail">
                  {/* Dịch vụ 1: Nộp thuế doanh nghiệp */}
                  <div className="service-item text-center">
                    <i className="bi bi-receipt-cutoff"></i>
                    <div className="label">
                      Nộp thuế
                      <br />
                      doanh nghiệp
                    </div>
                  </div>

                  {/* Dịch vụ 2: Giải ngân 24/7 */}
                  <div className="service-item text-center">
                    <i className="bi bi-clock-history"></i>
                    <div className="label">Giải ngân 24/7</div>
                  </div>

                  {/* Dịch vụ 3: Chi lương bảo mật */}
                  <div className="service-item text-center">
                    <i className="bi bi-shield-lock"></i>
                    <div className="label">
                      Chi lương
                      <br />
                      bảo mật
                    </div>
                  </div>

                  {/* Dịch vụ 4: Tài khoản thanh toán */}
                  <div className="service-item text-center">
                    <i className="bi bi-bank"></i>
                    <div className="label">
                      Tài khoản
                      <br />
                      thanh toán
                    </div>
                  </div>

                  {/* Dịch vụ 5: Gửi tiết kiệm */}
                  <div className="service-item text-center">
                    <i className="bi bi-piggy-bank"></i>
                    <div className="label">Gửi tiết kiệm</div>
                  </div>
                </div>
              </div>

              {/* SLIDE 2: 5 dịch vụ tiếp theo */}
              <div className="carousel-item">
                <div className="services-rail">
                  {/* Dịch vụ 6: Vay vốn */}
                  <div className="service-item text-center">
                    <i className="bi bi-cash-coin"></i>
                    <div className="label">Vay vốn</div>
                  </div>

                  {/* Dịch vụ 7: Thẻ tín dụng */}
                  <div className="service-item text-center">
                    <i className="bi bi-credit-card"></i>
                    <div className="label">Thẻ tín dụng</div>
                  </div>

                  {/* Dịch vụ 8: Thanh toán QR */}
                  <div className="service-item text-center">
                    <i className="bi bi-qr-code-scan"></i>
                    <div className="label">Thanh toán QR</div>
                  </div>

                  {/* Dịch vụ 9: Bảo hiểm */}
                  <div className="service-item text-center">
                    <i className="bi bi-shield-check"></i>
                    <div className="label">Bảo hiểm</div>
                  </div>

                  {/* Dịch vụ 10: Chuyển tiền */}
                  <div className="service-item text-center">
                    <i className="bi bi-arrow-left-right"></i>
                    <div className="label">Chuyển tiền</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CAROUSEL CONTROLS - Nút prev/next */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#services5Carousel"
              data-bs-slide="prev"
              aria-label="Previous"
            ></button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#services5Carousel"
              data-bs-slide="next"
              aria-label="Next"
            ></button>
          </div>
        </div>
      </section>
    </>
  );
}
