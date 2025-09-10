import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import './styles/Subpage/Premium.css';

export default function ACBHome() {
  useEffect(() => {
    const mobileMenuToggle = document.getElementById("mobileMenuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const body = document.body;

    if (mobileMenuToggle && mobileMenu) {
      const iconElement = mobileMenuToggle.querySelector(".bi");
      let isMenuOpen = false;

      const handleToggleClick = (e) => {
        e.stopPropagation();
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle("active");
        body.style.overflow = isMenuOpen ? "hidden" : "";

        if (iconElement) {
          if (isMenuOpen) {
            iconElement.classList.remove("bi-list");
            iconElement.classList.add("bi-x-lg");
          } else {
            iconElement.classList.remove("bi-x-lg");
            iconElement.classList.add("bi-list");
          }
        }
      };

      const handleDocClick = (event) => {
        if (
          isMenuOpen &&
          !mobileMenu.contains(event.target) &&
          !mobileMenuToggle.contains(event.target)
        ) {
          mobileMenu.classList.remove("active");
          if (iconElement) {
            iconElement.classList.remove("bi-x-lg");
            iconElement.classList.add("bi-list");
          }
          isMenuOpen = false;
          body.style.overflow = "";
        }
      };

      let resizeTimer;
      const handleResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          if (window.innerWidth >= 992 && isMenuOpen) {
            mobileMenu.classList.remove("active");
            if (iconElement) {
              iconElement.classList.remove("bi-x-lg");
              iconElement.classList.add("bi-list");
            }
            isMenuOpen = false;
            body.style.overflow = "";
          }
        }, 250);
      };

      mobileMenuToggle.addEventListener("click", handleToggleClick);
      document.addEventListener("click", handleDocClick);
      window.addEventListener("resize", handleResize);

      return () => {
        mobileMenuToggle.removeEventListener("click", handleToggleClick);
        document.removeEventListener("click", handleDocClick);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <>
      <Helmet>
        <html lang="vi" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ACB Bank - Trang chủ</title>
        {/* Bootstrap 5 + Bootstrap Icons via CDN */}
        <link
          href="https://cdn.jsdelivr.net/combine/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css,npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        {/* Custom CSS giữ nguyên đường dẫn */}
        <link href="css/subpage/premium.css" rel="stylesheet" />
        {/* Bootstrap JS Bundle (Popper + JS) */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          defer
        ></script>
      </Helmet>

      {/* Header */}
      <header className="acb-header sticky-top bg-white">
        {/* TOPBAR */}
        <div className="acb-topbar border-bottom">
          <div className="wrap topbar-row">
            {/* Menu links chính - ẩn trên mobile */}
            <nav className="top-links d-none d-lg-flex">
              <a href="./about.html">Về chúng tôi</a>
              <a href="./investors.html">Nhà đầu tư</a>
              <a href="#">Tuyển dụng</a>
              <a href="./reward.html">ACB Rewards</a>
              <a href="./library.html">Thư viện</a>
              <a href="./security.html">An toàn</a>
              <a href="./liquidation.html">Thanh lý tài sản</a>
            </nav>

            {/* Các action buttons bên phải */}
            <div className="top-actions">
              <a href="#">
                <i className="bi bi-telephone-outbound me-2"></i>Hỗ trợ 24/7
              </a>
              <a href="#">
                <i className="bi bi-geo-alt me-2"></i>Liên hệ
              </a>
              <button className="icon-btn" aria-label="Tìm kiếm">
                <i className="bi bi-search"></i>
              </button>
              <button className="lang-btn" aria-label="Ngôn ngữ">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
                  alt="VN"
                />
                <i className="bi bi-caret-down-fill ms-1 small"></i>
              </button>
            </div>
          </div>
        </div>

        {/* NAVBAR */}
        <nav className="acb-navbar border-bottom">
          <div className="wrap nav-row">
            {/* Phần bên trái: Logo + Menu chính */}
            <div className="nav-left">
              {/* Logo ACB */}
              <a href="./index.html" className="brand">
                <span className="logo-text">ACB</span>
              </a>

              {/* Button toggle menu mobile */}
              <button
                id="mobileMenuToggle"
                className="mobile-nav-toggle d-lg-none"
                aria-label="Toggle menu"
              >
                <i className="bi bi-list"></i>
              </button>

              {/* Menu navigation chính */}
              <nav className="main-nav d-none d-lg-flex">
                <a className="active" href="/e-bank.html">
                  Ngân hàng số
                </a>
                <a href="./index.html">Cá nhân</a>
                <a href="./index.html">Doanh nghiệp</a>
                <a href="#">Ngân hàng Ưu tiên</a>
              </nav>

              {/* Mobile Menu */}
              <nav id="mobileMenu" className="mobile-menu">
                <div className="mobile-menu-inner">
                  <a className="active" href="/e-bank.html">
                    Ngân hàng số
                  </a>
                  <a href="./index.html">Cá nhân</a>
                  <a href="./index.html">Doanh nghiệp</a>
                  <a href="#">Ngân hàng Ưu tiên</a>
                  {/* Menu items từ topbar */}
                  <a href="./about.html">Về chúng tôi</a>
                  <a href="./investors.html">Nhà đầu tư</a>
                  <a href="#">Tuyển dụng</a>
                  <a href="./reward.html">ACB Rewards</a>
                  <a href="./library.html">Thư viện</a>
                  <a href="./security.html">An toàn</a>
                  <a href="./liquidation.html">Thanh lý tài sản</a>
                </div>
              </nav>
            </div>

            {/* Phần bên phải: Button đăng nhập */}
            <div className="nav-right">
              <span className="nav-split"></span>
              <a href="#" className="btn-acbone">
                Đăng nhập&nbsp;
                <strong>
                  ACB<span className="opacity-75">ONE</span>
                </strong>
                <i className="bi bi-chevron-right ms-2"></i>
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Banner */}
      <div className="hero2">
        <img
          src="./img/premium.jpg"
          alt="Ngân hàng số"
          className="hero2__img"
          loading="lazy"
        />
        <div className="hero2__content"></div>
      </div>

      {/* Main Content */}
      <main>
        {/* SECTION MỚI (Giới thiệu & Phân hạng hội viên) */}
        <section className="premium-section text-center">
          <div className="container">
            <h2 className="display-5 fw-bold mb-3">Giới thiệu</h2>
            <p className="lead">
              ACB Privilege Banking được thiết kế dựa trên kim chỉ nam "Vị thời
              gian". Ngân hàng ưu tiên ACB tự hào tiên phong mang đến Quý Khách
              giải pháp rút ngắn thời gian gia tăng tài sản &amp; kéo dài thời
              gian tận hưởng cuộc sống.
            </p>

            <div className="premium-divider"></div>
            <h2 className="display-5 fw-bold mb-3">Phân hạng hội viên</h2>
            <p className="lead">
              Với mong muốn mang đến sự trọn vẹn trong trải nghiệm, ưu đãi xứng
              tầm và những đặc quyền chuyên biệt, ACB giới thiệu đến Quý Khách 3
              phân hạng hội viên Ngân hàng ưu tiên
            </p>
          </div>

          {/* Carousel bắt đầu */}
          <div
            id="acbPrivilegeCarousel"
            className="carousel slide my-5"
            data-bs-ride="carousel"
            aria-label="Ưu đãi nổi bật"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#acbPrivilegeCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#acbPrivilegeCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#acbPrivilegeCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div className="carousel-inner rounded-4 shadow">
              <div className="carousel-item active" data-bs-interval="5000">
                <img
                  src="./img/anh2k.jpg"
                  className="d-block w-100"
                  alt="Không gian giao dịch ưu tiên"
                  loading="lazy"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="fw-bold">Đặc quyền giao dịch nhanh</h5>
                  <p className="mb-0">Quầy riêng, ưu tiên xếp hàng &amp; RM đồng hành.</p>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="5000">
                <img
                  src="./img/anh2k.jpg"
                  className="d-block w-100"
                  alt="Giải pháp đầu tư cá nhân hóa"
                  loading="lazy"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="fw-bold">Giải pháp đầu tư cá nhân hóa</h5>
                  <p className="mb-0">Tối ưu hoá danh mục để gia tăng tài sản bền vững.</p>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="5000">
                <img
                  src="./img/anh2k.jpg"
                  className="d-block w-100"
                  alt="Đặc quyền tận hưởng cuộc sống"
                  loading="lazy"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="fw-bold">Ưu đãi phong cách sống</h5>
                  <p className="mb-0">Dịch vụ sân bay, nghỉ dưỡng &amp; ẩm thực chọn lọc.</p>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#acbPrivilegeCarousel"
              data-bs-slide="prev"
              aria-label="Slide trước"
            >
              <span className="carousel-control-prev-icon" aria-hidden={true}></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#acbPrivilegeCarousel"
              data-bs-slide="next"
              aria-label="Slide sau"
            >
              <span className="carousel-control-next-icon" aria-hidden={true}></span>
            </button>
          </div>
          {/* Carousel kết thúc */}
        </section>
        {/* /SECTION MỚI */}

        {/* SECTION: Dịch vụ & Đặc quyền */}
        <section className="priv-section">
          <div className="container">
            <h2 className="display-6 fw-bold text-white mb-4">Dịch vụ &amp; Đặc quyền</h2>

            <div className="priv-grid">
              {/* Hàng 1: 2 thẻ lớn */}
              <a href="#" className="priv-card priv-card--xl">
                <img src="./img/anh2k.jpg" alt="Đặc quyền Vị thời gian" />
                <div className="priv-cap">
                  <div className="priv-title">Đặc quyền Vị thời gian</div>
                </div>
                <i className="bi bi-arrow-up-right priv-arrow" aria-hidden={true}></i>
              </a>

              <a href="#" className="priv-card priv-card--xl">
                <img src="./img/anh2k.jpg" alt="Đội ngũ nhân sự ưu tú" />
                <div className="priv-cap">
                  <div className="priv-title">Đội ngũ nhân sự ưu tú</div>
                </div>
                <i className="bi bi-arrow-up-right priv-arrow" aria-hidden={true}></i>
              </a>

              {/* Hàng 2: 3 thẻ vừa */}
              <a href="#" className="priv-card priv-card--md">
                <img src="./img/anh2k.jpg" alt="Hỗ trợ ưu tiên" />
                <div className="priv-cap">
                  <div className="priv-title">Hỗ trợ<br />Ưu tiên</div>
                </div>
                <i className="bi bi-arrow-up-right priv-arrow" aria-hidden={true}></i>
              </a>

              <a href="#" className="priv-card priv-card--md">
                <img src="./img/anh2k.jpg" alt="Không gian phục vụ sang trọng" />
                <div className="priv-cap">
                  <div className="priv-title">Không gian phục vụ<br />sang trọng</div>
                </div>
                <i className="bi bi-arrow-up-right priv-arrow" aria-hidden={true}></i>
              </a>

              <a href="#" className="priv-card priv-card--md">
                <img src="./img/anh2k.jpg" alt="Giao dịch ưu tiên" />
                <div className="priv-cap">
                  <div className="priv-title">Giao dịch<br />Ưu tiên</div>
                </div>
                <i className="bi bi-arrow-up-right priv-arrow" aria-hidden={true}></i>
              </a>

              {/* Hàng 3: 3 thẻ vừa */}
              <a href="#" className="priv-card priv-card--md">
                <img src="./img/anh2k.jpg" alt="Đặc quyền phòng chờ Thương gia" />
                <div className="priv-cap">
                  <div className="priv-title">Đặc quyền phòng chờ<br />Thương gia</div>
                </div>
                <i className="bi bi-arrow-up-right priv-arrow" aria-hidden={true}></i>
              </a>

              <a href="#" className="priv-card priv-card--md">
                <img src="./img/anh2k.jpg" alt="Quà tặng ý nghĩa" />
                <div className="priv-cap">
                  <div className="priv-title">Quà tặng<br />ý nghĩa</div>
                </div>
                <i className="bi bi-arrow-up-right priv-arrow" aria-hidden={true}></i>
              </a>

              <a href="#" className="priv-card priv-card--md">
                <img src="./img/anh2k.jpg" alt="Đặc quyền gia đình" />
                <div className="priv-cap">
                  <div className="priv-title">Đặc quyền<br />gia đình</div>
                </div>
                <i className="bi bi-arrow-up-right priv-arrow" aria-hidden={true}></i>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION: Sản phẩm được thiết kế chuyên biệt */}
        <section className="prod-section">
          <div className="container">
            <div className="row g-4 align-items-start">
              {/* Trái: tiêu đề + list */}
              <div className="col-lg-7">
                <h2 className="display-6 fw-bold text-white mb-2">
                  Sản phẩm được thiết kế chuyên biệt
                </h2>
                <p className="lead text-white-50 mb-4">
                  Tại ACB Privilege Banking, sứ mệnh phục vụ Quý khách được chúng
                  tôi đặt lên hàng đầu từ các sản phẩm tài chính chuyên biệt được
                  cá nhân hoá theo nhu cầu, cùng với các quyền lợi phong cách sống
                  đẳng cấp.
                </p>

                <nav className="prod-list" aria-label="Danh mục sản phẩm">
                  <a className="prod-link" href="#">
                    <span>Tài khoản ưu tiên</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                  <a className="prod-link" href="#">
                    <span>Thẻ ưu tiên</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                  <a className="prod-link" href="#">
                    <span>Tiết kiệm ưu tiên</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                  <a className="prod-link" href="#">
                    <span>Bảo hiểm</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                  <a className="prod-link" href="#">
                    <span>Vay</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                </nav>
              </div>

              {/* Phải: ảnh minh hoạ */}
              <div className="col-lg-5">
                <figure className="prod-visual rounded-4 shadow">
                  <img src="./img/anh2k.jpg" alt="Privilege cards" loading="lazy" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Ưu đãi */}
        <section className="promo-section" id="uu-dai">
          <div className="container">
            <h2 className="display-6 fw-bold text-white mb-4">Ưu đãi</h2>

            <div className="promo-grid">
              {/* Card 1 */}
              <article className="promo-card">
                <a href="#" className="promo-media" aria-label="Xem ưu đãi 1">
                  <img src="./img/anh2k.jpg" alt="Chọn tài khoản số đẹp" />
                </a>
                <div className="promo-body">
                  <h3 className="promo-title">
                    CHỌN TÀI KHOẢN SỐ ĐẸP – KHỞI DẤU ẤN, ĐỊNH VỊ THẾ
                  </h3>
                  <div className="promo-date">25/06/2025</div>
                  <p className="promo-desc">Ưu đãi phí đến 80% các số siêu phẩm</p>
                  <div className="promo-rule"></div>
                  <a className="promo-link" href="#">
                    Xem chi tiết <i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </article>

              {/* Card 2 */}
              <article className="promo-card">
                <a href="#" className="promo-media" aria-label="Xem ưu đãi 2">
                  <img src="./img/anh2k.jpg" alt="Thời gian dẫn lối - Kết nối toàn cầu" />
                </a>
                <div className="promo-body">
                  <h3 className="promo-title">THỜI GIAN DẪN LỐI – KẾT NỐI TOÀN CẦU</h3>
                  <div className="promo-date">25/06/2025</div>
                  <p className="promo-desc">Tận hưởng 180 điểm tỷ giá khi giao dịch ngoại tệ</p>
                  <div className="promo-rule"></div>
                  <a className="promo-link" href="#">
                    Xem chi tiết <i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </article>

              {/* Card 3 */}
              <article className="promo-card">
                <a href="#" className="promo-media" aria-label="Xem ưu đãi 3">
                  <img src="./img/anh2k.jpg" alt="Privilege Circle - Kết nối tinh hoa" />
                </a>
                <div className="promo-body">
                  <h3 className="promo-title">PRIVILEGE CIRCLE – KẾT NỐI TINH HOA</h3>
                  <div className="promo-date">04/08/2025</div>
                  <p className="promo-desc">&nbsp;</p>
                  <div className="promo-rule"></div>
                  <a className="promo-link" href="#">
                    Xem chi tiết <i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </article>
            </div>

            <div className="text-center">
              <a href="#" className="promo-more btn">
                <span>Xem thêm</span> <i className="bi bi-chevron-right ms-1"></i>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION: Tài liệu & Đặt hẹn */}
        <section className="docs-appt-section">
          <div className="container">
            <h2 className="display-6 fw-bold text-white mb-4">
              Các tài liệu Quý khách cần tham khảo
            </h2>

            {/* Hàng tài liệu + nút tải */}
            <div className="docs-row d-flex flex-wrap align-items-center justify-content-between mb-5">
              <a
                className="doc-item d-inline-flex align-items-center gap-3 text-decoration-none"
                href="#"
              >
                <span className="doc-icon rounded-circle d-inline-flex align-items-center justify-content-center">
                  <i className="bi bi-file-earmark-text"></i>
                </span>
                <span className="doc-text">
                  Điều kiện &amp; Điều khoản Hội viên ACB Privilege Banking
                </span>
              </a>
              <a className="btn btn-download" href="#">
                Tải xuống <i className="bi bi-download ms-2"></i>
              </a>
            </div>

            {/* Khối đặt hẹn */}
            <div className="appt-card rounded-4">
              <h3 className="fw-bold text-white mb-4">Đặt hẹn ngay</h3>

              <form className="row g-3">
                <div className="col-lg-4">
                  <label className="form-label label-caps">
                    HỌ VÀ TÊN <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-ghost"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div className="col-lg-4">
                  <label className="form-label label-caps">
                    SỐ ĐIỆN THOẠI <span className="text-danger">*</span>
                  </label>
                  <input
                    type="tel"
                    className="form-control form-control-ghost"
                    placeholder="0912345678"
                  />
                </div>
                <div className="col-lg-4">
                  <label className="form-label label-caps">
                    EMAIL <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-ghost"
                    placeholder="nguyenvana@gmail.com"
                  />
                </div>

                <div className="col-lg-6">
                  <label className="form-label label-caps">KHU VỰC</label>
                  <div className="select-wrap">
                    <select
                      className="form-select form-control-ghost"
                      defaultValue="TP Hồ Chí Minh"
                    >
                      <option value="TP Hồ Chí Minh">TP Hồ Chí Minh</option>
                      <option value="Hà Nội">Hà Nội</option>
                      <option value="Đà Nẵng">Đà Nẵng</option>
                      <option value="Cần Thơ">Cần Thơ</option>
                    </select>
                    <i className="bi bi-chevron-down select-caret" aria-hidden={true}></i>
                  </div>
                </div>

                <div className="col-lg-6">
                  <label className="form-label label-caps">THỜI GIAN LIÊN HỆ THÍCH HỢP</label>
                  <div className="select-wrap">
                    <select
                      className="form-select form-control-ghost"
                      defaultValue="8h–10h"
                    >
                      <option value="8h–10h">8h–10h</option>
                      <option value="10h–12h">10h–12h</option>
                      <option value="13h–15h">13h–15h</option>
                      <option value="15h–17h">15h–17h</option>
                    </select>
                    <i className="bi bi-chevron-down select-caret" aria-hidden={true}></i>
                  </div>
                </div>

                <div className="col-12 mt-2">
                  <button type="button" className="btn appt-submit">
                    Đăng ký <i className="bi bi-chevron-right ms-1"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* SECTION: Liên hệ Ngân hàng Ưu tiên */}
        <section className="contact-priv-section">
          <div className="container">
            <h2 className="display-6 fw-bold text-white mb-4">
              Liên hệ Ngân hàng Ưu tiên
            </h2>

            <div className="priv-contact-card">
              <p className="lead text-white-50 mb-4">
                Các kênh chăm sóc chuyên biệt luôn sẵn sàng đồng hành cùng Quý Khách:
              </p>

              <p className="fw-semibold mb-2">Hotline Contact Center:</p>

              <p className="contact-hotline mb-3">
                <a className="contact-phone" href="tel:1800577775">
                  1800 577 775
                </a>
                <span className="contact-note">
                  {" "}(miễn phí dành riêng cho Khách hàng ưu tiên)
                </span>
              </p>

              <p className="contact-hotline mb-4">
                <a className="contact-phone" href="tel:+842838247247">
                  (028) 38 247 247
                </a>
              </p>

              <p className="mb-0">
                Email:{" "}
                <a className="contact-email" href="mailto:nganhanguutien@acb.com.vn">
                  nganhanguutien@acb.com.vn
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        {/* SECTION 1: CTA TẢI ỨNG DỤNG */}
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
                <h3 className="fw-bold text-white" style={{ margin: "0 0 8px" }}>
                  Tải ứng dụng ACB ONE
                </h3>
                <p className="text-white" style={{ margin: "0 0 20px", opacity: ".95" }}>
                  Khám phá muôn ngàn tiện ích từ dịch vụ ngân hàng số ACB ONE
                </p>

                {/* QR code và badge stores */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "18px", flexWrap: "wrap" }}
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

        {/* SECTION 2: FOOTER LINKS - 5 cột thông tin */}
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
                    <span className="ico">
                      <i className="bi bi-geo-alt"></i>
                    </span>
                    <span className="label">Liên hệ</span>
                    <i className="bi bi-chevron-right" style={{ marginLeft: "auto" }}></i>
                  </a>

                  {/* Hotline 1900 */}
                  <a href="tel:1900545486" className="support-btn" aria-label="Gọi 1900 54 54 86">
                    <span className="ico">
                      <i className="bi bi-telephone"></i>
                    </span>
                    <span className="label">1900 54 54 86</span>
                    <i className="bi bi-chevron-right" style={{ marginLeft: "auto" }}></i>
                  </a>

                  {/* Số điện thoại văn phòng */}
                  <a href="tel:02838247247" className="support-btn" aria-label="Gọi (028) 38 247 247">
                    <span className="ico">
                      <i className="bi bi-telephone-forward"></i>
                    </span>
                    <span className="label">(028) 38 247 247</span>
                    <i className="bi bi-chevron-right" style={{ marginLeft: "auto" }}></i>
                  </a>

                  {/* Social media links */}
                  <div className="socials">
                    <a href="#" className="social" aria-label="Facebook">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="social" aria-label="YouTube">
                      <i className="bi bi-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: BOTTOM - Copyright */}
        <section className="footer-bottom">
          <div className="wrap" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span className="brand">ACB</span>
            <span className="copy">© 2023 Ngân hàng thương mại cổ phần Á Châu</span>
          </div>
        </section>
      </footer>
    </>
  );
}
