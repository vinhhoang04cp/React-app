import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/Subpage/Library.css'; 


function Library() {
  return (
    <>
    <Header />
    <main>
      {/* Breadcrumb + title */}
      <div className="library-hero"> {/* TUỲ CHỈNH: nền/spacing của hero thư viện */}
        <div className="container"> {/* container: căn giữa + max-width theo breakpoint */}
          <nav aria-label="breadcrumb"> {/* nav + aria: hỗ trợ truy cập */}
            <ol className="breadcrumb mb-2"> {/* breadcrumb: style đường dẫn; mb-2: margin-bottom 0.5rem */}
              <li className="breadcrumb-item"><a href="#">Trang chủ</a></li> {/* .breadcrumb-item: phần tử cấp 1 */}
              <li className="breadcrumb-item active" aria-current="page">Thư viện</li> {/* active: trạng thái hiện tại (text nhạt, không link) */}
            </ol>
          </nav>
          <h1 className="page-title h3 mb-3">Thư viện</h1> {/* .h3: utility đặt cỡ như <h3> nhưng vẫn giữ semantic <h1>; mb-3: 1rem */}
          <div className="search-hints d-flex align-items-center flex-wrap gap-2"> {/* d-flex: xếp ngang; align-items-center: căn giữa theo trục dọc; flex-wrap: xuống dòng khi chật; gap-2: khoảng cách 0.5rem giữa items */}
            <span className="text-secondary">Gợi ý tìm kiếm:</span> {/* text-secondary: màu chữ phụ */}
            <a href="#" className="badge text-bg-light border">Thẻ tín dụng ACB Visa</a> {/* badge: huy hiệu nhỏ; text-bg-light: nền & chữ auto tông sáng; border: viền 1px mặc định */}
            <a href="#" className="badge text-bg-light border">Gửi tiết kiệm online</a>
            <a href="#" className="badge text-bg-light border">Bảo hiểm nhân thọ</a>
            <a href="#" className="badge text-bg-light border">Vay mua nhà</a>
            <a href="#" className="badge text-bg-light border">Đầu tư chứng khoán</a>
          </div>
        </div>
      </div>

      {/* Tiles: Guides */}
      <section className="tiles"> {/* tiles: TUỲ CHỈNH wrapper; không phải BS */}
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4"> {/* row-cols-1: 1 cột/row dưới md; row-cols-md-2: 2 cột/row từ ≥768px; g-4: gutter 1.5rem 2 chiều */}
            <div className="col"> {/* col: cột auto khi dùng row-cols-* */}
              <div className="tile tile-acb-one"> {/* tile-*: TUỲ CHỈNH: card lớn dạng banner */}
                <h3>Hướng dẫn sử dụng ACB ONE</h3>
                <p>Khám phá các tính năng mới nhất của ACB ONE: Chuyển tiền nhanh 24/7, Thanh toán QR, Đặt lệnh chứng khoán, Mở tài khoản online và nhiều tiện ích khác.</p>
                <a href="#" className="btn-cta">Xem hướng dẫn <span className="icon"><i className="bi bi-chevron-right"></i></span></a> {/* btn-cta: TUỲ CHỈNH; icon dùng Bootstrap Icons (.bi-chevron-right) */}
              </div>
            </div>
            <div className="col">
              <div className="tile tile-acb-biz">
                <h3>Hướng dẫn ACB ONE BIZ</h3>
                <p>Giải pháp ngân hàng số toàn diện cho doanh nghiệp: Quản lý tài khoản đa người dùng, Chuyển tiền hàng loạt, Thanh toán lương và Kết nối ERP.</p>
                <a href="#" className="btn-cta">Xem hướng dẫn <span className="icon"><i className="bi bi-chevron-right"></i></span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tiles: All sub components in the same style */}
      <section className="tiles"> {/* lặp lại cùng phong cách tile */}
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4"> {/* 2 cột/row từ md trở lên */}
            <div className="col">
              <div className="tile tile-personal">
                <h3>Ưu đãi cho Khách hàng Cá nhân</h3>
                <p>Hoàn tiền đến 2% với thẻ tín dụng, Lãi suất ưu đãi cho vay mua nhà từ 7.5%/năm, Tặng 500.000đ cho khách hàng mới và nhiều ưu đãi hấp dẫn khác.</p>
                <a href="#" className="btn-cta">Xem ưu đãi <span className="icon"><i className="bi bi-chevron-right"></i></span></a>
              </div>
            </div>
            <div className="col">
              <div className="tile tile-digital">
                <h3>Ưu đãi Ngân hàng Số</h3>
                <p>Miễn phí chuyển tiền 24/7, Hoàn tiền 5% cho thanh toán QR, Tặng data 4G khi nạp tiền điện thoại và các ưu đãi độc quyền trên ACB ONE.</p>
                <a href="#" className="btn-cta">Xem ưu đãi <span className="icon"><i className="bi bi-chevron-right"></i></span></a>
              </div>
            </div>
            <div className="col">
              <div className="tile tile-business">
                <h3>Ưu đãi Doanh nghiệp</h3>
                <p>Lãi suất vay ưu đãi từ 6.5%/năm, Miễn phí duy trì dịch vụ ACB ONE BIZ, Ưu đãi đặc biệt cho doanh nghiệp xuất nhập khẩu và SME.</p>
                <a href="#" className="btn-cta">Xem ưu đãi <span className="icon"><i className="bi bi-chevron-right"></i></span></a>
              </div>
            </div>
            <div className="col">
              <div className="tile tile-docs">
                <h3>Biểu mẫu &amp; Tài liệu</h3>
                <p>Tải về các biểu mẫu mở tài khoản, đăng ký dịch vụ, hợp đồng tín dụng và các tài liệu quan trọng khác.</p>
                <a href="#" className="btn-cta">Tải biểu mẫu <span className="icon"><i className="bi bi-chevron-right"></i></span></a>
              </div>
            </div>
            <div className="col">
              <div className="tile tile-knowledge">
                <h3>Kiến thức Tài chính</h3>
                <p>Khám phá các bài viết về quản lý tài chính cá nhân, đầu tư thông minh, kinh doanh hiệu quả và các xu hướng ngân hàng số.</p>
                <a href="#" className="btn-cta">Xem bài viết <span className="icon"><i className="bi bi-chevron-right"></i></span></a>
              </div>
            </div>
            <div className="col">
              <div className="tile tile-news">
                <h3>Tin tức &amp; Thông báo</h3>
                <p>Cập nhật tin tức mới nhất về hoạt động của ACB, thông báo quan trọng và các sự kiện sắp diễn ra.</p>
                <a href="#" className="btn-cta">Xem tin tức <span className="icon"><i className="bi bi-chevron-right"></i></span></a>
              </div>
            </div>
            <div className="col">
              <div className="tile tile-video">
                <h3>Video Hướng dẫn</h3>
                <p>Thư viện video hướng dẫn chi tiết về cách sử dụng sản phẩm, dịch vụ và các tính năng mới của ACB.</p>
                <a href="#" className="btn-cta">Xem video <span className="icon"><i className="bi bi-chevron-right"></i></span></a>
              </div>
            </div>
            <div className="col">
              <div className="tile tile-special">
                <h3>Chương trình Đặc biệt</h3>
                <p>Khám phá các chương trình khuyến mãi độc đáo, sự kiện đặc biệt và ưu đãi giới hạn từ ACB và đối tác.</p>
                <a href="#" className="btn-cta">Xem ngay <span className="icon"><i className="bi bi-chevron-right"></i></span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
export default Library;
