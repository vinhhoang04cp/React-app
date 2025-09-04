import { useEffect, useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      const mobileMenu = document.getElementById('mobileMenu');
      const mobileMenuToggle = document.getElementById('mobileMenuToggle');
      
      if (isMenuOpen && 
          mobileMenu &&
          mobileMenuToggle &&
          !mobileMenu.contains(event.target) && 
          !mobileMenuToggle.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="acb-header sticky-top bg-white">
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`} id="mobileMenu">
        <nav className="mobile-menu-links">
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

      <div className="acb-topbar border-bottom">
        <div className="wrap topbar-row">
          <nav className="top-links d-none d-lg-flex">
            <a href="/about">Về chúng tôi</a>
            <a href="/investors">Nhà đầu tư</a>
            <a href="#">Tuyển dụng</a>
            <a href="/reward">ACB Rewards</a>
            <a href="/library">Thư viện</a>
            <a href="/security">An toàn</a>
            <a href="/liquidation">Thanh lý tài sản</a>
          </nav>
          
          <div className="top-actions">
            <a href="#"><i className="bi bi-telephone-outbound me-2"></i>Hỗ trợ 24/7</a>
            <a href="#"><i className="bi bi-geo-alt me-2"></i>Liên hệ</a>
            <button className="icon-btn" aria-label="Tìm kiếm">
              <i className="bi bi-search"></i>
            </button>
            <button className="lang-btn" aria-label="Ngôn ngữ">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" alt="VN" />
              <i className="bi bi-caret-down-fill ms-1 small"></i>
            </button>
          </div>
        </div>
      </div>

      <nav className="acb-navbar border-bottom">
        <div className="wrap nav-row">
          <div className="nav-left">
            <a href="/" className="brand">
              <span className="logo-text">ACB</span>
            </a>
            
            <button 
              className="mobile-nav-toggle d-lg-none" 
              aria-label="Toggle menu"
              id="mobileMenuToggle"
              onClick={toggleMenu}
            >
              <i className={`bi ${isMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
            </button>
            
            <nav className="main-nav">
              <a className="active" href="/e-bank">Ngân hàng số</a>
              <a href="/">Cá nhân</a>
              <a href="/">Doanh nghiệp</a>
              <a href="/premium">Ngân hàng Ưu tiên</a>
            </nav>
          </div>
          
          <div className="nav-right">
            <span className="nav-split"></span>
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