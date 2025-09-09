// Lưu ý: Đoạn JSX này giữ nguyên cấu trúc & class Bootstrap như bản HTML.
// Để hoạt động đúng, trang của bạn cần nạp Bootstrap CSS/JS và Bootstrap Icons toàn cục (CDN hoặc bundle).

import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import '../src/styles/Subpage/Investors.css' // CSS tuỳ chỉnh cho trang Nhà đầu tư

function Investors() {
  return (
    <>
    <Header />
    <main>
      {/* Breadcrumb */}
      <div className="bg-body-tertiary py-2">
        {/* bg-body-tertiary: nền trung tính dựa trên biến theme; py-2: padding trục dọc .5rem */}
        <div className="container"> {/* container: căn giữa + max-width theo breakpoint */}
          <nav aria-label="breadcrumb"> {/* breadcrumb cần danh sách .breadcrumb */}
            <ol className="breadcrumb mb-0 small"> {/* breadcrumb: style đường dẫn; mb-0: bỏ margin dưới; small: giảm font-size */}
              <li className="breadcrumb-item"><a href="#">Trang chủ</a></li> {/* .breadcrumb-item: phần tử cấp 1 */}
              <li className="breadcrumb-item active" aria-current="page">Nhà Đầu tư</li> {/* active: đánh dấu mục hiện tại, text mờ hơn, không phải link */}
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="hero-section"> {/* TUỲ CHỈNH: khối hero riêng của trang IR */}
        <div className="container">
          <div className="hero-card row g-0 align-items-center shadow-sm"> {/* row: kích hoạt lưới; g-0: bỏ gutter; align-items-center: căn giữa theo trục dọc; shadow-sm: bóng nhẹ; hero-card: TUỲ CHỈNH */}
            <div className="col-lg-7"> {/* cột trái chiếm 7/12 từ ≥992px; dưới lg tự full width */}
              <div className="hero-img"></div> {/* TUỲ CHỈNH: vùng hình nền/ảnh minh hoạ */}
            </div>
            <div className="col-lg-5"> {/* cột phải 5/12 từ ≥992px */}
              <div className="hero-content"> {/* TUỲ CHỈNH: nội dung hero */}
                <span className="badge bg-light text-dark mb-3">Quan hệ Nhà đầu tư</span> {/* badge: huy hiệu nhỏ; bg-light + text-dark: nền sáng, chữ tối; mb-3: 1rem */}
                <h1 className="display-5 fw-bold mb-3">Khung Tài chính bền vững</h1> {/* display-5: heading cỡ lớn; fw-bold: đậm; mb-3: cách dưới */}
                <p className="lead text-secondary mb-4">ACB đã ban hành Khung Tài chính bền vững nhằm thiết lập các tiêu chuẩn cơ bản để ACB phát hành trái phiếu/khoản vay bền vững, đồng thời giúp thúc đẩy hoạt động kinh doanh của ngân hàng thông qua cho vay có trách nhiệm và tài chính bền vững. Tải ngay bằng cách bấm vào nút "Đọc thêm" bên dưới.</p> {/* lead: đoạn nhấn mạnh (font to & màu nhạt hơn); text-secondary: màu phụ; mb-4: 1.5rem */}
                <a className="btn-hero" href="#"> {/* TUỲ CHỈNH: nút phong cách riêng; nếu muốn dùng BS: .btn .btn-primary */}
                  <span>Đọc thêm</span>
                  <span className="circle"><i className="bi bi-chevron-right"></i></span> {/* .bi: icon font; .bi-chevron-right: tên icon */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Periodic Reports */}
      <section className="py-5"> {/* py-5: padding dọc 3rem tạo nhịp phân đoạn */}
        <div className="container">
          <div className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-4"> {/* d-flex: bật flex; align-items-end: căn đáy theo trục dọc; justify-content-between: 2 đầu; flex-wrap: cho phép xuống dòng; gap-3: khoảng cách giữa items 1rem; mb-4: 1.5rem */}
            <div>
              <h2 className="section-title mb-1">Báo cáo định kỳ</h2> {/* section-title: TUỲ CHỈNH; mb-1: 0.25rem */}
              <p className="text-secondary mb-0">Tổng hợp các báo cáo Quản trị, Tài chính, Thường niên, Phát triển bền vững…</p> {/* text-secondary: màu phụ; mb-0: bỏ khoảng dưới */}
            </div>
            <a href="#" className="btn btn-outline-primary">Tất cả báo cáo</a> {/* btn: nút; btn-outline-primary: viền + chữ màu primary, nền trong */}
          </div>

          <div id="reportsCarousel" className="carousel slide" data-bs-ride="false"> {/* carousel slide: kích hoạt component Carousel; data-bs-ride="false": không tự chạy */}
            {/* dots */}
            <div className="carousel-indicators position-static my-3"> {/* carousel-indicators: chấm điều hướng; position-static: đứng yên (mặc định indicators là absolute); my-3: margin trục dọc 1rem */}
              <button type="button" data-bs-target="#reportsCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button> {/* data-bs-slide-to: chỉ số slide; active: đang chọn */}
              <button type="button" data-bs-target="#reportsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>

            <div className="carousel-inner"> {/* vùng chứa các .carousel-item; 1 item sẽ có .active */}
              {/* Slide 1 */}
              <div className="carousel-item active"> {/* active: slide hiển thị ban đầu */}
                <div className="row g-4 row-cols-1 row-cols-lg-3"> {/* row-cols-1: tự chia 1 cột/row dưới lg; row-cols-lg-3: 3 cột/row từ ≥992px; g-4: gutter 1.5rem */}
                  <div className="col"> {/* col: cột tự mở rộng đều trong cơ chế row-cols */}
                    <div className="report-tile h-100"> {/* report-tile: TUỲ CHỈNH; h-100: cao 100% để các thẻ bằng chiều cao */}
                      <img className="cover" src="./img/anh2k.jpg" alt="Khung Tài chính bền vững" /> {/* cover: TUỲ CHỈNH (thường object-fit:cover) */}
                      <div className="meta"> {/* TUỲ CHỈNH: vùng mô tả */}
                        <div className="title">Khung Tài chính bền vững</div>
                        <a className="cta link-primary" href="#">Xem chi tiết <i className="bi bi-chevron-right"></i></a> {/* link-primary: màu link theo --bs-primary */}
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="report-tile h-100">
                      <img className="cover" src="./img/anh2k.jpg" alt="Báo cáo phát triển bền vững" />
                      <div className="meta">
                        <div className="title">Báo cáo phát triển bền vững</div>
                        <a className="cta link-primary" href="#">Xem chi tiết <i className="bi bi-chevron-right"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="report-tile h-100">
                      <img className="cover" src="./img/anh2k.jpg" alt="Báo cáo quản trị" />
                      <div className="meta">
                        <div className="title">Báo cáo quản trị</div>
                        <a className="cta link-primary" href="#">Xem chi tiết <i className="bi bi-chevron-right"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 2 */}
              <div className="carousel-item"> {/* item thứ 2, không active */}
                <div className="row g-4 row-cols-1 row-cols-lg-3"> {/* bố cục tương tự slide 1 */}
                  <div className="col">
                    <div className="report-tile h-100">
                      <img className="cover" src="./img/anh2k.jpg" alt="Báo cáo thường niên" />
                      <div className="meta">
                        <div className="title">Báo cáo thường niên</div>
                        <a className="cta link-primary" href="#">Xem chi tiết <i className="bi bi-chevron-right"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="report-tile h-100">
                      <img className="cover" src="./img/anh2k.jpg" alt="Báo cáo tài chính" />
                      <div className="meta">
                        <div className="title">Báo cáo tài chính</div>
                        <a className="cta link-primary" href="#">Xem chi tiết <i className="bi bi-chevron-right"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="report-tile h-100">
                      <img className="cover" src="./img/anh2k.jpg" alt="Tài liệu khác" />
                      <div className="meta">
                        <div className="title">Tài liệu khác</div>
                        <a className="cta link-primary" href="#">Xem chi tiết <i className="bi bi-chevron-right"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#reportsCarousel" data-bs-slide="prev"> {/* nút lùi slide; data-bs-slide="prev" kích hoạt JS */}
              <span className="carousel-control-prev-icon" aria-hidden="true"></span> {/* icon mũi tên (background-image) */}
              <span className="visually-hidden">Previous</span> {/* chỉ đọc bởi screen reader, ẩn thị giác */}
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#reportsCarousel" data-bs-slide="next"> {/* nút tiến slide */}
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* AGM Section */}
      <section className="py-5 bg-body-tertiary"> {/* bg-body-tertiary: khối nền sáng để tách nội dung */}
        <div className="container">
          <h2 className="section-title mb-4">Đại hội đồng cổ đông thường niên</h2>
          {/* Khối panel lớn bo tròn, nền sáng */}
          <div className="panel-xl shadow-0"> {/* panel-xl: TUỲ CHỈNH; shadow-0: KHÔNG PHẢI class BS, nếu muốn bỏ bóng dùng .shadow-none */}
            <div className="row g-4 align-items-start"> {/* g-4: 1.5rem; align-items-start: căn đầu theo trục dọc */}
              {/* Cột trái: bộ lọc năm + danh mục dạng pill */}
              <aside className="col-lg-4"> {/* col-lg-4: 4/12 từ ≥992px; semantic <aside> cho vùng phụ trợ */}
                <div className="side-filter"> {/* TUỲ CHỈNH: khối lọc */}
                  <div className="mb-3"> {/* mb-3: 1rem khoảng cách dưới */}
                    <div className="label-caption mb-1">Năm</div> {/* TUỲ CHỈNH: nhãn */}
                    <select id="agmYear" className="form-select"> {/* form-select: style select mặc định BS */}
                      <option defaultValue>2025</option>
                      <option>2024</option>
                      <option>2023</option>
                    </select>
                  </div>
                  <div className="pill-nav mt-3"> {/* TUỲ CHỈNH: điều hướng dạng pill */}
                    <button type="button" className="btn btn-primary active">Thông báo và thư mời</button> {/* btn btn-primary: nút chủ đạo; active: trạng thái đang chọn (style đậm) */}
                    <button type="button" className="btn btn-light disabled">Tài liệu họp</button> {/* disabled: vô hiệu; với <button> là đủ, với <a> cần .disabled + aria-disabled */}
                    <button type="button" className="btn btn-light disabled">Biên bản họp và Nghị quyết</button>
                  </div>
                </div>
              </aside>

              {/* Cột phải: danh sách items bo tròn + nút tải */}
              <div className="col-lg-8"> {/* 8/12 từ ≥992px */}
                <div className="items-wrap"> {/* TUỲ CHỈNH: bao danh sách */}
                  <div className="item-row"> {/* TUỲ CHỈNH: một hàng mục; nên đặt display:flex trong CSS */}
                    <div className="flex-grow-1"> {/* flex-grow-1: phần này chiếm hết không gian còn lại */}
                      <div className="title">1. Thông báo về ngày đăng ký cuối cùng để thực hiện quyền tham dự họp Đại hội đồng cổ đông thường niên năm 2025</div>
                    </div>
                    <a className="btn-download" href="#">Tải xuống <i className="bi bi-download"></i></a> {/* btn-download: TUỲ CHỈNH; icon tải xuống */}
                  </div>
                  <div className="item-row">
                    <div className="flex-grow-1">
                      <div className="title">2. Thông báo về việc tổ chức họp Đại hội đồng cổ đông thường niên năm 2025</div>
                    </div>
                    <a className="btn-download" href="#">Tải xuống <i className="bi bi-download"></i></a>
                  </div>
                  <div className="item-row">
                    <div className="flex-grow-1">
                      <div className="title">2.1. Giấy ủy quyền cá nhân</div>
                    </div>
                    <a className="btn btn-outline-primary btn-download" href="#">Tải xuống <i className="bi bi-download ms-2"></i></a> {/* kết hợp btn-outline-primary với lớp tuỳ chỉnh btn-download; ms-2: cách trái icon 0.5rem */}
                  </div>
                  <div className="item-row">
                    <div className="flex-grow-1">
                      <div className="title">2.2. Giấy ủy quyền tổ chức</div>
                    </div>
                    <a className="btn btn-outline-primary btn-download" href="#">Tải xuống <i className="bi bi-download ms-2"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charters / Prospectus */}
      <section className="py-5"> {/* nền trắng xen kẽ */}
        <div className="container">
          <h2 className="section-title mb-4">Điều lệ, quy chế, bản cáo bạch</h2>
          <div className="panel-xl"> {/* TUỲ CHỈNH: card/panel lớn */}
            <div className="row g-4 align-items-start"> {/* g-4: 1.5rem */}
              {/* Bộ lọc trái */}
              <aside className="col-lg-4">
                <div className="side-filter">
                  <div className="mb-3">
                    <div className="label-caption mb-1">Năm</div>
                    <select id="charterYear" className="form-select"> {/* form-select: input chọn dạng BS */}
                      <option defaultValue>2025</option>
                      <option>2024</option>
                      <option>2023</option>
                    </select>
                  </div>
                  <div className="pill-nav mt-3">
                    <button className="btn btn-primary active" type="button">Điều lệ tổ chức và hoạt động</button>
                    <button className="btn btn-light disabled" type="button">Quy chế quản trị nội bộ</button>
                  </div>
                </div>
              </aside>
              {/* Danh sách phải */}
              <div className="col-lg-8">
                <div className="items-wrap">
                  <div className="item-row">
                    <div className="flex-grow-1"><div className="title">Bản cập nhật 2025</div></div>
                    <a className="btn-download" href="#">Tải xuống <i className="bi bi-download"></i></a>
                  </div>
                  <div className="item-row">
                    <div className="flex-grow-1"><div className="title">Quy chế quản trị nội bộ</div></div>
                    <a className="btn-download" href="#">Tải xuống <i className="bi bi-download"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclosures */}
      <section className="py-5 bg-body-tertiary"> {/* tông nền phụ để tách nhóm nội dung */}
        <div className="container">
          <h2 className="section-title mb-4">Công bố thông tin</h2>
          <div className="panel-xl">
            <div className="row g-4 align-items-start">
              {/* Bộ lọc trái */}
              <aside className="col-lg-4">
                <div className="side-filter">
                  <div className="mb-3">
                    <div className="label-caption mb-1">Năm</div>
                    <select id="disclosureYear" className="form-select">
                      <option defaultValue>2025</option>
                      <option>2024</option>
                      <option>2023</option>
                    </select>
                  </div>
                  <div className="pill-nav mt-3">
                    <button className="btn btn-primary active" type="button">Tất cả</button>
                    <button className="btn btn-light disabled" type="button">Bản trình bày</button>
                    <button className="btn btn-light disabled" type="button">Tài liệu họp</button>
                  </div>
                </div>
              </aside>
              {/* Danh sách phải */}
              <div className="col-lg-8">
                <div className="items-wrap">
                  <div className="item-row">
                    <div className="flex-grow-1">
                      <div className="title">Kết quả hoạt động Quý I/2025 – Bản trình bày & Hỏi đáp</div>
                    </div>
                    <a className="btn-download" href="#">Tải xuống <i className="bi bi-download"></i></a>
                  </div>
                  <div className="item-row">
                    <div className="flex-grow-1">
                      <div className="title">Thông báo mời họp ĐHĐCĐ 2025 – Tài liệu họp</div>
                    </div>
                    <a className="btn-download" href="#">Tải xuống <i className="bi bi-download"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Toolkit / Downloads (panel giống ảnh) */}
      <section className="py-5"> {/* lặp lại nhịp spacing đồng nhất */}
        <div className="container">
          <h2 className="section-title mb-4">Tài liệu nhà đầu tư</h2>
          <div className="panel-xl">
            <div className="row g-4 align-items-start">
              {/* Bộ lọc trái */}
              <aside className="col-lg-4">
                <div className="side-filter">
                  <div className="mb-3">
                    <div className="label-caption mb-1">Năm</div>
                    <select id="charterYear" className="form-select">
                      <option defaultValue>2025</option>
                      <option>2024</option>
                      <option>2023</option>
                    </select>
                  </div>
                  <div className="pill-nav mt-3">
                    <button className="btn btn-primary active" type="button">Điều lệ tổ chức và hoạt động</button>
                  </div>
                </div>
              </aside>
              {/* Danh sách phải */}
              <div className="col-lg-8">
                <div className="items-wrap">
                  <div className="item-row">
                    <div className="flex-grow-1"><div className="title">ACB - Tài liệu NĐT - 1H25</div></div>
                    <a className="btn-download" href="#">Tải xuống <i className="bi bi-download"></i></a>
                  </div>
                  <div className="item-row">
                    <div className="flex-grow-1"><div className="title">ACB - Tài liệu NĐT - 1Q25</div></div>
                    <a className="btn-download" href="#">Tải xuống <i className="bi bi-download"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact (giống ảnh: tiêu đề + nút Chỉ đường) */}
      <section className="py-5 bg-body-tertiary"> {/* bg-body-tertiary: tách khối liên hệ */}
        <div className="container">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3"> {/* căn giữa theo trục dọc + chia 2 đầu + cho phép wrap + khoảng cách */}
            <h2 className="section-title mb-0">Thông tin liên hệ ACB IR</h2> {/* mb-0: sát cạnh dưới */}
            <a className="btn btn-primary btn-pill" href="https://maps.google.com/?q=442+Nguyen+Thi+Minh+Khai,+Quan+3,+TPHCM" target="_blank" rel="noopener"> {/* btn-pill: TUỲ CHỈNH (nếu muốn BS chuẩn dùng .rounded-pill) */}
              Chỉ đường <span className="circle"><i className="bi bi-chevron-right"></i></span>
            </a>
          </div>
          <div className="row g-4">
            <div className="col-lg-7"> {/* 7/12 từ ≥992px; dưới lg sẽ full width và nằm trên */}
              <div className="p-4 bg-white rounded-3 shadow-sm h-100"> {/* p-4: 1.5rem; bg-white: nền trắng; rounded-3: bo góc vừa; shadow-sm; h-100: cao bằng cột đối diện */}
                <ul className="list-group list-group-flush info-list"> {/* list-group: nhóm danh sách kiểu card; list-group-flush: bỏ viền/bo tròn ngoài */}
                  <li className="list-group-item d-flex align-items-start gap-3"> {/* list-group-item: phần tử danh sách chuẩn; d-flex: đặt icon & text cùng hàng; align-items-start: căn đỉnh; gap-3: 1rem */}
                    <i className="bi bi-geo-alt"></i>
                    <div>
                      <div className="fw-semibold">442 Nguyễn Thị Minh Khai, Phường 5, Quận 3, TP.Hồ Chí Minh</div> {/* fw-semibold: ~600 */}
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-start gap-3">
                    <i className="bi bi-envelope"></i>
                    <div>
                      <a href="mailto:ir@acb.com.vn">ir@acb.com.vn</a>
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-start gap-3">
                    <i className="bi bi-globe2"></i>
                    <div>
                      <a href="https://acb.com.vn" target="_blank" rel="noopener">www.acb.com.vn</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5"> {/* 5/12 từ ≥992px */}
              <div className="p-4 bg-white rounded-3 shadow-sm h-100">
                <h6 className="fw-semibold mb-3">Hỗ trợ 24/7</h6>
                <p className="mb-2"><i className="bi bi-telephone me-2"></i>(028) 38 247 247</p> {/* me-2: margin-end .5rem cách icon-số */}
                <p className="mb-0"><i className="bi bi-telephone me-2"></i>1900 54 54 86</p> {/* mb-0: sát dưới */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe (đăng ký nhận thông tin) */}
      <section className="py-5"> {/* form đăng ký */}
        <div className="container">
          <h2 className="section-title mb-4">Đăng ký nhận thông tin từ ACB IR</h2>
          <div className="panel-xl">
            <form>
              <div className="row g-3"> {/* g-3: 1rem khoảng cách giữa các ô input */}
                <div className="col-md-4"> {/* 4/12 từ ≥768px; dưới md full width */}
                  <label className="form-label small text-uppercase text-secondary fw-semibold">Họ và tên *</label> {/* form-label: style nhãn; small: cỡ nhỏ; text-uppercase: in hoa; text-secondary: màu phụ; fw-semibold: đậm 600 */}
                  <input type="text" className="form-control input-soft" placeholder="Nguyễn Văn A" required /> {/* form-control: style input chuẩn; input-soft: TUỲ CHỈNH */}
                </div>
                <div className="col-md-4">
                  <label className="form-label small text-uppercase text-secondary fw-semibold">Email *</label>
                  <input type="email" className="form-control input-soft" placeholder="nguyenvana@gmail.com" required />
                </div>
                <div className="col-md-4">
                  <label className="form-label small text-uppercase text-secondary fw-semibold">Tên doanh nghiệp *</label>
                  <input type="text" className="form-control input-soft" placeholder="Cty TNHH AZX" required />
                </div>
                <div className="col-12 d-flex gap-3 mt-2"> {/* col-12: full width; d-flex: xếp nút & ghi chú cùng hàng; gap-3: 1rem; mt-2: 0.5rem */}
                  <button type="submit" className="btn btn-primary btn-pill">Gửi yêu cầu</button> {/* btn-pill: TUỲ CHỈNH bo viên; dùng .rounded-pill nếu theo BS */}
                  <div className="panel-note small">Bằng cách gửi, bạn đồng ý nhận thông tin từ ACB IR.</div> {/* small: chữ nhỏ */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
export default Investors;