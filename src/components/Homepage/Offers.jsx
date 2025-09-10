import React from "react";
import '../../styles/Homepage/Offers.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FeaturedDeals() {
  return (
      <>
      <section className="featured-deals py-5 bg-white">
        <div className="offers-wrap">
          {/* Heading */}
          <h2 className="fw-bold mb-4">Ưu đãi nổi bật</h2>

          {/* Grid 3 cột (lg), 2 cột (md), 1 cột (sm) */}
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <article className="offer-card w-100">
                {/* Ảnh tỉ lệ 4:3, bo góc trên */}
                <div className="thumb">
                  <img
                    src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1000&auto=format&fit=crop"
                    alt="Ưu đãi du lịch hè – giảm đến 30%"
                  />
                </div>
                {/* Nội dung */}
                <div className="body d-flex flex-column">
                  <h3 className="title h5 fw-bold mb-2">
                    Hành trình đúng ý – Tiết kiệm đến 30%
                  </h3>
                  <div className="meta small text-secondary mb-2 d-flex align-items-center flex-wrap">
                    <span>04/07/2025</span>
                    <span className="dot" aria-hidden="true"></span>
                    <span>Chương trình ưu đãi</span>
                  </div>
                  <p className="excerpt text-secondary mb-3">
                    Dễ dàng đặt mọi dịch vụ cần thiết cho chuyến đi của bạn trên ACB ONE, nhận ưu đãi đến 30%.
                  </p>
                  <hr className="divider my-3" />
                  <div className="mt-auto">
                    <a href="#" className="read-more fw-semibold">
                      Xem chi tiết <i className="bi bi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </article>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <article className="offer-card w-100">
                <div className="thumb">
                  <img
                    src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1000&auto=format&fit=crop"
                    alt="Hoàn tiền hoặc tích điểm ACB Rewards"
                  />
                </div>
                <div className="body d-flex flex-column">
                  <h3 className="title h5 fw-bold mb-2">
                    Hoàn tiền hoặc Tích điểm ACB Rewards không giới hạn
                  </h3>
                  <div className="meta small text-secondary mb-2 d-flex align-items-center flex-wrap">
                    <span>15/07/2025</span>
                    <span className="dot" aria-hidden="true"></span>
                    <span>Chương trình ưu đãi tại ACB</span>
                  </div>
                  <p className="excerpt text-secondary mb-3">
                    Chọn ưu đãi theo cách của bạn – dễ dàng ngay trên ứng dụng ACB ONE. Khám phá ngay!
                  </p>
                  <hr className="divider my-3" />
                  <div className="mt-auto">
                    <a href="#" className="read-more fw-semibold">
                      Xem chi tiết <i className="bi bi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </article>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <article className="offer-card w-100">
                <div className="thumb">
                  <img
                    src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1000&auto=format&fit=crop"
                    alt="Danh sách khách hàng may mắn nhận thưởng"
                  />
                </div>
                <div className="body d-flex flex-column">
                  <h3 className="title h5 fw-bold mb-2">
                    Danh sách khách hàng may mắn nhận thưởng từ Livestream “Quản lý cửa hàng – Liệu có dễ dàng?”
                  </h3>
                  <div className="meta small text-secondary mb-2 d-flex align-items-center flex-wrap">
                    <span>27/06/2025</span>
                    <span className="dot" aria-hidden="true"></span>
                    <span>Công bố kết quả</span>
                  </div>
                  <p className="excerpt text-secondary mb-3">
                    Chúc mừng các khách hàng may mắn đã nhận được những combo deal siêu hấp dẫn từ Livestream.
                  </p>
                  <hr className="divider my-3" />
                  <div className="mt-auto">
                    <a href="#" className="read-more fw-semibold">
                      Xem chi tiết <i className="bi bi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Nút Xem thêm */}
          <div className="text-center mt-4">
            <a href="#" className="btn btn-primary rounded-pill px-4">
              Xem thêm <i className="bi bi-chevron-right"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
