import React from "react";
import '../../styles/Homepage/Features.css';

export default function Features() {
  return (
    <section className="features-section py-5 bg-light">
      <div className="container">
        {/* HEADING */}
        <div className="text-center mb-4 mb-lg-5">
          <h2 className="fw-bold display-6 mb-2">Cuộc sống dễ dàng hơn cùng ACB</h2>
          <p className="text-secondary mb-0">
            Cùng khám phá nhiều tiện ích từ dịch vụ ngân hàng hàng đầu Việt Nam
          </p>
        </div>

        {/* FEATURE CARD 1 - ACB ONE */}
        <div className="feature-card gradient-soft rounded-4 p-4 p-lg-5 shadow-sm overflow-hidden mb-4">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="h4 fw-bold mb-2">Dịch vụ ngân hàng số ACB ONE</h3>
              <p className="text-secondary mb-4">Mở tài khoản 1 phút* – Nhận ưu đãi cá nhân</p>
              <a href="#" className="btn btn-primary rounded-pill px-4">Xem chi tiết</a>
            </div>
            <div className="col-lg-6 text-center text-lg-end mt-4 mt-lg-0">
              <img src="./img/anh2k.jpg" className="img-fluid feature-img" alt="ACB ONE" loading="lazy" />
            </div>
          </div>
        </div>

        {/* FEATURE CARD 2 - SẢN PHẨM THẺ */}
        <div className="feature-card gradient-blue rounded-4 p-4 p-lg-5 shadow-sm overflow-hidden mb-4 text-white">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <h3 className="h4 fw-bold mb-2">Sản phẩm Thẻ</h3>
              <p className="mb-4 text-white">Trải nghiệm phong cách sống hiện đại với mọi tiện ích từ thẻ ACB</p>
              <a href="#" className="btn btn-light rounded-pill px-4">Xem chi tiết</a>
            </div>
            <div className="col-lg-6 order-lg-1 text-center text-lg-start mt-4 mt-lg-0">
              <img src="./img/anh2k.jpg" className="img-fluid feature-img" alt="Cards" loading="lazy" />
            </div>
          </div>
        </div>

        {/* FEATURE CARD 3 - TIỀN GỬI ONLINE */}
        <div className="feature-card gradient-cyan rounded-4 p-4 p-lg-5 shadow-sm overflow-hidden mb-4 text-white">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="h4 fw-bold mb-2">Tiền gửi Online</h3>
              <p className="mb-4">Linh hoạt & lãi suất cao hơn so với tại quầy</p>
              <a href="#" className="btn btn-light rounded-pill px-4">Xem chi tiết</a>
            </div>
            <div className="col-lg-6 text-center text-lg-end mt-4 mt-lg-0">
              <img src="./img/anh2k.jpg" className="img-fluid feature-img" alt="Savings" loading="lazy" />
            </div>
          </div>
        </div>

        {/* FEATURE CARD 4 - GIẢI PHÁP AFDI */}
        <div className="feature-card gradient-soft-2 rounded-4 p-4 p-lg-5 shadow-sm overflow-hidden mb-2">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <h3 className="h4 fw-bold mb-2">Gói giải pháp tài chính AFDI</h3>
              <p className="text-secondary mb-4">Đồng hành cùng Khách Hàng Doanh Nghiệp FDI đón đầu xu thế xanh</p>
              <a href="#" className="btn btn-primary rounded-pill px-4">Xem chi tiết</a>
            </div>
            <div className="col-lg-6 order-lg-1 text-center text-lg-start mt-4 mt-lg-0">
              <img src="./img/anh2k.jpg" className="img-fluid feature-img" alt="AFDI" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
