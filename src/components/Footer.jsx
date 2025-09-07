// Footer.jsx
import React from "react";
import '../styles/common/Footer.css';
// Cách 1 (khuyên dùng): thêm link Bootstrap Icons vào <head> của index.html
// Cách 2: hoặc import trực tiếp:
// import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer>
      {/* ========================================
          SECTION 1: CTA TẢI ỨNG DỤNG
          ======================================== */}
      <section className="app-cta">
        <div className="wrap">
          <div className="cta-grid">
            {/* Ảnh mockup điện thoại (bên trái) */}
            <div>
              <img
                className="phone-mock"
                src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=900&auto=format&fit=crop"
                alt="ACB ONE App"
                loading="lazy"
              />
            </div>

            {/* Nội dung + QR + badge stores (bên phải) */}
            <div>
              <h3
                className="fw-bold text-white"
                style={{ margin: "0 0 8px" }}
              >
                Tải ứng dụng ACB ONE
              </h3>
              <p
                className="text-white"
                style={{ margin: "0 0 20px", opacity: 0.95 }}
              >
                Khám phá muôn ngàn tiện ích từ dịch vụ ngân hàng số ACB ONE
              </p>

              {/* QR code và badge stores */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  flexWrap: "wrap",
                }}
              >
                {/* QR code để tải app */}
                <img
                  className="qr"
                  src="https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=https%3A%2F%2Facb.com.vn"
                  alt="QR tải ACB ONE"
                  loading="lazy"
                />

                {/* Badge stores (Google Play & App Store) */}
                <div className="badges">
                  <a href="#" className="badge-store" aria-label="Tải trên Google Play">
                    <img
                      src="https://developer.android.com/images/brand/vi_generic_rgb_wo_60.png"
                      alt="Google Play"
                    />
                  </a>
                  <a href="#" className="badge-store" aria-label="Tải trên App Store">
                    <img
                      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                      alt="App Store"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 2: FOOTER LINKS - 5 cột thông tin
          ======================================== */}
      <section className="footer-links">
        <div className="wrap">
          <div className="footer-cols">
            {/* Cột 1: Về ACB */}
            <div className="col">
              <h6 className="footer-hd">Về ACB</h6>
              <ul className="footer-list">
                <li><a href="#">Về chúng tôi</a></li>
                <li><a href="#">Nhà đầu tư</a></li>
                <li><a href="#">Tuyển dụng</a></li>
                <li><a href="#">Lãi suất cá nhân</a></li>
                <li><a href="#">Lãi suất doanh nghiệp</a></li>
                <li><a href="#">Câu hỏi thường gặp</a></li>
              </ul>
            </div>

            {/* Cột 2: Cá nhân */}
            <div className="col">
              <h6 className="footer-hd">Cá nhân</h6>
              <ul className="footer-list">
                <li><a href="#">Tài khoản thanh toán</a></li>
                <li><a href="#">Gửi tiết kiệm</a></li>
                <li><a href="#">Thẻ</a></li>
                <li><a href="#">Vay vốn</a></li>
                <li><a href="#">Bảo hiểm</a></li>
                <li><a href="#">Giao dịch cùng ACB</a></li>
              </ul>
            </div>

            {/* Cột 3: Doanh nghiệp */}
            <div className="col">
              <h6 className="footer-hd">Doanh nghiệp</h6>
              <ul className="footer-list">
                <li><a href="#">Vay vốn</a></li>
                <li><a href="#">Tài trợ xuất nhập khẩu</a></li>
                <li><a href="#">Dịch vụ tài chính</a></li>
                <li><a href="#">Tiền gửi có kỳ hạn</a></li>
                <li><a href="#">Giải pháp thanh toán</a></li>
                <li><a href="#">Thẻ doanh nghiệp</a></li>
              </ul>
            </div>

            {/* Cột 4: Thư viện */}
            <div className="col">
              <h6 className="footer-hd">Thư viện</h6>
              <ul className="footer-list">
                <li><a href="#">Thông báo từ ACB</a></li>
                <li><a href="#">Thông cáo báo chí</a></li>
                <li><a href="#">Ưu đãi khách hàng cá nhân</a></li>
                <li><a href="#">Ưu đãi cho Ngân hàng số</a></li>
                <li><a href="#">Biểu mẫu, biểu phí cá nhân</a></li>
                <li><a href="#">Biểu mẫu, biểu phí DN</a></li>
              </ul>
            </div>

            {/* Cột 5: Hỗ trợ */}
            <div className="col">
              <h6 className="footer-hd">Hỗ trợ</h6>
              <div className="support-group">
                {/* Nút liên hệ */}
                <a href="#" className="support-btn" aria-label="Liên hệ">
                  <span className="ico"><i className="bi bi-geo-alt" /></span>
                  <span className="label">Liên hệ</span>
                  <i className="bi bi-chevron-right" style={{ marginLeft: "auto" }} />
                </a>

                {/* Hotline 1900 */}
                <a href="tel:1900545486" className="support-btn" aria-label="Gọi 1900 54 54 86">
                  <span className="ico"><i className="bi bi-telephone" /></span>
                  <span className="label">1900 54 54 86</span>
                  <i className="bi bi-chevron-right" style={{ marginLeft: "auto" }} />
                </a>

                {/* Số điện thoại văn phòng */}
                <a href="tel:02838247247" className="support-btn" aria-label="Gọi (028) 38 247 247">
                  <span className="ico"><i className="bi bi-telephone-forward" /></span>
                  <span className="label">(028) 38 247 247</span>
                  <i className="bi bi-chevron-right" style={{ marginLeft: "auto" }} />
                </a>

                {/* Social media links */}
                <div className="socials">
                  <a href="#" className="social" aria-label="Facebook">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#" className="social" aria-label="YouTube">
                    <i className="bi bi-youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 3: BOTTOM - Copyright
          ======================================== */}
      <section className="footer-bottom">
        <div
          className="wrap"
          style={{ display: "flex", alignItems: "center", gap: "12px" }}
        >
          <span className="brand">ACB</span>
          <span className="copy">© 2023 Ngân hàng thương mại cổ phần Á Châu</span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
