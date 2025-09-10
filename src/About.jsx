import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import '../src/styles/Subpage/About.css'

function About() {
  return (
    <>
      <Header />
       <div className="hero2">
      {/* TUỲ CHỈNH: khối hero; không phải class của Bootstrap */}

      <img
        src="https://m.yodycdn.com/blog/hinh-nen-thien-nhien-4k-yody-vn-11.jpg"
        alt="Ngân hàng số"
        className="hero2__img"
        loading="lazy"
      />
      {/* TUỲ CHỈNH: style hero img */}

      <div className="hero2__content">
        {/* TUỲ CHỈNH: vùng nội dung phủ trên ảnh */}
      </div>
    </div>
      <main>
      {/* ========================================
           PAGE HERO - Banner đầu trang
           ======================================== */}
      <section className="page-hero py-5">
        {/* py-5: padding trên & dưới 3rem tạo khoảng thở cho banner */}
        <div className="container">
          {/* container: cố định max-width theo breakpoint, căn giữa nội dung */}

          {/* Breadcrumb navigation */}
          <nav aria-label="breadcrumb" className="mb-3">
            {/* mb-3: margin dưới 1rem tạo khoảng cách với tiêu đề */}
            <ol className="breadcrumb mb-0">
              {/* breadcrumb: style danh sách đường dẫn; mb-0: loại bỏ margin dưới mặc định */}
              <li className="breadcrumb-item">
                <a href="#" className="link-body-emphasis">Trang chủ</a>
              </li>
              {/* link-body-emphasis: màu link theo tông chữ nổi bật của body; dễ đọc trong light/dark */}
              <li className="breadcrumb-item active" aria-current="page">
                Về chúng tôi
              </li>
              {/* active: đánh dấu mục hiện tại, áp style nhạt & vô hiệu hoá link */}
            </ol>
          </nav>

          {/* Tiêu đề và mô tả */}
          <h1 className="fw-bold mb-2">Ngân hàng thương mại cổ phần ACB</h1>
          {/* fw-bold: font-weight 700; mb-2: 0.5rem */}
          <p>
            ACB là một trong những ngân hàng thương mại cổ phần hàng đầu tại Việt Nam,
            với hệ thống mạng lưới chi nhánh và phòng giao dịch trải dài 49 tỉnh thành
            trong số 63 tỉnh thành trong cả nước và có hơn 13.000 nhân viên.
          </p>

          {/* Hình ảnh chính */}
          <div className="rounded-4 shadow-sm overflow-hidden mb-3">
            {/* rounded-4: bo góc lớn (~1rem); shadow-sm: bóng nhẹ; overflow-hidden: cắt phần ảnh tràn để bo góc "ăn" vào ảnh */}
            <img
              src="https://m.yodycdn.com/blog/hinh-nen-thien-nhien-4k-yody-vn-11.jpg"
              alt="Ảnh minh hoạ ngân hàng"
              className="d-block"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {/* d-block: ảnh là block để xoá khoảng trống inline, tránh khe trắng */}
          </div>

          {/* Nút call-to-action */}
          <a href="#mission" className="btn btn-primary rounded-pill px-4">
            {/* btn: nút cơ bản; btn-primary: nền & viền màu chủ đạo; rounded-pill: bo 50rem; px-4: 1.5rem mỗi bên */}
            Xem thêm <span className="ms-1">›</span>
            {/* ms-1: margin-start 0.25rem (tôn trọng hướng viết RTL/LTR) */}
          </a>
        </div>
      </section>

      {/* ========================================
           MISSION SECTION - Thông điệp, tầm nhìn, sứ mệnh
           ======================================== */}
      <section id="mission" className="py-5">
        {/* py-5: tạo nhịp dọc 3rem giữa các section */}
        <div className="container">
          {/* giữ nội dung không chảy rộng toàn màn, tăng khả năng đọc */}
          <h2 className="h3 fw-bold mb-4">
            Thông điệp, tầm nhìn và sứ mệnh của ACB
          </h2>
          {/* .h3: utility đặt size như <h3>; giữ semantic của <h2> */}

          {/* Thông điệp từ Chủ tịch */}
          <div className="hero-board shadow-sm mb-4">
            {/* TUỲ CHỈNH: hero-board; shadow-sm thêm chiều sâu; mb-4: 1.5rem */}
            <div className="content">
              {/* TUỲ CHỈNH: bố cục nội dung */}
              <h3 className="h4 fw-bold mb-2">Thông điệp từ Chủ tịch</h3>
              {/* .h4: size như h4; fw-bold: đậm; mb-2: 0.5rem */}
              <p className="mb-3 opacity-75">
                {/* opacity-75: giảm độ đậm chữ → nhấn mạnh hệ thống phân cấp thị giác */}
                Chỉ đạo việc đổi mới tư duy, nâng cao nhận thức về việc áp dụng công nghệ
                vào công việc và quy trình. Việc số hoá không phải việc riêng của đơn vị
                chuyên môn mà là việc của tất cả.
              </p>
              <a href="#" className="btn btn-primary px-4 rounded-pill">
                {/* px-4: 24px mỗi bên giúp nút rộng, dễ click */}
                Xem chi tiết <span className="ms-1">›</span>
              </a>
            </div>
          </div>

          {/* Grid tầm nhìn và sứ mệnh */}
          <div className="row g-4">
            {/* row: kích hoạt hệ thống lưới; g-4: gutter 1.5rem cả ngang dọc giữa các .col-* */}
            {/* Tầm nhìn */}
            <div className="col-12 col-lg-6">
              {/* col-12: chiếm 100% dưới lg; col-lg-6: 50% từ ≥992px → 2 cột trên màn lớn */}
              <div className="info-tile">
                {/* TUỲ CHỈNH: thẻ nội dung */}
                <h3 className="h5 fw-bold mb-1">Tầm nhìn</h3>
                {/* .h5: size nhỏ hơn; mb-1: 0.25rem tránh khoảng trắng dư */}
                <p className="text-secondary pe-lg-5 mb-0">
                  {/* text-secondary: màu phụ (#6c757d theo theme mặc định); pe-lg-5: padding-right 3rem chỉ khi ≥992px để chừa chỗ cho ảnh */}
                  Phát triển bền vững với tinh thần chuyển đổi để nâng cao khả năng cạnh tranh.
                </p>
                <img
                  src="https://m.yodycdn.com/blog/hinh-nen-thien-nhien-4k-yody-vn-11.jpg"
                  className="tile-img"
                  alt="Tầm nhìn"
                  loading="lazy"
                />
                {/* TUỲ CHỈNH: tile-img kiểm soát kích thước/định vị ảnh */}
              </div>
            </div>

            {/* Sứ mệnh */}
            <div className="col-12 col-lg-6">
              {/* giữ bố cục đối xứng với khối bên trái */}
              <div className="info-tile">
                <h3 className="h5 fw-bold mb-1">Sứ mệnh</h3>
                <p className="text-secondary pe-lg-5 mb-0">
                  Đem lại trải nghiệm khách hàng tốt nhất, tăng trưởng tổng thu nhập ở mức cao,
                  và đạt tỷ suất lợi nhuận trên vốn chủ sở hữu (ROE) từ 20%/năm trở lên.
                </p>
                <img
                  src="https://m.yodycdn.com/blog/hinh-nen-thien-nhien-4k-yody-vn-11.jpg"
                  className="tile-img"
                  alt="Sứ mệnh"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
           VALUES SECTION - Giá trị cốt lõi
           ======================================== */}
      <section id="values" className="py-5 values-section">
        {/* values-section: TUỲ CHỈNH; py-5: nhịp dọc lớn */}
        <div className="container">
          <div className="row justify-content-center">
            {/* justify-content-center: căn giữa các cột theo trục ngang của row */}
            <div className="col-12 col-xl-8">
              {/* 100% dưới xl; 8/12 khi ≥1200px → giới hạn độ rộng để đọc dễ hơn */}
              <h2 className="h4 fw-bold text-center mb-4">
                {/* text-center: căn giữa tiêu đề; mb-4: 1.5rem */}
                ACB hoạt động dựa trên năm nền tảng giá trị cốt lõi
              </h2>

              <div className="row g-0">
                {/* g-0: loại bỏ hoàn toàn gutter giữa 2 cột con → dính sát */}
                {/* Cột trái: 01, 03, 05 */}
                <div className="col-12 col-lg-6 pe-lg-4">
                  {/* pe-lg-4: thêm padding-right 1.5rem chỉ khi ≥992px để tạo khe giữa hai cột */}
                  {/* Giá trị 01: Chính trực */}
                  <div className="v-item border-bottom">
                    {/* border-bottom: kẻ đường phân cách mảnh dưới mỗi mục */}
                    <div className="v-index">01.</div>
                    <h3 className="v-title h6 mb-1">Chính trực</h3>
                    {/* .h6: kích thước nhỏ gọn; mb-1: 0.25rem */}
                    <p className="v-desc mb-0">
                      Chúng tôi đề cao sự trung thực, xử lý vấn đề một cách thẳng thắn và minh bạch,
                      không khoan nhượng với sự không trung thực.
                    </p>
                  </div>

                  {/* Giá trị 03: Cách tân */}
                  <div className="v-item border-bottom">
                    <div className="v-index">03.</div>
                    <h3 className="v-title h6 mb-1">Cách tân</h3>
                    <p className="v-desc mb-0">
                      Chúng tôi luôn học hỏi, thay đổi để thích ứng với điều kiện hoạt động,
                      và đổi mới để phát triển.
                    </p>
                  </div>

                  {/* Giá trị 05: Hiệu quả */}
                  <div className="v-item">
                    {/* bỏ border-bottom ở mục cuối để không kẻ đường dư */}
                    <div className="v-index">05.</div>
                    <h3 className="v-title h6 mb-1">Hiệu quả</h3>
                    <p className="v-desc mb-0">
                      Chúng tôi hành động để đem lại kết quả tốt hơn, có giá trị hơn,
                      tiết kiệm thời gian, công sức và nguồn lực.
                    </p>
                  </div>
                </div>

                {/* Cột phải: 02, 04 */}
                <div className="col-12 col-lg-6 ps-lg-4 mt-4 mt-lg-0">
                  {/* ps-lg-4: padding-left 1.5rem từ ≥992px; mt-4: 1.5rem khoảng cách trên mobile; mt-lg-0: huỷ khoảng cách khi lên màn lớn */}
                  {/* Giá trị 02: Cẩn trọng */}
                  <div className="v-item border-bottom">
                    <div className="v-index">02.</div>
                    <h3 className="v-title h6 mb-1">Cẩn trọng</h3>
                    <p className="v-desc mb-0">
                      Chúng tôi đề cao tuân thủ quy định của pháp luật và quy định nội bộ,
                      cân nhắc rủi ro và hiệu quả mang lại.
                    </p>
                  </div>

                  {/* Giá trị 04: Hài hòa */}
                  <div className="v-item">
                    <div className="v-index">04.</div>
                    <h3 className="v-title h6 mb-1">Hài hòa</h3>
                    <p className="v-desc mb-0">
                      Chúng tôi tôn trọng lợi ích các bên hữu quan trong quá trình phục vụ,
                      đối tác, và thực hiện nghĩa vụ doanh nghiệp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
           GOVERNANCE SECTION - Cơ cấu quản trị
           ======================================== */}
      <section className="py-5">
        {/* py-5: 3rem trên & dưới để tách section */}
        <div className="container">
          <div className="row align-items-center g-4">
            {/* align-items-center: căn giữa theo trục dọc giúp ảnh & nội dung thẳng hàng */}
            {/* Hình ảnh */}
            <div className="col-12 col-lg-6">
              {/* 1 cột đầy trên mobile; 1/2 chiều ngang từ lg trở lên */}
              <img
                src="https://m.yodycdn.com/blog/hinh-nen-thien-nhien-4k-yody-vn-11.jpg"
                className="img-fluid rounded-4 shadow-sm"
                alt="Sơ đồ quản trị"
                loading="lazy"
              />
              {/* img-fluid: ảnh tự co theo cột; rounded-4: bo góc lớn; shadow-sm: tạo tầng thị giác */}
            </div>
            {/* Nội dung */}
            <div className="col-12 col-lg-6">
              {/* cột nội dung đối xứng */}
              <h2 className="h3 fw-bold mb-3">Cơ cấu quản trị ngân hàng</h2>
              <p>
                Hệ thống quản trị bao gồm các khối chức năng chính, đảm bảo vận hành minh bạch và hiệu quả.
                Đội ngũ lãnh đạo dày dạn kinh nghiệm, tuân thủ chuẩn mực quản trị hiện đại.
              </p>
              <a href="#" className="btn btn-outline-primary">Đọc thêm</a>
              {/* btn-outline-primary: chỉ viền & chữ màu primary; nền trong suốt, hover sẽ đổi nền */}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
           ACHIEVEMENTS SECTION - Thành tựu
           ======================================== */}
      <section className="py-5 bg-light">
        {/* bg-light: nền xám nhạt (var(--bs-light)); hữu ích để phân tách khối nội dung */}
        <div className="container">
          <h2 className="h3 fw-bold mb-1">Thành tựu đạt được</h2>
          <p className="text-secondary mb-4">Giải thưởng, các sự kiện đáng chú ý mới nhất của ACB</p>

          <div className="row g-4 justify-content-center">
            {/* justify-content-center: căn giữa 3 card nếu không đủ chiều ngang */}
            {/* Giải thưởng 1 */}
            <div className="col-12 col-md-6 col-lg-4">
              {/* col-md-6: 2 cột từ ≥768px; col-lg-4: 3 cột từ ≥992px */}
              <article className="award-card">
                {/* TUỲ CHỈNH: thay vì .card để toàn quyền style */}
                <h3 className="h6 fw-bold mb-2">
                  Enterprise Asia – ACB – Doanh nghiệp có thương hiệu truyền cảm hứng tốt nhất 2022
                </h3>
                <img src="https://m.yodycdn.com/blog/hinh-nen-thien-nhien-4k-yody-vn-11.jpg" alt="Giải thưởng 1" className="award-figure" loading="lazy" />
                {/* TUỲ CHỈNH: kiểm soát tỉ lệ khung hình, bo góc... */}
              </article>
            </div>

            {/* Giải thưởng 2 */}
            <div className="col-12 col-md-6 col-lg-4">
              <article className="award-card">
                <h3 className="h6 fw-bold mb-2">
                  International Banker (UK) – Ngân hàng có dịch vụ khách hàng tốt nhất Châu Á 2022
                </h3>
                <img src="https://m.yodycdn.com/blog/hinh-nen-thien-nhien-4k-yody-vn-11.jpg" alt="Giải thưởng 2" className="award-figure" loading="lazy" />
              </article>
            </div>

            {/* Giải thưởng 3 */}
            <div className="col-12 col-md-6 col-lg-4">
              <article className="award-card">
                <h3 className="h6 fw-bold mb-2">
                  Global Banking &amp; Finance Review – Ngân hàng có trách nhiệm xã hội tốt nhất Việt Nam 2022
                </h3>
                <img src="https://m.yodycdn.com/blog/hinh-nen-thien-nhien-4k-yody-vn-11.jpg" alt="Giải thưởng 3" className="award-figure" loading="lazy" />
              </article>
            </div>
          </div>

          {/* Nút xem thêm */}
          <div className="text-center mt-4">
            {/* text-center: căn giữa nút; mt-4: 1.5rem cách phần trên */}
            <a href="#" className="btn btn-primary rounded-pill px-4">
              Xem thêm <span className="ms-1">›</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================
           STATISTICS SECTION - Thống kê quy mô
           ======================================== */}
      <section className="py-5">
        {/* đặt section stats ở nền trắng để tương phản với bg-light phía trên */}
        <div className="container">
          <h2 className="h3 fw-bold mb-4">Quy mô ngân hàng</h2>
          <div className="row g-4">
            {/* g-4: khoảng cách 1.5rem giữa các cột thống kê */}
            {/* Số liệu nhân viên */}
            <div className="col-12 col-sm-6 col-lg-4 col-xxl-2">
              {/* đáp ứng tốt nhiều kích thước: 1 cột trên mobile, 2 cột từ sm, 3 cột từ lg, 5 cột từ xxl */}
              <div className="stat-card p-4 bg-white rounded-4 shadow-sm text-center h-100">
                {/* p-4: padding 1.5rem; text-center: căn giữa nội dung; h-100: giúp các thẻ cao đều khi đặt trong .row */}
                <div className="stat-value">13.000+</div>
                <div className="stat-label">Nhân viên</div>
              </div>
            </div>

            {/* Số liệu chi nhánh */}
            <div className="col-12 col-sm-6 col-lg-4 col-xxl-2">
              <div className="stat-card p-4 bg-white rounded-4 shadow-sm text-center h-100">
                <div className="stat-value">90</div>
                <div className="stat-label">Chi nhánh</div>
              </div>
            </div>

            {/* Số liệu phòng giao dịch */}
            <div className="col-12 col-sm-6 col-lg-4 col-xxl-2">
              <div className="stat-card p-4 bg-white rounded-4 shadow-sm text-center h-100">
                <div className="stat-value">294</div>
                <div className="stat-label">Phòng giao dịch</div>
              </div>
            </div>

            {/* Số liệu ATM & CRM */}
            <div className="col-12 col-sm-6 col-lg-4 col-xxl-2">
              <div className="stat-card p-4 bg-white rounded-4 shadow-sm text-center h-100">
                <div className="stat-value">1.000+</div>
                <div className="stat-label">ATM &amp; CRM</div>
              </div>
            </div>

            {/* Số liệu tỉnh thành */}
            <div className="col-12 col-sm-6 col-lg-4 col-xxl-2">
              <div className="stat-card p-4 bg-white rounded-4 shadow-sm text-center h-100">
                <div className="stat-value">49/63</div>
                <div className="stat-label">Tỉnh thành</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
           NEWS SECTION - Thông cáo báo chí (dùng .card Bootstrap)
           ======================================== */}
      <section className="py-5 bg-light">
        {/* nền nhạt giúp *card* nổi bật */}
        <div className="container">
          <h2 className="h3 fw-bold mb-4">Thông cáo báo chí</h2>
          <div className="row g-4">
            {/* bố cục 3 card hàng ngang khi đủ rộng */}
            {/* Tin tức 1 */}
            <div className="col-12 col-md-6 col-lg-4">
              <article className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                {/* .card có position: relative; cần thiết cho .stretched-link */}
                <img
                  src="https://m.yodycdn.com/blog/hinh-nen-thien-nhien-4k-yody-vn-11.jpg"
                  className="card-img-top"
                  alt="Nâng cấp hạ tầng thanh toán"
                  loading="lazy"
                />
                {/* card-img-top: ảnh full-width bo theo góc card */}
                <div className="card-body d-flex flex-column">
                  {/* d-flex + flex-column: cho phép đẩy link xuống đáy bằng *margin-top:auto* (nếu thêm) */}
                  <span className="badge text-bg-primary align-self-start mb-2">30/07/2025</span>
                  {/* text-bg-primary: tiện ích mới set cả nền & chữ đồng bộ với theme */}
                  <h3 className="h5 card-title">Nâng cấp hạ tầng thanh toán quốc tế</h3>
                  <p className="card-text text-secondary">
                    Chuyển đổi định dạng theo chuẩn ISO 20022, tăng tốc xử lý &amp; mở rộng kết nối.
                  </p>
                  <a href="#" className="stretched-link">Xem thêm</a>
                  {/* stretched-link: pseudo-element ::after phủ full card; yêu cầu ancestor có position (card đã có) */}
                </div>
              </article>
            </div>

            {/* Tin tức 2 */}
            <div className="col-12 col-md-6 col-lg-4">
              <article className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <img
                  src="https://m.yodycdn.com/blog/hinh-nen-thien-nhien-4k-yody-vn-11.jpg"
                  className="card-img-top"
                  alt="KQKD tăng trưởng"
                  loading="lazy"
                />
                <div className="card-body d-flex flex-column">
                  <span className="badge text-bg-primary align-self-start mb-2">25/07/2025</span>
                  <h3 className="h5 card-title">KQKD Quý II/2025 tăng trưởng 33%</h3>
                  <p className="card-text text-secondary">
                    Duy trì nền tảng tài chính ổn định, kiểm soát rủi ro tốt.
                  </p>
                  <a href="#" className="stretched-link">Xem thêm</a>
                </div>
              </article>
            </div>

            {/* Tin tức 3 */}
            <div className="col-12 col-md-6 col-lg-4">
              <article className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <img
                  src="https://m.yodycdn.com/blog/hinh-nen-thien-nhien-4k-yody-vn-11.jpg"
                  className="card-img-top"
                  alt="Ra mắt thẻ hội viên"
                  loading="lazy"
                />
                <div className="card-body d-flex flex-column">
                  <span className="badge text-bg-primary align-self-start mb-2">23/07/2025</span>
                  <h3 className="h5 card-title">Ra mắt thẻ hội viên tích hợp thanh toán</h3>
                  <p className="card-text text-secondary">
                    Hợp tác cùng hãng hàng không &amp; tổ chức thẻ quốc tế.
                  </p>
                  <a href="#" className="stretched-link">Xem thêm</a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
      <Footer />
    </>
  )
}

export default About