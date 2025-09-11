import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import '../src/styles/Subpage/About.css';

// ======= DATA (để map) =======
const breadcrumbs = [
  { label: 'Trang chủ', href: '#', current: false },
  { label: 'Về chúng tôi', href: null, current: true },
];

const heroImg = 'https://m.yodycdn.com/blog/hinh-nen-thien-nhien-4k-yody-vn-11.jpg';

const infoTiles = [
  {
    title: 'Tầm nhìn',
    text: 'Phát triển bền vững với tinh thần chuyển đổi để nâng cao khả năng cạnh tranh.',
    img: heroImg,
    alt: 'Tầm nhìn',
  },
  {
    title: 'Sứ mệnh',
    text:
      'Đem lại trải nghiệm khách hàng tốt nhất, tăng trưởng tổng thu nhập ở mức cao, và đạt tỷ suất lợi nhuận trên vốn chủ sở hữu (ROE) từ 20%/năm trở lên.',
    img: heroImg,
    alt: 'Sứ mệnh',
  },
];

const coreValues = [
  {
    idx: '01.',
    title: 'Chính trực',
    desc:
      'Chúng tôi đề cao sự trung thực, xử lý vấn đề một cách thẳng thắn và minh bạch, không khoan nhượng với sự không trung thực.',
  },
  {
    idx: '02.',
    title: 'Cẩn trọng',
    desc:
      'Chúng tôi đề cao tuân thủ quy định của pháp luật và quy định nội bộ, cân nhắc rủi ro và hiệu quả mang lại.',
  },
  {
    idx: '03.',
    title: 'Cách tân',
    desc:
      'Chúng tôi luôn học hỏi, thay đổi để thích ứng với điều kiện hoạt động, và đổi mới để phát triển.',
  },
  {
    idx: '04.',
    title: 'Hài hòa',
    desc:
      'Chúng tôi tôn trọng lợi ích các bên hữu quan trong quá trình phục vụ, đối tác, và thực hiện nghĩa vụ doanh nghiệp.',
  },
  {
    idx: '05.',
    title: 'Hiệu quả',
    desc:
      'Chúng tôi hành động để đem lại kết quả tốt hơn, có giá trị hơn, tiết kiệm thời gian, công sức và nguồn lực.',
  },
];

const awards = [
  {
    title:
      'Enterprise Asia – ACB – Doanh nghiệp có thương hiệu truyền cảm hứng tốt nhất 2022',
    img: heroImg,
    alt: 'Giải thưởng 1',
  },
  {
    title:
      'International Banker (UK) – Ngân hàng có dịch vụ khách hàng tốt nhất Châu Á 2022',
    img: heroImg,
    alt: 'Giải thưởng 2',
  },
  {
    title:
      'Global Banking & Finance Review – Ngân hàng có trách nhiệm xã hội tốt nhất Việt Nam 2022',
    img: heroImg,
    alt: 'Giải thưởng 3',
  },
];

const stats = [
  { value: '13.000+', label: 'Nhân viên' },
  { value: '90', label: 'Chi nhánh' },
  { value: '294', label: 'Phòng giao dịch' },
  { value: '1.000+', label: 'ATM & CRM' },
  { value: '49/63', label: 'Tỉnh thành' },
];

const press = [
  {
    date: '30/07/2025',
    title: 'Nâng cấp hạ tầng thanh toán quốc tế',
    text: 'Chuyển đổi định dạng theo chuẩn ISO 20022, tăng tốc xử lý & mở rộng kết nối.',
    img: heroImg,
    alt: 'Nâng cấp hạ tầng thanh toán',
    href: '#',
  },
  {
    date: '25/07/2025',
    title: 'KQKD Quý II/2025 tăng trưởng 33%',
    text: 'Duy trì nền tảng tài chính ổn định, kiểm soát rủi ro tốt.',
    img: heroImg,
    alt: 'KQKD tăng trưởng',
    href: '#',
  },
  {
    date: '23/07/2025',
    title: 'Ra mắt thẻ hội viên tích hợp thanh toán',
    text: 'Hợp tác cùng hãng hàng không & tổ chức thẻ quốc tế.',
    img: heroImg,
    alt: 'Ra mắt thẻ hội viên',
    href: '#',
  },
];

// ======= COMPONENTS PHỤ (giữ nguyên cấu trúc/stylesheet) =======
const ValueItem = ({ idx, title, desc, withBorder = true }) => (
  <div className={`v-item${withBorder ? ' border-bottom' : ''}`}>
    <div className="v-index">{idx}</div>
    <h3 className="v-title h6 mb-1">{title}</h3>
    <p className="v-desc mb-0">{desc}</p>
  </div>
);

function About() {
  // Tách core values theo cột: trái = số lẻ (01,03,05), phải = số chẵn (02,04)
  const leftValues = coreValues.filter((_, i) => i % 2 === 0); // 0,2,4
  const rightValues = coreValues.filter((_, i) => i % 2 === 1); // 1,3

  return (
    <>
      <Header />

      {/* HERO trên cùng */}
      <div className="hero2">
        <img
          src={heroImg}
          alt="Ngân hàng số"
          className="hero2__img"
          loading="lazy"
        />
        <div className="hero2__content" />
      </div>

      <main>
        {/* PAGE HERO */}
        <section className="page-hero py-5">
          <div className="container">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="mb-3">
              <ol className="breadcrumb mb-0">
                {breadcrumbs.map((b) => (
                  <li
                    key={b.label}
                    className={`breadcrumb-item${b.current ? ' active' : ''}`}
                    aria-current={b.current ? 'page' : undefined}
                  >
                    {b.current ? (
                      b.label
                    ) : (
                      <a href={b.href} className="link-body-emphasis">
                        {b.label}
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            {/* Tiêu đề + mô tả */}
            <h1 className="fw-bold mb-2">Ngân hàng thương mại cổ phần ACB</h1>
            <p>
              ACB là một trong những ngân hàng thương mại cổ phần hàng đầu tại Việt
              Nam, với hệ thống mạng lưới chi nhánh và phòng giao dịch trải dài 49
              tỉnh thành trong số 63 tỉnh thành trong cả nước và có hơn 13.000 nhân
              viên.
            </p>

            {/* Ảnh chính */}
            <div className="rounded-4 shadow-sm overflow-hidden mb-3">
              <img
                src={heroImg}
                alt="Ảnh minh hoạ ngân hàng"
                className="d-block"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* CTA */}
            <a href="#mission" className="btn btn-primary rounded-pill px-4">
              Xem thêm <span className="ms-1">›</span>
            </a>
          </div>
        </section>

        {/* MISSION */}
        <section id="mission" className="py-5">
          <div className="container">
            <h2 className="h3 fw-bold mb-4">
              Thông điệp, tầm nhìn và sứ mệnh của ACB
            </h2>

            {/* Thông điệp từ Chủ tịch (không lặp) */}
            <div className="hero-board shadow-sm mb-4">
              <div className="content">
                <h3 className="h4 fw-bold mb-2">Thông điệp từ Chủ tịch</h3>
                <p className="mb-3 opacity-75">
                  Chỉ đạo việc đổi mới tư duy, nâng cao nhận thức về việc áp dụng
                  công nghệ vào công việc và quy trình. Việc số hoá không phải việc
                  riêng của đơn vị chuyên môn mà là việc của tất cả.
                </p>
                <a href="#" className="btn btn-primary px-4 rounded-pill">
                  Xem chi tiết <span className="ms-1">›</span>
                </a>
              </div>
            </div>

            {/* 2 info-tile: Tầm nhìn & Sứ mệnh */}
            <div className="row g-4">
              {infoTiles.map((it, i) => (
                <div key={it.title} className="col-12 col-lg-6">
                  <div className="info-tile">
                    <h3 className="h5 fw-bold mb-1">{it.title}</h3>
                    <p className="text-secondary pe-lg-5 mb-0">{it.text}</p>
                    <img
                      src={it.img}
                      className="tile-img"
                      alt={it.alt}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section id="values" className="py-5 values-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-xl-8">
                <h2 className="h4 fw-bold text-center mb-4">
                  ACB hoạt động dựa trên năm nền tảng giá trị cốt lõi
                </h2>

                <div className="row g-0">
                  {/* Cột trái: 01,03,05 */}
                  <div className="col-12 col-lg-6 pe-lg-4">
                    {leftValues.map((v, i) => (
                      <ValueItem
                        key={v.idx}
                        idx={v.idx}
                        title={v.title}
                        desc={v.desc}
                        // bỏ border-bottom ở mục cuối cột trái như bản gốc
                        withBorder={i !== leftValues.length - 1}
                      />
                    ))}
                  </div>

                  {/* Cột phải: 02,04 */}
                  <div className="col-12 col-lg-6 ps-lg-4 mt-4 mt-lg-0">
                    {rightValues.map((v, i) => (
                      <ValueItem
                        key={v.idx}
                        idx={v.idx}
                        title={v.title}
                        desc={v.desc}
                        // bỏ border-bottom ở mục cuối cột phải như bản gốc
                        withBorder={i !== rightValues.length - 1}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GOVERNANCE */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-12 col-lg-6">
                <img
                  src={heroImg}
                  className="img-fluid rounded-4 shadow-sm"
                  alt="Sơ đồ quản trị"
                  loading="lazy"
                />
              </div>
              <div className="col-12 col-lg-6">
                <h2 className="h3 fw-bold mb-3">Cơ cấu quản trị ngân hàng</h2>
                <p>
                  Hệ thống quản trị bao gồm các khối chức năng chính, đảm bảo vận
                  hành minh bạch và hiệu quả. Đội ngũ lãnh đạo dày dạn kinh nghiệm,
                  tuân thủ chuẩn mực quản trị hiện đại.
                </p>
                <a href="#" className="btn btn-outline-primary">
                  Đọc thêm
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="h3 fw-bold mb-1">Thành tựu đạt được</h2>
            <p className="text-secondary mb-4">
              Giải thưởng, các sự kiện đáng chú ý mới nhất của ACB
            </p>

            <div className="row g-4 justify-content-center">
              {awards.map((a, i) => (
                <div key={i} className="col-12 col-md-6 col-lg-4">
                  <article className="award-card">
                    <h3 className="h6 fw-bold mb-2">{a.title}</h3>
                    <img
                      src={a.img}
                      alt={a.alt}
                      className="award-figure"
                      loading="lazy"
                    />
                  </article>
                </div>
              ))}
            </div>

            <div className="text-center mt-4">
              <a href="#" className="btn btn-primary rounded-pill px-4">
                Xem thêm <span className="ms-1">›</span>
              </a>
            </div>
          </div>
        </section>

        {/* STATISTICS */}
        <section className="py-5">
          <div className="container">
            <h2 className="h3 fw-bold mb-4">Quy mô ngân hàng</h2>
            <div className="row g-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="col-12 col-sm-6 col-lg-4 col-xxl-2"
                >
                  <div className="stat-card p-4 bg-white rounded-4 shadow-sm text-center h-100">
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEWS */}
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="h3 fw-bold mb-4">Thông cáo báo chí</h2>
            <div className="row g-4">
              {press.map((n) => (
                <div key={n.title} className="col-12 col-md-6 col-lg-4">
                  <article className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                    <img
                      src={n.img}
                      className="card-img-top"
                      alt={n.alt}
                      loading="lazy"
                    />
                    <div className="card-body d-flex flex-column">
                      <span className="badge text-bg-primary align-self-start mb-2">
                        {n.date}
                      </span>
                      <h3 className="h5 card-title">{n.title}</h3>
                      <p className="card-text text-secondary">{n.text}</p>
                      <a href={n.href} className="stretched-link">
                        Xem thêm
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;
