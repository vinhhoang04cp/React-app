import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/Subpage/Library.css';
import Carousel from '../src/components/Homepage/Carousel';

// DỮ LIỆU TÁCH RIÊNG ĐỂ DÙNG VÒNG LẶP
const breadcrumbs = [
  { label: 'Trang chủ', href: '#', current: false },
  { label: 'Thư viện', href: null, current: true },
];

const searchHints = [
  'Thẻ tín dụng ACB Visa',
  'Gửi tiết kiệm online',
  'Bảo hiểm nhân thọ',
  'Vay mua nhà',
  'Đầu tư chứng khoán',
];

const tilesTop = [
  {
    id: 'acb-one',
    className: 'tile-acb-one',
    title: 'Hướng dẫn sử dụng ACB ONE',
    desc:
      'Khám phá các tính năng mới nhất của ACB ONE: Chuyển tiền nhanh 24/7, Thanh toán QR, Đặt lệnh chứng khoán, Mở tài khoản online và nhiều tiện ích khác.',
    cta: 'Xem hướng dẫn',
    href: '#',
  },
  {
    id: 'acb-biz',
    className: 'tile-acb-biz',
    title: 'Hướng dẫn ACB ONE BIZ',
    desc:
      'Giải pháp ngân hàng số toàn diện cho doanh nghiệp: Quản lý tài khoản đa người dùng, Chuyển tiền hàng loạt, Thanh toán lương và Kết nối ERP.',
    cta: 'Xem hướng dẫn',
    href: '#',
  },
];

const tilesMore = [
  {
    id: 'personal',
    className: 'tile-personal',
    title: 'Ưu đãi cho Khách hàng Cá nhân',
    desc:
      'Hoàn tiền đến 2% với thẻ tín dụng, Lãi suất ưu đãi cho vay mua nhà từ 7.5%/năm, Tặng 500.000đ cho khách hàng mới và nhiều ưu đãi hấp dẫn khác.',
    cta: 'Xem ưu đãi',
    href: '#',
  },
  {
    id: 'digital',
    className: 'tile-digital',
    title: 'Ưu đãi Ngân hàng Số',
    desc:
      'Miễn phí chuyển tiền 24/7, Hoàn tiền 5% cho thanh toán QR, Tặng data 4G khi nạp tiền điện thoại và các ưu đãi độc quyền trên ACB ONE.',
    cta: 'Xem ưu đãi',
    href: '#',
  },
  {
    id: 'business',
    className: 'tile-business',
    title: 'Ưu đãi Doanh nghiệp',
    desc:
      'Lãi suất vay ưu đãi từ 6.5%/năm, Miễn phí duy trì dịch vụ ACB ONE BIZ, Ưu đãi đặc biệt cho doanh nghiệp xuất nhập khẩu và SME.',
    cta: 'Xem ưu đãi',
    href: '#',
  },
  {
    id: 'docs',
    className: 'tile-docs',
    title: 'Biểu mẫu & Tài liệu',
    desc:
      'Tải về các biểu mẫu mở tài khoản, đăng ký dịch vụ, hợp đồng tín dụng và các tài liệu quan trọng khác.',
    cta: 'Tải biểu mẫu',
    href: '#',
  },
  {
    id: 'knowledge',
    className: 'tile-knowledge',
    title: 'Kiến thức Tài chính',
    desc:
      'Khám phá các bài viết về quản lý tài chính cá nhân, đầu tư thông minh, kinh doanh hiệu quả và các xu hướng ngân hàng số.',
    cta: 'Xem bài viết',
    href: '#',
  },
  {
    id: 'news',
    className: 'tile-news',
    title: 'Tin tức & Thông báo',
    desc:
      'Cập nhật tin tức mới nhất về hoạt động của ACB, thông báo quan trọng và các sự kiện sắp diễn ra.',
    cta: 'Xem tin tức',
    href: '#',
  },
  {
    id: 'video',
    className: 'tile-video',
    title: 'Video Hướng dẫn',
    desc:
      'Thư viện video hướng dẫn chi tiết về cách sử dụng sản phẩm, dịch vụ và các tính năng mới của ACB.',
    cta: 'Xem video',
    href: '#',
  },
  {
    id: 'special',
    className: 'tile-special',
    title: 'Chương trình Đặc biệt',
    desc:
      'Khám phá các chương trình khuyến mãi độc đáo, sự kiện đặc biệt và ưu đãi giới hạn từ ACB và đối tác.',
    cta: 'Xem ngay',
    href: '#',
  },
];

// COMPONENT NHỎ CHO TILE (giữ nguyên markup để không đổi UI)
function Tile({ className, title, desc, cta, href }) {
  return (
    <div className="col">
      <div className={`tile ${className}`}>
        <h3>{title}</h3>
        <p>{desc}</p>
        <a href={href} className="btn-cta">
          {cta}{' '}
          <span className="icon">
            <i className="bi bi-chevron-right"></i>
          </span>
        </a>
      </div>
    </div>
  );
}

function Library() {
  return (
    <>
      <Header />
      <Carousel />
      <main>
        {/* Breadcrumb + title */}
        <div className="library-hero">
          {/* TUỲ CHỈNH: nền/spacing của hero thư viện */}
          <div className="container">
            {/* container: căn giữa + max-width theo breakpoint */}
            <nav aria-label="breadcrumb">
              {/* nav + aria: hỗ trợ truy cập */}
              <ol className="breadcrumb mb-2">
                {/* mb-2: margin-bottom 0.5rem */}
                {breadcrumbs.map((item) => (
                  <li
                    key={item.label}
                    className={`breadcrumb-item${item.current ? ' active' : ''}`}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.current ? (
                      item.label
                    ) : (
                      <a href={item.href}>{item.label}</a>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            <h1 className="page-title h3 mb-3">Thư viện</h1>
            {/* .h3: utility đặt cỡ như <h3> nhưng vẫn giữ semantic <h1>; mb-3: 1rem */}
            <div className="search-hints d-flex align-items-center flex-wrap gap-2">
              {/* d-flex: xếp ngang; align-items-center: căn giữa; flex-wrap: xuống dòng; gap-2: 0.5rem */}
              <span className="text-secondary">Gợi ý tìm kiếm:</span>
              {/* text-secondary: màu chữ phụ */}
              {searchHints.map((hint) => (
                <a key={hint} href="#" className="badge text-bg-light border">
                  {hint}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Tiles: Guides */}
        <section className="tiles">
          {/* tiles: TUỲ CHỈNH wrapper; không phải BS */}
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {/* row-cols-1: 1 cột dưới md; row-cols-md-2: 2 cột ≥768px; g-4: gutter 1.5rem */}
              {tilesTop.map((t) => (
                <Tile key={t.id} {...t} />
              ))}
            </div>
          </div>
        </section>

        {/* Tiles: All sub components in the same style */}
        <section className="tiles">
          {/* lặp lại cùng phong cách tile */}
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {/* 2 cột/row từ md trở lên */}
              {tilesMore.map((t) => (
                <Tile key={t.id} {...t} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Library;
