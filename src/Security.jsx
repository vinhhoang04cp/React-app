// Requires Bootstrap 5.3+ CSS and Bootstrap Icons CSS to be included globally
// The Bootstrap bundle JS is added via CDN below to preserve carousel functionality
import React from 'react';
import Header from './components/Header';   
import Footer from './components/Footer';
import './styles/Subpage/Security.css';
import Carousel from '../src/components/Homepage/Carousel'


function Security() {
  return (
    <>
    <Header />
    <Carousel />
    <main>
      <div className="container my-5">{/* container: căn giữa + max-width theo breakpoint; my-5: margin-top & bottom = 3rem */}

        {/* Hero Carousel Banner (thay cho hero cũ) */}
        <section className="hero-banner py-5 position-relative overflow-hidden">{/* hero-banner: TUỲ CHỈNH; py-5: padding dọc 3rem; position-relative: làm cha cho phần tử position absolute nếu có; overflow-hidden: ẩn phần tràn */}
          <div className="container py-2">{/* lồng container để nội dung hẹp hơn bề rộng hero; py-2: padding dọc .5rem */}
            <nav aria-label="breadcrumb" className="mb-3">{/* breadcrumb: điều hướng ngữ cảnh; mb-3: margin dưới 1rem */}
              <ol className="breadcrumb">{/* .breadcrumb áp dụng style đặc trưng */}
                <li className="breadcrumb-item"><a className="text-decoration-none" href="#">Trang chủ</a></li>{/* breadcrumb-item: phần tử; text-decoration-none: bỏ gạch chân link */}
                <li className="breadcrumb-item active" aria-current="page">Nguyên tắc giao dịch an toàn</li>{/* active: trạng thái hiện tại */}
              </ol>
            </nav>
            <div id="securityCarousel" className="carousel slide" data-bs-ride="carousel">{/* carousel + slide: kích hoạt hiệu ứng trượt; data-bs-ride="carousel": auto cycle */}
              <div className="carousel-indicators" style={{ bottom: "-2.25rem" }}>{/* indicators: các chấm điều hướng; inline style đẩy xuống dưới */}
                <button type="button" data-bs-target="#securityCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#securityCarousel" data-bs-slide-to={1} aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#securityCarousel" data-bs-slide-to={2} aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">{/* nơi chứa các .carousel-item; phải có một item .active */}
                <div className="carousel-item active">
                  <div
                    className="rounded-5 p-5 p-lg-5 slide-bg"
                    style={{ backgroundImage: "url('https://picsum.photos/seed/phish-bg/1600/900')" }}
                  >
                    <div className="row align-items-center g-4 banner-slide">
                      <div className="col-lg-7 text-white">
                        <h2 className="display-6 fw-bold mb-3">Thông tin cảnh báo về hình thức lừa đảo khi giao dịch trực tuyến</h2>
                        <p className="lead mb-4 opacity-90">Nhận biết kịch bản giả mạo, bảo vệ tài khoản, tránh cung cấp OTP/mật khẩu.</p>
                        <a href="#" className="btn btn-light btn-lg rounded-pill px-4">Xem chi tiết</a>
                      </div>
                      {/* ĐÃ BỎ cột ảnh bên phải */}
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div
                    className="rounded-5 p-5 p-lg-5 slide-bg"
                    style={{ backgroundImage: "url('https://picsum.photos/seed/sms-bg/1600/900')" }}
                  >
                    <div className="row align-items-center g-4 banner-slide">
                      <div className="col-lg-7 text-white">
                        <h2 className="display-6 fw-bold mb-3">Cảnh giác với SMS chứa liên kết lạ</h2>
                        <p className="lead mb-4 opacity-90">Không bấm liên kết và không cài app ngoài kho chính thức.</p>
                        <a href="#" className="btn btn-light btn-lg rounded-pill px-4">Xem chi tiết</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div
                    className="rounded-5 p-5 p-lg-5 slide-bg"
                    style={{ backgroundImage: "url('https://picsum.photos/seed/limit-bg/1600/900')" }}
                  >
                    <div className="row align-items-center g-4 banner-slide">
                      <div className="col-lg-7 text-white">
                        <h2 className="display-6 fw-bold mb-3">Giảm hạn mức online về 0 khi nghi ngờ</h2>
                        <p className="lead mb-4 opacity-90">Đăng nhập online.acb.com.vn để điều chỉnh tạm thời, rồi liên hệ hotline.</p>
                        <a href="#" className="btn btn-light btn-lg rounded-pill px-4">Xem chi tiết</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#securityCarousel" data-bs-slide="prev">{/* nút lùi slide */}
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>{/* icon mũi tên (background-image) */}
                <span className="visually-hidden">Previous</span>{/* dành cho screen reader */}
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#securityCarousel" data-bs-slide="next">{/* nút tiến slide */}
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>

        {/* Cảnh báo bảo mật (Grid) */}
        <section className="alerts-section py-5">{/* alerts-section: TUỲ CHỈNH; py-5: spacing dọc 3rem */}
          <div className="container">
            <h2 className="section-title mb-3">Cảnh báo bảo mật</h2>{/* section-title: TUỲ CHỈNH; mb-3: 1rem */}
            {/* Pills filter */}
            <div className="d-flex flex-wrap gap-2 mb-4">{/* d-flex: xếp ngang; flex-wrap: xuống dòng khi hẹp; gap-2: khoảng cách 0.5rem; mb-4: 1.5rem */}
              <button className="filter-pill active" type="button">{/* filter-pill: TUỲ CHỈNH pill; active: trạng thái chọn */}
                <span>Giao dịch ngân hàng số an toàn</span>
                <span className="filter-count">20</span>
              </button>
              <button className="filter-pill" type="button">
                <span>Giao dịch thẻ an toàn</span>
                <span className="filter-count">2</span>
              </button>
              <button className="filter-pill" type="button">
                <span>Một số Website lừa đảo phổ biến</span>
                <span className="filter-count">2</span>
              </button>
            </div>
            {/* Cards grid 3x2 */}
            <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">{/* row: lưới; g-4: gutter 1.5rem; row-cols-* đặt số cột auto theo breakpoint */}
              <div className="col">{/* col: một ô tự chia theo row-cols */}
                <div className="security-card card h-100">{/* card: khối thẻ Bootstrap; security-card: TUỲ CHỈNH; h-100: cao full để đồng đều */}
                  <div className="img-top"><img src="https://picsum.photos/seed/acb1/900/675" alt="" /></div>{/* img-top: TUỲ CHỈNH để căn ảnh */}
                  <div className="card-body">{/* card-body: vùng nội dung */}
                    <div className="fw-semibold mb-1">Cảnh báo</div>{/* fw-semibold: ~600; mb-1: .25rem */}
                    <div className="text-secondary small mb-3">ACB cảnh báo SMS lừa đảo</div>{/* small: chữ nhỏ; text-secondary: màu phụ */}
                    <a href="#" className="btn btn-primary btn-cta rounded-pill">Xem chi tiết <i className="bi bi-chevron-right"></i></a>{/* btn-cta: TUỲ CHỈNH; rounded-pill: pill */}
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="security-card card h-100">
                  <div className="img-top"><img src="https://picsum.photos/seed/acb2/900/675" alt="" /></div>
                  <div className="card-body">
                    <div className="fw-semibold mb-1">Cảnh báo kịch bản lừa đảo mới lợi dụng việc sáp nhập tỉnh, thành</div>
                    <div className="text-secondary small mb-3">—</div>
                    <a href="#" className="btn btn-primary btn-cta rounded-pill">Xem chi tiết <i className="bi bi-chevron-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="security-card card h-100">
                  <div className="img-top"><img src="https://picsum.photos/seed/acb3/900/675" alt="" /></div>
                  <div className="card-body">
                    <div className="fw-semibold mb-1">Cảnh báo các chiêu thức lừa đảo</div>
                    <div className="text-secondary small mb-3">—</div>
                    <a href="#" className="btn btn-primary btn-cta rounded-pill">Xem chi tiết <i className="bi bi-chevron-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="security-card card h-100">
                  <div className="img-top"><img src="https://picsum.photos/seed/acb4/900/675" alt="" /></div>
                  <div className="card-body">
                    <div className="fw-semibold mb-1">Cảnh báo Thủ đoạn lừa đảo phổ biến</div>
                    <div className="text-secondary small mb-3">—</div>
                    <a href="#" className="btn btn-primary btn-cta rounded-pill">Xem chi tiết <i className="bi bi-chevron-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="security-card card h-100">
                  <div className="img-top"><img src="https://picsum.photos/seed/acb5/900/675" alt="" /></div>
                  <div className="card-body">
                    <div className="fw-semibold mb-1">Cảnh báo mạo danh nhân viên Ngân hàng và cán bộ cơ quan Nhà nước</div>
                    <div className="text-secondary small mb-3">—</div>
                    <a href="#" className="btn btn-primary btn-cta rounded-pill">Xem chi tiết <i className="bi bi-chevron-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="security-card card h-100">
                  <div className="img-top"><img src="https://picsum.photos/seed/acb6/900/675" alt="" /></div>
                  <div className="card-body">
                    <div className="fw-semibold mb-1">Cảnh báo một số website giả mạo, lừa đảo phổ biến 2025</div>
                    <div className="text-secondary small mb-3">—</div>
                    <a href="#" className="btn btn-primary btn-cta rounded-pill">Xem chi tiết <i className="bi bi-chevron-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Pagination */}
            <nav className="mt-4" aria-label="Security alerts pagination">{/* aria-label: mô tả cho SR; mt-4: 1.5rem */}
              <ul className="pagination justify-content-center gap-2">{/* pagination: component điều hướng; justify-content-center: căn giữa; gap-2: khoảng giữa các nút */}
                <li className="page-item"><a className="page-link rounded-pill" href="#" aria-label="Previous">&lsaquo;</a></li>{/* page-item + page-link: cặp tiêu chuẩn; rounded-pill: bo tròn */}
                <li className="page-item"><a className="page-link rounded-pill" href="#">1</a></li>
                <li className="page-item active"><a className="page-link rounded-pill" href="#">2</a></li>{/* .active trên .page-item để đánh dấu trang hiện tại */}
                <li className="page-item"><a className="page-link rounded-pill" href="#">3</a></li>
                <li className="page-item"><a className="page-link rounded-pill" href="#">4</a></li>
                <li className="page-item"><a className="page-link rounded-pill" href="#" aria-label="Next">&rsaquo;</a></li>
              </ul>
            </nav>
          </div>
        </section>

        <section id="principles" className="principles-section py-5">{/* py-5: 3rem; principles-section: TUỲ CHỈNH */}
          <div className="container">
            <h2 className="section-title mb-3">Nguyên tắc an toàn chung</h2>
            <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 principles-grid">{/* row-cols-* đặt số cột theo breakpoint; principles-grid: TUỲ CHỈNH */}
              {/* 1 */}
              <div className="col">
                <div className="card-principle">{/* TUỲ CHỈNH: thẻ nội dung đơn giản */}
                  <div className="icon-lg"><i className="bi bi-bug fs-1"></i></div>{/* icon-lg: TUỲ CHỈNH kích thước icon */}
                  <p className="mb-0"><span className="fw-semibold">Không tải tệp tin, cài đặt ứng dụng</span> <span className="desc">không rõ nguồn gốc và không truy cập đường dẫn lạ từ tin nhắn, email, mạng xã hội, cuộc gọi mạo danh.</span></p>{/* mb-0: bỏ margin dưới */}
                </div>
              </div>
              {/* 2 */}
              <div className="col">
                <div className="card-principle">
                  <div className="icon-lg"><i className="bi bi-key fs-1"></i></div>
                  <p className="mb-0"><span className="fw-semibold">Không cung cấp</span> <span className="desc">OTP – Password – Username vào các ứng dụng, website lạ.</span></p>
                </div>
              </div>
              {/* 3 */}
              <div className="col">
                <div className="card-principle">
                  <div className="icon-lg"><i className="bi bi-shield-lock fs-1"></i></div>
                  <p className="mb-0"><span className="fw-semibold">Đăng ký xác thực khuôn mặt</span> <span className="desc">để tăng cường bảo vệ khi giao dịch trực tuyến theo </span><a href="#" className="link-primary fw-semibold">Quyết định số 2345/QĐ-NHNN</a><span className="desc"> và </span><a href="#" className="link-primary fw-semibold">Thông tư 17, 18/2024/TT-NHNN của Ngân hàng Nhà nước</a><span className="desc">.</span></p>{/* link-primary: màu link theo theme; fw-semibold: nhấn mạnh */}
                </div>
              </div>
              {/* 4 */}
              <div className="col">
                <div className="card-principle">
                  <div className="icon-lg"><i className="bi bi-person-lock fs-1"></i></div>
                  <p className="mb-0"><span className="fw-semibold">Chủ động</span> <span className="desc">nhập sai mật khẩu 5 lần khi bị mất thông tin bảo mật.</span></p>
                </div>
              </div>
              {/* 5 */}
              <div className="col">
                <div className="card-principle">
                  <div className="icon-lg"><i className="bi bi-phone fs-1"></i></div>
                  <p className="mb-0"><span className="fw-semibold">Chỉ cài đặt</span> <span className="desc">ứng dụng ACB ONE / ACB ONE BIZ trên </span><span className="fw-semibold">Google Play</span><span className="desc"> hoặc </span><span className="fw-semibold">App Store</span><span className="desc">.</span></p>
                </div>
              </div>
              {/* 6 */}
              <div className="col">
                <div className="card-principle text-start text-lg-start text-md-start text-center">{/* text-center: căn giữa mặc định mobile; text-md-start & text-lg-start: từ md trở lên căn trái (không cần cả md và lg, 1 cái lớn nhất cũng đủ) */}
                  <div className="icon-lg text-center"><i className="bi bi-window fs-1"></i></div>{/* text-center: căn giữa icon */}
                  <p className="mb-2 text-center"><span className="fw-semibold">Website chính thức:</span></p>{/* mb-2: .5rem */}
                  <ul className="list-unstyled small m-0 text-center">{/* list-unstyled: bỏ bullet & padding; small: cỡ chữ nhỏ; m-0: bỏ margin */}
                    <li><a className="link-primary" href="https://online.acb.com.vn">https://online.acb.com.vn</a></li>
                    <li><a className="link-primary" href="https://business.acb.com.vn">https://business.acb.com.vn</a></li>
                    <li><a className="link-primary" href="https://qrportal.acb.com.vn">https://qrportal.acb.com.vn</a></li>
                    <li><a className="link-primary" href="https://developer.acb.com.vn">https://developer.acb.com.vn</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* bundle: gồm Popper + JS components (Carousel, Collapse, Dropdown…) */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

        {/* Hành động ngay khi có dấu hiệu bất thường (grid 3x2) */}
        {/* Tài liệu Quý khách cần tham khảo */}
        <section className="docs-section py-5">{/* docs-section: TUỲ CHỈNH; py-5: 3rem */}
          <div className="container">
            <h2 className="section-title mb-4">Tài liệu Quý khách cần tham khảo</h2>

            <div className="doc-item py-3">{/* doc-item: TUỲ CHỈNH; py-3: padding dọc 1rem */}
              <div className="d-flex align-items-center justify-content-between">{/* d-flex: xếp ngang; align-items-center: căn giữa dọc; justify-content-between: đẩy 2 đầu */}
                <div className="d-flex align-items-center gap-3">{/* nhóm icon + tiêu đề */}
                  <div className="doc-icon"><i className="bi bi-file-earmark"></i></div>
                  <div className="doc-title">Chính sách bảo mật thông tin cá nhân</div>
                </div>
                <a href="#" className="btn btn-outline-primary rounded-pill btn-doc d-inline-flex align-items-center gap-2">Tải xuống <i className="bi bi-download"></i></a>{/* btn-outline-primary: viền xanh; rounded-pill: bo tròn; d-inline-flex + align-items-center + gap-2: căn giữa icon & chữ, khoảng cách 0.5rem */}
              </div>
            </div>

            <div className="doc-item py-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="doc-icon"><i className="bi bi-file-earmark"></i></div>
                  <div className="doc-title">Hướng dẫn mở khóa thẻ trên ứng dụng ACB ONE</div>
                </div>
                <a href="#" className="btn btn-outline-primary rounded-pill btn-doc d-inline-flex align-items-center gap-2">Tải xuống <i className="bi bi-download"></i></a>
              </div>
            </div>

            <div className="doc-item py-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="doc-icon"><i className="bi bi-file-earmark"></i></div>
                  <div className="doc-title">Hướng dẫn khóa thẻ trên ứng dụng ACB ONE</div>
                </div>
                <a href="#" className="btn btn-outline-primary rounded-pill btn-doc d-inline-flex align-items-center gap-2">Tải xuống <i className="bi bi-download"></i></a>
              </div>
            </div>

            <div className="doc-item py-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="doc-icon"><i className="bi bi-file-earmark"></i></div>
                  <div className="doc-title">Hướng dẫn cách lấy lại mật khẩu đăng nhập trên ACB ONE BIZ phiên bản web</div>
                </div>
                <a href="#" className="btn btn-outline-primary rounded-pill btn-doc d-inline-flex align-items-center gap-2">Tải xuống <i className="bi bi-download"></i></a>
              </div>
            </div>

            <div className="doc-item py-3 last">{/* last: TUỲ CHỈNH (ví dụ bỏ border-bottom) */}
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="doc-icon"><i className="bi bi-file-earmark"></i></div>
                  <div className="doc-title">Hướng dẫn cách thay đổi thông tin cá nhân trên ứng dụng ACB ONE</div>
                </div>
                <a href="#" className="btn btn-outline-primary rounded-pill btn-doc d-inline-flex align-items-center gap-2">Tải xuống <i className="bi bi-download"></i></a>
              </div>
            </div>
          </div>
        </section>

        <section id="actions" className="actions-section py-5 bg-white">{/* actions-section: TUỲ CHỈNH; py-5: 3rem; bg-white: nền trắng */}
          <div className="container">
            <h2 className="section-title text-center mb-4">Hành động ngay khi có dấu hiệu bất thường</h2>{/* text-center: căn giữa tiêu đề */}
            <div className="row g-5 row-cols-1 row-cols-md-3">{/* g-5: gutter 3rem; 1 cột dưới md, 3 cột từ ≥768px */}
              <div className="col">
                <div className="action-card text-center">{/* action-card: TUỲ CHỈNH; text-center: căn giữa nội dung */}
                  <div className="action-illus mx-auto mb-3"><img src="https://picsum.photos/seed/act1/450/800" alt="Tắt nguồn/Ngắt kết nối" /></div>{/* mx-auto: căn giữa minh hoạ */}
                  <p className="small text-secondary m-0">Trong trường hợp nghi ngờ hay phát hiện điện thoại bị kiểm soát từ xa, ngay lập tức: <span className="fw-semibold">tắt nguồn điện thoại hoặc ngắt ngay tất cả các kết nối với wifi/4G</span>.</p>{/* small: cỡ nhỏ; text-secondary: màu phụ; m-0: bỏ margin */}
                </div>
              </div>
              <div className="col">
                <div className="action-card text-center">
                  <div className="action-illus mx-auto mb-3"><img src="https://picsum.photos/seed/act2/450/800" alt="Khóa đăng nhập tạm thời" /></div>
                  <p className="small text-secondary m-0"><span className="fw-semibold">Nhập sai mật khẩu liên tiếp 05 lần</span> để khóa quyền đăng nhập dịch vụ Ngân hàng số của các ứng dụng, website ACB online.</p>
                </div>
              </div>
              <div className="col">
                <div className="action-card text-center">
                  <div className="action-illus mx-auto mb-3"><img src="https://picsum.photos/seed/act3/450/800" alt="Giảm hạn mức về 0" /></div>
                  <p className="small text-secondary m-0"><span className="fw-semibold">Đăng nhập website</span> <a className="link-primary" href="https://online.acb.com.vn">https://online.acb.com.vn</a> để điều chỉnh hạn mức giao dịch online về 0.</p>
                </div>
              </div>
              <div className="col">
                <div className="action-card text-center">
                  <div className="action-illus mx-auto mb-3"><img src="https://picsum.photos/seed/act4/450/800" alt="Liên hệ ngân hàng" /></div>
                  <p className="small text-secondary m-0"><span className="fw-semibold">Liên hệ ngay Ngân hàng</span> <a className="link-primary" href="tel:+842838247247">(028) 38 247 247</a> hoặc <a className="link-primary" href="tel:1900545486">1900 54 54 86</a> để tạm khóa các dịch vụ khi phát hiện dấu hiệu nghi ngờ bị lừa đảo/lộ lọt thông tin bảo mật; hoặc đến CN/PGD gần nhất để được hỗ trợ.</p>
                </div>
              </div>
              <div className="col">
                <div className="action-card text-center">
                  <div className="action-illus mx-auto mb-3"><img src="https://picsum.photos/seed/act5/450/800" alt="Khôi phục cài đặt gốc" /></div>
                  <p className="small text-secondary m-0"><span className="fw-semibold">Khôi phục cài đặt gốc (Factory Reset)</span> đối với thiết bị trong trường hợp phát hiện/ nghi ngờ cài đặt ứng dụng giả mạo.</p>
                </div>
              </div>
              <div className="col">
                <div className="action-card text-center">
                  <div className="action-illus mx-auto mb-3"><img src="https://picsum.photos/seed/act6/450/800" alt="Trình báo cơ quan chức năng" /></div>
                  <p className="small text-secondary m-0">Nếu có dấu hiệu tội phạm, <span className="fw-semibold">trình báo với Cơ quan Công an</span> nơi gần nhất.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <Footer />
    </>
  );
}
export default Security;