import { useEffect, useState } from 'react';
import '../styles/Header.css';

/**
 * Component Header:
 * - Hiển thị topbar, navbar và menu mobile.
 * - Quản lý state mở/đóng menu mobile (isMenuOpen).
 * - Đóng menu khi:
 *   + Resize lên desktop (>= 992px).
 *   + Click ra ngoài vùng menu/toggle.
 */
const Header = () => {
  // State điều khiển hiển thị menu mobile (true = mở, false = đóng)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * useEffect thiết lập/cleanup các event listener:
   * - 'resize': nếu lên màn hình >= 992px và menu đang mở -> tự đóng (tránh trùng lặp với menu desktop).
   * - 'click' toàn document: nếu đang mở menu mà click ra ngoài menu/toggle -> đóng menu.
   *
   * Dependency [isMenuOpen]:
   * - Mỗi lần isMenuOpen thay đổi, effect sẽ re-run để đảm bảo handler "nhìn thấy" state mới nhất.
   */
  useEffect(() => {
    // Handler khi thay đổi kích thước cửa sổ
    const handleResize = () => {
      // Ngưỡng 992px thường tương ứng breakpoint lg của Bootstrap
      if (window.innerWidth >= 992 && isMenuOpen) {
        setIsMenuOpen(false); // lên desktop thì đóng menu mobile
      }
    };

    // Handler phát hiện click ngoài menu/toggle để đóng menu
    const handleClickOutside = (event) => {
      // Lấy phần tử menu và nút toggle theo id đã gán trong JSX
      const mobileMenu = document.getElementById('mobileMenu');
      const mobileMenuToggle = document.getElementById('mobileMenuToggle');
      
      // Điều kiện: menu đang mở + đã có 2 phần tử + click không nằm trong 2 vùng đó
      if (
        isMenuOpen && 
        mobileMenu &&
        mobileMenuToggle &&
        !mobileMenu.contains(event.target) && 
        !mobileMenuToggle.contains(event.target)
      ) {
        setIsMenuOpen(false); // đóng menu khi click ngoài
      }
    };

    // Gắn listener toàn cục
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', handleResize);

    // Cleanup để tránh leak/bị gắn nhiều lần
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  /**
   * Toggle mở/đóng menu mobile khi bấm nút hamburger (hoặc icon X).
   * - e.stopPropagation(): chặn sự kiện click "bong bóng" lên document,
   *   tránh bị handler "click outside" hiểu nhầm là click ngoài và đóng ngay lập tức.
   */
  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // sticky-top: dính trên đầu khi scroll; bg-white: nền trắng
    <header className="acb-header sticky-top bg-white">
      {/* 
        Khối menu mobile overlay (hiện/ẩn bằng class 'active' theo state isMenuOpen).
        id="mobileMenu" để handler ngoài useEffect có thể tham chiếu.
      */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`} id="mobileMenu">
        <nav className="mobile-menu-links">
          {/* Các liên kết điều hướng trên mobile */}
          <a href="/e-bank">Ngân hàng số</a>
          <a href="/">Cá nhân</a>
          <a href="/">Doanh nghiệp</a>
          <a href="/premium">Ngân hàng Ưu tiên</a>
          <hr />
          <a href="/about">Về chúng tôi</a>
          <a href="/investors">Nhà đầu tư</a>
          <a href="#">Tuyển dụng</a>
          <a href="/reward">ACB Rewards</a>
          <a href="/library">Thư viện</a>
          <a href="/security">An toàn</a>
          <a href="/liquidation">Thanh lý tài sản</a>
        </nav>
      </div>

      {/* Topbar mảnh trên cùng: các link và action phụ */}
      <div className="acb-topbar border-bottom">
        <div className="wrap topbar-row">
          {/* 
            d-none d-lg-flex: ẩn trên mobile, chỉ hiển thị flex từ màn hình >= lg (Bootstrap).
            Đây là nhóm link phụ dành cho desktop.
          */}
          <nav className="top-links d-none d-lg-flex">
            <a href="/about">Về chúng tôi</a>
            <a href="/investors">Nhà đầu tư</a>
            <a href="#">Tuyển dụng</a>
            <a href="/reward">ACB Rewards</a>
            <a href="/library">Thư viện</a>
            <a href="/security">An toàn</a>
            <a href="/liquidation">Thanh lý tài sản</a>
          </nav>
          
          {/* Nhóm hành động bên phải topbar: hỗ trợ, liên hệ, tìm kiếm, chọn ngôn ngữ */}
          <div className="top-actions">
            {/* Các icon dùng bộ Bootstrap Icons (class "bi ...") */}
            <a href="#"><i className="bi bi-telephone-outbound me-2"></i>Hỗ trợ 24/7</a>
            <a href="#"><i className="bi bi-geo-alt me-2"></i>Liên hệ</a>
            {/* Nút search minh họa (chưa gắn logic tìm kiếm) */}
            <button className="icon-btn" aria-label="Tìm kiếm">
              <i className="bi bi-search"></i>
            </button>
            {/* Nút chọn ngôn ngữ: hiển thị cờ VN + caret ▼ */}
            <button className="lang-btn" aria-label="Ngôn ngữ">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" alt="VN" />
              <i className="bi bi-caret-down-fill ms-1 small"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Navbar chính: logo, menu chính, nút đăng nhập ACB One */}
      <nav className="acb-navbar border-bottom">
        <div className="wrap nav-row">
          <div className="nav-left">
            {/* Logo/brand về trang chủ */}
            <a href="/" className="brand">
              <span className="logo-text">ACB</span>
            </a>
            
            {/* 
              Nút toggle cho mobile (d-lg-none: chỉ hiện trên màn hình nhỏ).
              id="mobileMenuToggle" để handler "click outside" loại trừ vùng này.
              Icon đổi giữa 'bi-list' (menu) và 'bi-x-lg' (đóng) theo state isMenuOpen.
            */}
            <button 
              className="mobile-nav-toggle d-lg-none" 
              aria-label="Toggle menu"
              id="mobileMenuToggle"
              onClick={toggleMenu}
            >
              <i className={`bi ${isMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
            </button>
            
            {/* Menu chính (thường hiển thị inline trên desktop) */}
            <nav className="main-nav">
              <a className="active" href="/e-bank">Ngân hàng số</a>
              <a href="/">Cá nhân</a>
              <a href="/">Doanh nghiệp</a>
              <a href="/premium">Ngân hàng Ưu tiên</a>
            </nav>
          </div>
          
          <div className="nav-right">
            {/* Vạch ngăn giữa nhóm trái và phải (trang trí) */}
            <span className="nav-split"></span>
            {/* CTA đăng nhập ACB ONE */}
            <a href="#" className="btn-acbone">
              Đăng nhập&nbsp;<strong>ACB<span className="opacity-75">ONE</span></strong>
              <i className="bi bi-chevron-right ms-2"></i>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
