import { useEffect, useState, useCallback, useRef } from 'react';
import '../styles/Header.css';

/**
 * Component Header - Thành phần đầu trang chính của ứng dụng
 * 
 * Chức năng chính:
 * - Hiển thị topbar, navbar và menu mobile
 * - Quản lý trạng thái đóng/mở của menu mobile
 * - Xử lý responsive: tự động đóng menu khi chuyển sang desktop
 * - Xử lý UX: đóng menu khi click ra ngoài vùng menu
 * 
 * Hooks được sử dụng:
 * - useState: Quản lý trạng thái menu mobile
 * - useRef: Lưu tham chiếu đến các phần tử DOM để tối ưu performance
 * - useCallback: Tối ưu các hàm xử lý sự kiện, tránh tạo mới không cần thiết
 * - useEffect: Quản lý event listeners và cleanup
 */
const Header = () => {
  /**
   * State quản lý trạng thái menu mobile
   * @type {[boolean, function]} useState hook
   * - true: menu đang mở
   * - false: menu đang đóng
   * - setIsMenuOpen: hàm để cập nhật trạng thái
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  /**
   * Refs lưu tham chiếu đến các phần tử DOM
   * - Sử dụng useRef thay vì getElementById để tối ưu performance
   * - Giá trị của ref được giữ nguyên qua các lần render
   * - Thay đổi ref.current không gây ra re-render
   */
  const mobileMenuRef = useRef(null);      // Tham chiếu đến phần tử menu mobile
  const mobileMenuToggleRef = useRef(null); // Tham chiếu đến nút toggle menu

  /**
   * Xử lý sự kiện thay đổi kích thước màn hình
   * - Được bọc trong useCallback để tránh tạo hàm mới mỗi lần render
   * - Chỉ tạo lại khi isMenuOpen thay đổi
   * 
   * Logic:
   * - Kiểm tra nếu màn hình >= 992px (desktop) và menu đang mở
   * - Tự động đóng menu để tránh xung đột với menu desktop
   */
  const handleResize = useCallback(() => {
    if (window.innerWidth >= 992 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  /**
   * Xử lý sự kiện click ra ngoài menu mobile
   * @param {Event} event - DOM event object
   * 
   * Logic kiểm tra:
   * 1. Menu đang mở (isMenuOpen === true)
   * 2. Đã có tham chiếu đến cả menu và nút toggle
   * 3. Click không nằm trong vùng của menu hoặc nút toggle
   * 
   * Nếu thỏa mãn tất cả => đóng menu
   */
  const handleClickOutside = useCallback((event) => {
    const mobileMenu = mobileMenuRef.current;
    const mobileMenuToggle = mobileMenuToggleRef.current;
    
    const shouldCloseMenu = isMenuOpen && 
      mobileMenu && 
      mobileMenuToggle && 
      !mobileMenu.contains(event.target) && 
      !mobileMenuToggle.contains(event.target);

    if (shouldCloseMenu) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  /**
   * Effect Hook để quản lý event listeners
   * 
   * Chức năng:
   * 1. Thiết lập các event listeners khi component mount:
   *    - 'click' trên document: để phát hiện click ngoài menu
   *    - 'resize' trên window: để phát hiện thay đổi kích thước màn hình
   * 
   * 2. Cleanup khi component unmount:
   *    - Gỡ bỏ tất cả event listeners để tránh memory leak
   * 
   * Dependencies: [handleClickOutside, handleResize]
   * - Effect chỉ chạy lại khi một trong hai handler thay đổi
   * - Handlers được bọc trong useCallback nên chỉ thay đổi khi isMenuOpen thay đổi
   */
  useEffect(() => {
    // Thiết lập event listeners
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleClickOutside, handleResize]);

  /**
   * Hàm xử lý việc đóng/mở menu mobile
   * @param {Event} e - DOM event object từ sự kiện click
   * 
   * Chức năng:
   * 1. Ngăn chặn event bubbling:
   *    - Sử dụng e.stopPropagation() để ngăn sự kiện click lan lên document
   *    - Nếu không có bước này, handleClickOutside sẽ được gọi ngay lập tức
   *    - Điều này sẽ khiến menu bị đóng ngay khi vừa mở
   * 
   * 2. Toggle trạng thái menu:
   *    - Đảo ngược giá trị hiện tại của isMenuOpen
   *    - true -> false (đóng menu) hoặc false -> true (mở menu)
   */
  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // sticky-top: dính trên đầu khi scroll; bg-white: nền trắng
    <header className="acb-header bg-white">
      {/* 
        Khối menu mobile overlay (hiện/ẩn bằng class 'active' theo state isMenuOpen).
        id="mobileMenu" để handler ngoài useEffect có thể tham chiếu.
      */}
      {/* 
        Mobile Menu Container
        - className động dựa trên trạng thái isMenuOpen
        - Thêm class 'active' khi menu đang mở
        - ref={mobileMenuRef} để có thể truy cập DOM element này trong handleClickOutside
      */}
      <div 
        className={`mobile-menu ${isMenuOpen ? 'active' : ''}`} 
        ref={mobileMenuRef}
      >
        {/* 
          Navigation Links Container
          - Chứa tất cả các liên kết điều hướng cho mobile
          - Được style qua mobile-menu-links class trong CSS
        */}
        <nav className="mobile-menu-links">
          {/* Nhóm liên kết chính */}
          <a href="/e-bank">Ngân hàng số</a>
          <a href="/">Cá nhân</a>
          <a href="/">Doanh nghiệp</a>
          <a href="/premium">Ngân hàng Ưu tiên</a>
          
          <hr /> {/* Phân cách giữa các nhóm liên kết */}
          
          {/* Nhóm liên kết phụ */}
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
