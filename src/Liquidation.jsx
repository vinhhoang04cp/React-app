import React from "react";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import '../src/styles/Subpage/Liquidation.css';

function Liquidation() {
  return (
    <>
    <Header />
    <main>
      <section className="assets-section container">
        {/* container: căn giữa + max-width; assets-section: LỚP TUỲ CHỈNH (không thuộc Bootstrap) */}

        {/* Breadcrumb nhỏ như ảnh */}
        <div className="breadcrumb-mini mb-3">
          Trang chủ / <span className="fw-medium">Thanh lý tài sản</span>
        </div>
        {/* mb-3: margin-bottom 1rem; breadcrumb-mini & fw-medium: LƯU Ý đều LÀ TUỲ CHỈNH;
            Bootstrap KHÔNG có .fw-medium, nếu muốn gần tương đương dùng .fw-semibold */}

        <div className="row g-4 align-items-stretch">
          {/* row: lưới flex; g-4: gutter 1.5rem cả 2 chiều; align-items-stretch: các cột kéo cao bằng nhau */}

          {/* Bất động sản */}
          <div className="col-12 col-lg-6">
            {/* 100% chiều ngang dưới lg; từ ≥992px thì 6/12 (nửa trang) */}
            <article className="asset-card">
              {/* asset-card: THẺ TUỲ CHỈNH (không phải .card của Bootstrap) */}
              <img className="bg" alt="Bất động sản" src="./img/anh2k.jpg" />
              {/* .bg: TUỲ CHỈNH để đặt ảnh nền/phủ */}
              <div className="asset-content">
                {/* vùng nội dung overlay TUỲ CHỈNH */}
                <h2 className="asset-title h3 text-primary mb-4">Bất động sản</h2>
                {/* h3 (utility): hiển thị cỡ như <h3> nhưng vẫn là <h2>; text-primary: màu chữ chủ đề; mb-4: 1.5rem; asset-title: TUỲ CHỈNH */}
                <a
                  href="#"
                  className="btn btn-primary btn-lg rounded-pill d-inline-flex align-items-center gap-2 shadow-sm"
                >
                  {/* btn: nút; btn-primary: biến thể màu chính; btn-lg: cỡ lớn; rounded-pill: bo tròn cực đại;
                      d-inline-flex: hiển thị inline + flex để canh icon; align-items-center: căn giữa theo dọc;
                      gap-2: khoảng cách 0.5rem giữa chữ & icon; shadow-sm: bóng nhẹ */}
                  Xem chi tiết
                  <i className="bi bi-arrow-right-short fs-4"></i>
                  {/* .bi .bi-arrow-right-short: icon; fs-4: cỡ chữ ~1.5rem cho icon */}
                </a>
              </div>
            </article>
          </div>

          {/* Động sản */}
          <div className="col-12 col-lg-6">
            <article className="asset-card grid-lines">
              {/* grid-lines: TUỲ CHỈNH (ví dụ vẽ các đường kẻ nền) */}
              <img className="bg" alt="Động sản" src="./img/anh2k.jpg" />
              <div className="asset-content">
                <h2 className="asset-title h3 text-primary mb-4">Động sản</h2>
                <a
                  href="#"
                  className="btn btn-primary btn-lg rounded-pill d-inline-flex align-items-center gap-2 shadow-sm"
                >
                  Xem chi tiết
                  <i className="bi bi-arrow-right-short fs-4"></i>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
export default Liquidation;