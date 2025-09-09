import React from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import '../src/styles/Subpage/Reward.css' // CSS tuỳ chỉnh cho trang ACB Rewards
// JSX component converted from the provided HTML without changing layout or behavior.
// Requires: Bootstrap 5 CSS + JS (bootstrap.bundle) and Bootstrap Icons CSS to be loaded globally.
function Reward() {
  return (
    <>
    <Header />
    <main>
      {/* Features / Benefits */}
      <section id="features" className="section">
        {/* section: TUỲ CHỈNH (spacing/màu riêng) */}
        <div className="container benefit-slider">
          {/* container: bọc & căn giữa; benefit-slider: TUỲ CHỈNH */}
          <h2 className="display-5 fw-bold benefit-heading">Thêm gắn kết cùng ACB Rewards</h2>
          {/* display-5: tiêu đề lớn; fw-bold: đậm; benefit-heading: TUỲ CHỈNH */}

          <div id="featuresCarousel" className="carousel slide" data-bs-ride="false">
            {/* carousel slide: kích hoạt Carousel; data-bs-ride="false": không auto chạy (auto: 'carousel') */}
            <div className="carousel-inner">
              {/* vùng chứa các .carousel-item; 1 item phải có .active */}
              {/* Slide 1 */}
              <div className="carousel-item">
                {/* mỗi slide */}
                <div className="row g-4">
                  {/* row: hệ lưới; g-4: gutter 1.5rem cả trục X/Y */}
                  <div className="col-12 col-lg-4">
                    {/* 100% dưới lg; 4/12 (1/3) từ ≥992px */}
                    <div className="card p-4 text-center h-100">
                      {/* card: khối thẻ; p-4: padding 1.5rem; text-center: căn giữa; h-100: cao 100% để các thẻ đều nhau */}
                      <div className="benefit-icon"><i className="bi bi-receipt fs-1"></i></div>
                      {/* .bi .bi-receipt: icon hoá đơn */}
                      <h5 className="title mb-2">Thanh toán hóa đơn bằng điểm thưởng</h5>
                      {/* mb-2: 0.5rem */}
                      <p className="desc mb-0">Biến điểm thưởng thành giá trị tiết kiệm thực tế mỗi khi thanh toán hóa đơn Nước, Internet, Nạp di động trả trước...</p>
                      {/* mb-0: sát đáy thẻ */}
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="card p-4 text-center h-100">
                      <div className="benefit-icon"><i className="bi bi-arrow-down-up fs-1"></i></div>
                      {/* icon swap */}
                      <h5 className="title mb-2">Dễ dàng chuyển điểm</h5>
                      <p className="desc mb-0">Khi là khách hàng ưu tiên hoặc tham gia gói sản phẩm "Dịch vụ tài chính Gia Đình Việt"</p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="card p-4 text-center h-100">
                      <div className="benefit-icon"><i className="bi bi-stars fs-1"></i></div>
                      {/* icon stars */}
                      <h5 className="title mb-2">Kho quà hấp dẫn</h5>
                      <p className="desc mb-0">Từ các thương hiệu yêu thích</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="row g-4">
                  <div className="col-12 col-lg-4">
                    <div className="card p-4 text-center h-100">
                      <div className="benefit-icon"><i className="bi bi-lightning-charge fs-1"></i></div>
                      <h5 className="title mb-2">Săn quà mỗi ngày</h5>
                      <p className="desc mb-0">Deal HOT chỉ từ 1 điểm. Nhận ưu đãi quanh năm.</p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="card p-4 text-center h-100">
                      <div className="benefit-icon"><i className="bi bi-credit-card-2-front fs-1"></i></div>
                      <h5 className="title mb-2">Tích điểm không giới hạn</h5>
                      <p className="desc mb-0">Khi chi tiêu bằng thẻ tín dụng ACB.</p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="card p-4 text-center h-100">
                      <div className="benefit-icon"><i className="bi bi-heart fs-1"></i></div>
                      <h5 className="title mb-2">Đổi quà theo sở thích</h5>
                      <p className="desc mb-0">Mua sắm, Ăn uống, Giải trí và hơn thế nữa.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3 (active) to match the screenshot state) */}
              <div className="carousel-item active">
                {/* active: slide hiển thị ban đầu */}
                <div className="row g-4">
                  <div className="col-12 col-lg-4">
                    <div className="card p-4 text-center h-100">
                      <div className="benefit-icon"><i className="bi bi-receipt fs-1"></i></div>
                      <h5 className="title mb-2">Thanh toán hóa đơn bằng điểm thưởng</h5>
                      <p className="desc mb-0">Biến điểm thưởng thành giá trị tiết kiệm thực tế mỗi khi thanh toán hóa đơn Nước, Internet, Nạp di động trả trước...</p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="card p-4 text-center h-100">
                      <div className="benefit-icon"><i className="bi bi-arrow-down-up fs-1"></i></div>
                      <h5 className="title mb-2">Dễ dàng chuyển điểm</h5>
                      <p className="desc mb-0">Khi là khách hàng ưu tiên hoặc tham gia gói sản phẩm "Dịch vụ tài chính Gia Đình Việt"</p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="card p-4 text-center h-100">
                      <div className="benefit-icon"><i className="bi bi-stars fs-1"></i></div>
                      <h5 className="title mb-2">Kho quà hấp dẫn</h5>
                      <p className="desc mb-0">Từ các thương hiệu yêu thích</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 4 */}
              <div className="carousel-item">
                <div className="row g-4">
                  <div className="col-12 col-lg-4">
                    <div className="card p-4 text-center h-100">
                      <div className="benefit-icon"><i className="bi bi-gift-fill fs-1"></i></div>
                      <h5 className="title mb-2">Ưu đãi dịp đặc biệt</h5>
                      <p className="desc mb-0">Sự kiện lễ tết, Black Friday, sinh nhật ACB...</p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="card p-4 text-center h-100">
                      <div className="benefit-icon"><i className="bi bi-shield-check fs-1"></i></div>
                      <h5 className="title mb-2">An toàn bảo mật</h5>
                      <p className="desc mb-0">Chuẩn xác và minh bạch khi đổi quà/chi tiêu điểm.</p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="card p-4 text-center h-100">
                      <div className="benefit-icon"><i className="bi bi-bag-check fs-1"></i></div>
                      <h5 className="title mb-2">Mua sắm linh hoạt</h5>
                      <p className="desc mb-0">Đổi e‑voucher, thanh toán hóa đơn, nạp dịch vụ.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 5 */}
              <div className="carousel-item">
                <div className="row g-4">
                  <div className="col-12 col-lg-4">
                    <div className="card p-4 text-center h-100">
                      <div className="benefit-icon"><i className="bi bi-receipt fs-1"></i></div>
                      <h5 className="title mb-2">Thanh toán hóa đơn bằng điểm thưởng</h5>
                      <p className="desc mb-0">Biến điểm thưởng thành tiết kiệm thực tế cho gia đình.</p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="card p-4 text-center h-100">
                      <div className="benefit-icon"><i className="bi bi-arrow-down-up fs-1"></i></div>
                      <h5 className="title mb-2">Dễ dàng chuyển điểm</h5>
                      <p className="desc mb-0">Chia sẻ điểm linh hoạt cho người thân.</p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="card p-4 text-center h-100">
                      <div className="benefit-icon"><i className="bi bi-stars fs-1"></i></div>
                      <h5 className="title mb-2">Kho quà hấp dẫn</h5>
                      <p className="desc mb-0">Nhiều thương hiệu và danh mục yêu thích.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#featuresCarousel" data-bs-slide="prev" aria-label="Prev">
              {/* nút lùi slide; data-bs-slide="prev": hành động */}
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              {/* icon mũi tên (dùng background-image) */}
              <span className="visually-hidden">Previous</span>
              {/* chỉ đọc bởi screen reader, ẩn thị giác */}
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#featuresCarousel" data-bs-slide="next" aria-label="Next">
              {/* nút tiến slide */}
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

            {/* Indicators (5 dots, 3rd active) */}
            <div className="carousel-indicators benefit-indicators">
              {/* indicators: các nút chấm; benefit-indicators: TUỲ CHỈNH vị trí/kiểu */}
              <button type="button" data-bs-target="#featuresCarousel" data-bs-slide-to={0} aria-label="Slide 1"></button>
              {/* data-bs-slide-to: chỉ số 0-based */}
              <button type="button" data-bs-target="#featuresCarousel" data-bs-slide-to={1} aria-label="Slide 2"></button>
              <button type="button" className="active" aria-current="true" data-bs-target="#featuresCarousel" data-bs-slide-to={2} aria-label="Slide 3"></button>
              {/* active + aria-current="true": trạng thái đang chọn */}
              <button type="button" data-bs-target="#featuresCarousel" data-bs-slide-to={3} aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#featuresCarousel" data-bs-slide-to={4} aria-label="Slide 5"></button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="section section-muted">
        {/* section-muted: TUỲ CHỈNH (thường nền xám nhạt) */}
        <div className="container">
          <div className="category-wrap mx-auto">
            {/* mx-auto: margin-left/right auto → căn giữa block có width cố định */}
            <h2 className="display-6 category-title mb-4">Lựa chọn quà tặng theo sở thích từ kho quà đa dạng</h2>
            {/* display-6: tiêu đề lớn vừa; category-title: TUỲ CHỈNH; mb-4: 1.5rem */}

            <div className="accordion category-list" id="categoryAccordion">
              {/* accordion: component Collapse dạng danh sách; category-list: TUỲ CHỈNH */}
              <div className="accordion-item">
                {/* phần tử accordion */}
                <h2 className="accordion-header" id="headingFood">
                  {/* tiêu đề accordion; id dùng cho aria-controls */}
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFood" aria-expanded="false" aria-controls="collapseFood">Ăn uống</button>
                  {/* accordion-button: nút mở/đóng; collapsed: trạng thái đóng ban đầu; data-bs-target: liên kết vùng sập */}
                </h2>
                <div id="collapseFood" className="accordion-collapse collapse" aria-labelledby="headingFood" data-bs-parent="#categoryAccordion">
                  {/* accordion-collapse collapse: vùng nội dung sập; data-bs-parent: chỉ 1 mục mở */}
                  <div className="accordion-body">
                    {/* Nội dung gợi ý (có thể thay bằng grid voucher) */}
                    Gợi ý: nhà hàng, cà phê, fast food, e‑voucher giảm giá...
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFun">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFun" aria-expanded="false" aria-controls="collapseFun">Giải trí</button>
                </h2>
                <div id="collapseFun" className="accordion-collapse collapse" aria-labelledby="headingFun" data-bs-parent="#categoryAccordion">
                  <div className="accordion-body">Rạp phim, công viên giải trí, gói streaming...</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingBeauty">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBeauty" aria-expanded="false" aria-controls="collapseBeauty">Làm đẹp</button>
                </h2>
                <div id="collapseBeauty" className="accordion-collapse collapse" aria-labelledby="headingBeauty" data-bs-parent="#categoryAccordion">
                  <div className="accordion-body">Spa, chăm sóc tóc/da, mỹ phẩm...</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingShop">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseShop" aria-expanded="false" aria-controls="collapseShop">Mua sắm</button>
                </h2>
                <div id="collapseShop" className="accordion-collapse collapse" aria-labelledby="headingShop" data-bs-parent="#categoryAccordion">
                  <div className="accordion-body">Siêu thị, thời trang, điện máy...</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingUtil">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUtil" aria-expanded="false" aria-controls="collapseUtil">Tiện ích</button>
                </h2>
                <div id="collapseUtil" className="accordion-collapse collapse" aria-labelledby="headingUtil" data-bs-parent="#categoryAccordion">
                  <div className="accordion-body">Nạp điện thoại, thanh toán hóa đơn, dịch vụ số...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily deals CTA */}
      <section id="deals" className="section">
        {/* khối CTA download app */}
        <div className="container">
          <div className="row align-items-center g-4">
            {/* align-items-center: căn giữa dọc giữa 2 cột; g-4: gutter 1.5rem */}
            {/* Left copy */}
            <div className="col-lg-6">
              {/* 6/12 từ ≥992px; dưới lg full width */}
              <h2 className="deals-title h2 mb-2">Đặc biệt Săn quà mỗi ngày</h2>
              {/* h2 (utility): kiểu chữ như <h2>; deals-title: TUỲ CHỈNH; mb-2: 0.5rem */}
              <p className="deals-desc mb-4">Ngập tràn quà HOT chỉ từ 1 điểm trên ACB Rewards, thỏa thích săn quà quanh năm với ưu đãi mỗi ngày và ưu đãi dịp đặc biệt từ các thương hiệu yêu thích.</p>

              <div className="d-flex align-items-center deals-qrbadges mb-4">
                {/* d-flex: xếp ngang QR & badge; align-items-center: căn giữa theo dọc; mb-4: 1.5rem */}
                <img className="deals-qr" alt="QR ACB ONE" src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=ACB%20ONE" />
                <div className="d-flex flex-column flex-sm-row gap-2">
                  {/* flex-column: xếp dọc trên mobile; flex-sm-row: chuyển ngang từ ≥576px; gap-2: 0.5rem */}
                  <a className="store-badge" href="#" aria-label="Get it on Google Play">
                    {/* store-badge: TUỲ CHỈNH; có thể đặt .btn nếu muốn BS */}
                    <i className="bi bi-google-play"></i>
                    <span>
                      <small>GET IT ON</small>
                      <br />
                      Google Play
                    </span>
                  </a>
                  <a className="store-badge" href="#" aria-label="Download on the App Store">
                    <i className="bi bi-apple"></i>
                    <span>
                      <small>Download on the</small>
                      <br />
                      App Store
                    </span>
                  </a>
                </div>
              </div>

              <a className="btn btn-primary btn-cta" href="#">
                Khám phá ngay <i className="bi bi-arrow-right ms-1"></i>
              </a>
              {/* btn btn-primary: nút chính; ms-1: margin-start 0.25rem tạo khoảng giữa chữ & icon; btn-cta: TUỲ CHỈNH */}
            </div>

            {/* Right visual (phones) */}
            <div className="col-lg-6">
              {/* cột hình minh hoạ */}
              <div className="deals-phones">
                {/* TUỲ CHỈNH: xếp ảnh điện thoại chồng lớp */}
                <div className="phone phone-left"></div>
                <div className="phone phone-right"></div>
                <div className="float-app">SĂN QUÀ MỖI NGÀY</div>
                <div className="float-chip">Từ 1 điểm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Point categories (Thẻ, Ưu tiên, Bảo hiểm) */}
      <section id="point-categories" className="section section-muted">
        {/* nền phụ nhạt */}
        <div className="container">
          <h2 className="pointcats-title display-6 mb-4">Danh mục tích điểm</h2>
          {/* display-6: cỡ lớn vừa; pointcats-title: TUỲ CHỈNH */}
          <div className="row g-4 row-cols-1 row-cols-md-3">
            {/* row-cols-1: 1 cột/row dưới md; row-cols-md-3: 3 cột/row từ ≥768px; g-4: 1.5rem */}
            {/* Card 1: Thẻ */}
            <div className="col">
              {/* col: cột auto trong row-cols */}
              <div className="pcard h-100">
                {/* pcard: TUỲ CHỈNH card ảnh phủ; h-100: cao đầy ô để đồng đều */}
                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop" alt="Thẻ" />
                <div className="pcard-gradient"></div>
                {/* lớp phủ gradient TUỲ CHỈNH */}
                <div className="pcard-content">
                  {/* nội dung overlay */}
                  <div className="pcard-title">Thẻ</div>
                  <a href="#" className="btn btn-chip">
                    Xem thêm <i className="bi bi-chevron-right"></i>
                  </a>
                  {/* btn: style nút; btn-chip: TUỲ CHỈNH để làm chip */}
                </div>
              </div>
            </div>

            {/* Card 2: Khách hàng ưu tiên */}
            <div className="col">
              <div className="pcard h-100">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop" alt="Khách hàng ưu tiên" />
                <div className="pcard-gradient"></div>
                <div className="pcard-content">
                  <div className="pcard-title">Khách hàng ưu tiên</div>
                  <a href="#" className="btn btn-chip">
                    Xem thêm <i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3: Bảo hiểm */}
            <div className="col">
              <div className="pcard h-100">
                <img src="https://images.unsplash.com/photo-1520975682031-a603130fc8a1?q=80&w=1200&auto=format&fit=crop" alt="Bảo hiểm" />
                <div className="pcard-gradient"></div>
                <div className="pcard-content">
                  <div className="pcard-title">Bảo hiểm</div>
                  <a href="#" className="btn btn-chip">
                    Xem thêm <i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section id="guides" className="section">
        {/* hướng dẫn từng bước */}
        <div className="container">
          <h3 className="h5 mb-4">Hướng dẫn sử dụng ACB Rewards</h3>
          {/* .h5: cỡ chữ như <h5>; mb-4: 1.5rem */}
          <div className="row g-4">
            <div className="col-lg-6">
              {/* 6/12 từ ≥992px */}
              <div className="card h-100 border-0 shadow-sm">
                {/* border-0: bỏ viền; shadow-sm: bóng nhẹ */}
                <div className="card-body">
                  <h6 className="mb-3">Cách đổi quà E‑Voucher</h6>
                  {/* h6: nhỏ gọn */}
                  <div className="stepper">
                    {/* TUỲ CHỈNH: style danh sách bước */}
                    <ol>
                      <li>Chọn mục “ACB Rewards” tại màn hình chính.</li>
                      <li>Nhấn vào danh mục quà tặng muốn đổi.</li>
                      <li>Xem quà tặng trong từng danh mục.</li>
                      <li>
                        Xem chi tiết quà tặng, chọn giá trị đổi và nhấn <em>Đổi ngay</em>.
                      </li>
                      <li>
                        Nhấn <em>Xác nhận</em> để hoàn tất.
                      </li>
                      <li>
                        Màn hình hiển thị đổi quà thành công, chọn <em>Xem quà đã đổi</em>.
                      </li>
                      <li>Xem chi tiết quà tặng đã đổi.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h6 className="mb-3">Cách thanh toán hóa đơn bằng điểm</h6>
                  <div className="stepper">
                    <ol>
                      <li>
                        Chọn <em>Thanh toán</em> tại trang chủ ACB ONE.
                      </li>
                      <li>
                        Chọn hóa đơn cần thanh toán tại mục <em>Tất cả dịch vụ</em>.
                      </li>
                      <li>
                        Chọn <em>Số tài khoản (VND)</em> để thay đổi nguồn tiền.
                      </li>
                      <li>
                        Chọn nguồn tiền là <em>Điểm ACB Rewards</em>.
                      </li>
                      <li>
                        Kiểm tra thông tin và chọn <em>Tiếp tục</em>.
                      </li>
                      <li>
                        Chọn <em>Xác nhận</em> thông tin giao dịch.
                      </li>
                      <li>
                        Nhập mật mã <em>Safekey</em>.
                      </li>
                      <li>
                        Chọn <em>Nhập OTP – Xác nhận</em>.
                      </li>
                      <li>
                        Vào <em>Lịch sử điểm Rewards</em> để xem lại giao dịch.
                      </li>
                      <li>Xem trạng thái giao dịch.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section id="terms" className="section section-muted">
        {/* nền phụ + call-to-action phụ */}
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
            {/* d-flex: bố cục 2 bên; flex-wrap: xuống dòng trên mobile; align-items-center: căn giữa dọc; justify-content-between: dàn 2 đầu; gap-3: 1rem */}
            <div>
              <h3 className="h5 mb-1">Thể lệ chương trình ACB Rewards</h3>
              {/* mb-1: 0.25rem */}
              <p className="mb-0 text-body-secondary">Vui lòng tham khảo chi tiết thể lệ trước khi tham gia chương trình.</p>
              {/* text-body-secondary: màu chữ phụ (phụ thuộc theme) */}
            </div>
            <a className="btn btn-outline-primary" href="#">Xem chi tiết</a>
            {/* btn-outline-primary: viền & chữ primary, nền trong suốt */}
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
export default Reward;
