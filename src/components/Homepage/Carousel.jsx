import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../styles/Homepage/Carousel.css';

// Constants
const CAROUSEL_ID = 'heroCarousel';
const INTERVAL = 5000;

// Slide data
const SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop',
    title: 'ACB Rewards – sẵn quà đổi ngay',
    description: 'Tích điểm khi chi tiêu, đổi ưu đãi dễ dàng trên ứng dụng.',
    buttonText: 'Tìm hiểu thêm',
    buttonLink: '#'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1920&auto=format&fit=crop'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop'
  }
];

// Carousel Indicator Component
const CarouselIndicator = ({ slideIndex, isActive }) => (
  <button
    type="button"
    data-bs-target={`#${CAROUSEL_ID}`}
    data-bs-slide-to={slideIndex}
    className={isActive ? 'active' : ''}
    aria-current={isActive ? 'true' : undefined}
    aria-label={`Slide ${slideIndex + 1}`}
  />
);

CarouselIndicator.propTypes = {
  slideIndex: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired
};

// Carousel Control Component
const CarouselControl = ({ direction }) => (
  <button
    className={`carousel-control-${direction}`}
    type="button"
    data-bs-target={`#${CAROUSEL_ID}`}
    data-bs-slide={direction}
  >
    <span className={`carousel-control-${direction}-icon`} aria-hidden="true" />
    <span className="visually-hidden">{direction === 'prev' ? 'Previous' : 'Next'}</span>
  </button>
);

CarouselControl.propTypes = {
  direction: PropTypes.oneOf(['prev', 'next']).isRequired
};

// Carousel Slide Component
const CarouselSlide = ({ slide, isActive }) => (
  <div
    className={`carousel-item ${isActive ? 'active' : ''} hero-60 bg-cover`}
    style={{ backgroundImage: `url('${slide.image}')` }}
  >
    <div className="hero-overlay" />
    {slide.title && (
      <div className="container-fluid h-100 d-flex align-items-center px-5">
        <div className="col-12 col-lg-6 text-white">
          <h1 className="display-5 fw-bold mb-2 text-white">{slide.title}</h1>
          {slide.description && <p className="mb-3 text-white">{slide.description}</p>}
          {slide.buttonText && (
            <a href={slide.buttonLink} className="btn btn-light rounded-pill px-4">
              {slide.buttonText}
            </a>
          )}
        </div>
      </div>
    )}
  </div>
);

CarouselSlide.propTypes = {
  slide: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string
  }).isRequired,
  isActive: PropTypes.bool.isRequired
};

export default function HeroCarousel() {
  return (
    <section className="position-relative w-100">
      <div
        id={CAROUSEL_ID}
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval={INTERVAL}
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators mb-3">
          {SLIDES.map((slide, index) => (
            <CarouselIndicator
              key={slide.id}
              slideIndex={index}
              isActive={index === 0}
            />
          ))}
        </div>

        {/* Carousel Slides */}
        <div className="carousel-inner">
          {SLIDES.map((slide, index) => (
            <CarouselSlide
              key={slide.id}
              slide={slide}
              isActive={index === 0}
            />
          ))}
        </div>

        {/* Carousel Controls */}
        <CarouselControl direction="prev" />
        <CarouselControl direction="next" />
      </div>
    </section>
  );
}
