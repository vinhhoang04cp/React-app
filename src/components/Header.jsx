/**
 * Header.jsx
 * ------------------------------------------------------------
 * Thành phần Header của ứng dụng:
 * - Hiển thị topbar (liên kết phụ), navbar (menu chính), và mobile menu.
 * - Hỗ trợ đóng/mở menu cho mobile; tự đóng khi chuyển sang desktop (>= 992px).
 * - Đóng menu khi người dùng click ra ngoài khu vực menu (tăng UX).
 * - Đảm bảo accessibility cơ bản với aria-attributes.
 *
 * Lưu ý:
 * - File CSS "../styles/Header.css" quyết định cách hiển thị (layout, màu sắc).
 * - Các class như d-lg-none, d-none d-lg-flex… là của Bootstrap (nếu bạn dùng).
 */

import { useEffect, useRef, useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  /**
   * isMenuOpen: trạng thái đóng/mở của mobile menu
   * - false: menu ẩn
   * - true : menu hiện
   *
   * setIsMenuOpen: hàm cập nhật trạng thái (bất đồng bộ theo cách React).
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * mobileMenuRef: tham chiếu trực tiếp DOM node của khối menu mobile
   * - Dùng để kiểm tra "click ra ngoài" (nếu click không nằm trong khối này => đóng).
   * - useRef giữ nguyên .current qua các lần render mà không gây re-render.
   */
  const mobileMenuRef = useRef(null);

  /**
   * useEffect: gắn các "global listeners" khi menu có thể mở
   * - handleDocumentClick: nếu menu đang mở, click ở bất kỳ đâu ngoài menu => đóng.
   * - handleResize: nếu cửa sổ >= 992px (desktop) => đóng menu để tránh trùng với menu desktop.
   *
   * Tại sao dependencies là [isMenuOpen]?
   * - Chúng ta cần biết "tại thời điểm click" menu có đang mở không.
   * - Khi isMenuOpen thay đổi, effect remove listeners cũ và add listeners mới (cùng logic) => đảm bảo đồng bộ.
   *
   * Cleanup:
   * - Rất quan trọng để tránh "memory leak" hoặc lặp listener.
   */
  useEffect(() => {
    // Đóng menu nếu click ra ngoài vùng mobile menu
    const handleDocumentClick = (e) => {
      // Điều kiện:
      // 1) Menu đang mở
      // 2) Có ref tới DOM menu
      // 3) Phần tử click KHÔNG nằm trong mobileMenuRef.current
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Tự đóng menu khi phóng to màn hình lên desktop (>= 992px)
    const handleResize = () => {
      if (window.innerWidth >= 992) setIsMenuOpen(false);
    };

    // Gắn listeners mức document/window
    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('resize', handleResize);

    // Cleanup khi unmount hoặc khi isMenuOpen thay đổi
    return () => {
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  /**
   * toggleMenu: bật/tắt trạng thái menu mobile
   * - e.stopPropagation(): ngăn event nổi bọt lên document.
   *   Nếu không, listener "document click" ở trên sẽ chạy ngay và đóng menu vừa mở.
   * - setIsMenuOpen((o) => !o): dùng callback để an toàn với trạng thái hiện tại.
   */
  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen((o) => !o);
  };

  return (
    <header className="acb-header bg-white">
      {/*
        =========================
        1) MOBILE MENU OVERLAY
        =========================
        - Hiển thị/ẩn dựa vào state isMenuOpen (thêm class .active khi mở).
        - ref={mobileMenuRef} để sử dụng kiểm tra "click outside".
      */}
      <div
        className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}
        ref={mobileMenuRef}
      >
        <nav className="mobile-menu-links">
          {/* Nhóm liên kết chính cho mobile */}
          <a href="/e-bank">Ngân hàng số</a>
          <a href="/">Cá nhân</a>
          <a href="/">Doanh nghiệp</a>
          <a href="/premium">Ngân hàng Ưu tiên</a>

          <hr />

          {/* Nhóm liên kết phụ cho mobile */}
          <a href="/about">Về chúng tôi</a>
          <a href="/investors">Nhà đầu tư</a>
          <a href="#">Tuyển dụng</a>
          <a href="/reward">ACB Rewards</a>
          <a href="/library">Thư viện</a>
          <a href="/security">An toàn</a>
          <a href="/liquidation">Thanh lý tài sản</a>
        </nav>
      </div>

      {/*
        =========================
        2) TOPBAR (Thanh trên cùng)
        =========================
        - Chứa các link phụ và action (Hỗ trợ, Liên hệ, Search, Chọn ngôn ngữ).
        - ".d-none .d-lg-flex": ẩn trên mobile, chỉ hiện dạng flex từ kích thước >= lg.
      */}
      <div className="acb-topbar border-bottom">
        <div className="wrap topbar-row">
          {/* Liên kết phụ (chỉ desktop) */}
          <nav className="top-links d-none d-lg-flex">
            <a href="/about">Về chúng tôi</a>
            <a href="/investors">Nhà đầu tư</a>
            <a href="#">Tuyển dụng</a>
            <a href="/reward">ACB Rewards</a>
            <a href="/library">Thư viện</a>
            <a href="/security">An toàn</a>
            <a href="/liquidation">Thanh lý tài sản</a>
          </nav>

          {/* Nhóm hành động bên phải topbar */}
          <div className="top-actions">
            {/*
              Lưu ý icon dùng Bootstrap Icons (class "bi ...").
              Có thể thay thế bằng thư viện icon khác tùy dự án.
            */}
            <a href="#">
              <i className="bi bi-telephone-outbound me-2"></i>Hỗ trợ 24/7
            </a>
            <a href="#">
              <i className="bi bi-geo-alt me-2"></i>Liên hệ
            </a>

            {/* Nút tìm kiếm minh hoạ (chưa gắn logic) */}
            <button className="icon-btn" aria-label="Tìm kiếm">
              <i className="bi bi-search"></i>
            </button>

            {/* Chọn ngôn ngữ (minh hoạ) */}
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

      {/*
        =========================
        3) NAVBAR (Thanh điều hướng chính)
        =========================
        - Bên trái: logo, nút toggle (mobile), menu chính (desktop).
        - Bên phải: nút CTA "Đăng nhập ACB ONE".
      */}
      <nav className="acb-navbar border-bottom">
        <div className="wrap nav-row">
          {/* Cụm trái: brand + toggle + menu */}
          <div className="nav-left">
            {/* Logo/brand về trang chủ */}
            <a href="/" className="brand">
              <span className="logo-text">ACB</span>
            </a>

            {/* 
              Nút toggle cho MOBILE
              - "d-lg-none": chỉ hiện trên màn hình nhỏ (mobile/tablet).
              - aria-expanded: hỗ trợ công cụ trợ năng biết menu đang mở/đóng.
              - onClick: gọi toggleMenu (đã stopPropagation).
            */}
            <button
              className="mobile-nav-toggle d-lg-none"
              id="mobileMenuToggle"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              {/* Đổi icon: 3 gạch (bi-list) <-> dấu X (bi-x-lg) */}
              <i className={`bi ${isMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
            </button>

            {/* Menu chính (hiển thị inline trên desktop) */}
            <nav className="main-nav">
              <a className="active" href="/e-bank">Ngân hàng số</a>
              <a href="/">Cá nhân</a>
              <a href="/">Doanh nghiệp</a>
              <a href="/premium">Ngân hàng Ưu tiên</a>
            </nav>
          </div>

          {/* Cụm phải: vạch ngăn + CTA đăng nhập */}
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
  );
};

export default Header;
