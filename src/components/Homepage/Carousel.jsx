// HeroCarousel.jsx
// Chuyển đổi từ HTML sang JSX (React) + Bootstrap Carousel
// Lưu ý: cần nạp Bootstrap CSS/JS trong app của bạn
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// nạp CSS tùy biến của bạn (đường dẫn điều chỉnh cho phù hợp)
import '../../styles/Carousel.css';
export default function HeroCarousel() {
  return (
    <section className="position-relative w-100">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        {/* ========================================
             CAROUSEL INDICATORS - Dots navigation
             ======================================== */}
        <div className="carousel-indicators mb-3">
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>

        {/* ========================================
             CAROUSEL INNER - Container chứa slides
             ======================================== */}
        <div className="carousel-inner">
          {/* Slide 1: ACB Rewards - Slide chính */}
          <div
            className="carousel-item active hero-60 bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop')",
            }}
          >
            <div className="hero-overlay" />
            <div className="container-fluid h-100 d-flex align-items-center px-5">
              <div className="col-12 col-lg-6 text-white">
                <h1 className="display-5 fw-bold mb-2 text-white">
                  ACB Rewards – sẵn quà đổi ngay
                </h1>
                <p className="mb-3 text-white">
                  Tích điểm khi chi tiêu, đổi ưu đãi dễ dàng trên ứng dụng.
                </p>
                <a href="#" className="btn btn-light rounded-pill px-4">
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
          </div>

          {/* Slide 2: Background image only */}
          <div
            className="carousel-item hero-60 bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1920&auto=format&fit=crop')",
            }}
          >
            <div className="hero-overlay" />
          </div>

          {/* Slide 3: Background image only */}
          <div
            className="carousel-item hero-60 bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop')",
            }}
          >
            <div className="hero-overlay" />
          </div>
        </div>

        {/* ========================================
             CAROUSEL CONTROLS - Nút prev/next
             ======================================== */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
