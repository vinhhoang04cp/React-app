// Security.data.js
// Nếu dự án của bạn chưa bật automatic JSX runtime, giữ import React để JSX trong data hoạt động.
import React from 'react';

export const breadcrumbs = [
  { label: 'Trang chủ', href: '#', current: false },
  { label: 'Nguyên tắc giao dịch an toàn', href: null, current: true },
];

export const slides = [
  {
    bg: "https://picsum.photos/seed/phish-bg/1600/900",
    title: "Thông tin cảnh báo về hình thức lừa đảo khi giao dịch trực tuyến",
    desc: "Nhận biết kịch bản giả mạo, bảo vệ tài khoản, tránh cung cấp OTP/mật khẩu.",
    cta: "Xem chi tiết",
    href: "#",
  },
  {
    bg: "https://picsum.photos/seed/sms-bg/1600/900",
    title: "Cảnh giác với SMS chứa liên kết lạ",
    desc: "Không bấm liên kết và không cài app ngoài kho chính thức.",
    cta: "Xem chi tiết",
    href: "#",
  },
  {
    bg: "https://picsum.photos/seed/limit-bg/1600/900",
    title: "Giảm hạn mức online về 0 khi nghi ngờ",
    desc: "Đăng nhập online.acb.com.vn để điều chỉnh tạm thời, rồi liên hệ hotline.",
    cta: "Xem chi tiết",
    href: "#",
  },
];

export const filters = [
  { label: 'Giao dịch ngân hàng số an toàn', count: 20, active: true },
  { label: 'Giao dịch thẻ an toàn', count: 2, active: false },
  { label: 'Một số Website lừa đảo phổ biến', count: 2, active: false },
];

export const alerts = [
  { img: "https://picsum.photos/seed/acb1/900/675", title: "Cảnh báo", subtitle: "ACB cảnh báo SMS lừa đảo", href: "#" },
  { img: "https://picsum.photos/seed/acb2/900/675", title: "Cảnh báo kịch bản lừa đảo mới lợi dụng việc sáp nhập tỉnh, thành", subtitle: "—", href: "#" },
  { img: "https://picsum.photos/seed/acb3/900/675", title: "Cảnh báo các chiêu thức lừa đảo", subtitle: "—", href: "#" },
  { img: "https://picsum.photos/seed/acb4/900/675", title: "Cảnh báo Thủ đoạn lừa đảo phổ biến", subtitle: "—", href: "#" },
  { img: "https://picsum.photos/seed/acb5/900/675", title: "Cảnh báo mạo danh nhân viên Ngân hàng và cán bộ cơ quan Nhà nước", subtitle: "—", href: "#" },
  { img: "https://picsum.photos/seed/acb6/900/675", title: "Cảnh báo một số website giả mạo, lừa đảo phổ biến 2025", subtitle: "—", href: "#" },
];

export const pages = [1, 2, 3, 4];
export const activePage = 2;

export const principles = [
  {
    icon: "bi bi-bug",
    jsx: (
      <p className="mb-0">
        <span className="fw-semibold">Không tải tệp tin, cài đặt ứng dụng</span>{" "}
        <span className="desc">
          không rõ nguồn gốc và không truy cập đường dẫn lạ từ tin nhắn, email, mạng xã hội, cuộc gọi mạo danh.
        </span>
      </p>
    ),
  },
  {
    icon: "bi bi-key",
    jsx: (
      <p className="mb-0">
        <span className="fw-semibold">Không cung cấp</span>{" "}
        <span className="desc">OTP – Password – Username vào các ứng dụng, website lạ.</span>
      </p>
    ),
  },
  {
    icon: "bi bi-shield-lock",
    jsx: (
      <p className="mb-0">
        <span className="fw-semibold">Đăng ký xác thực khuôn mặt</span>{" "}
        <span className="desc">để tăng cường bảo vệ khi giao dịch trực tuyến theo </span>
        <a href="#" className="link-primary fw-semibold">Quyết định số 2345/QĐ-NHNN</a>
        <span className="desc"> và </span>
        <a href="#" className="link-primary fw-semibold">Thông tư 17, 18/2024/TT-NHNN của Ngân hàng Nhà nước</a>
        <span className="desc">.</span>
      </p>
    ),
  },
  {
    icon: "bi bi-person-lock",
    jsx: (
      <p className="mb-0">
        <span className="fw-semibold">Chủ động</span>{" "}
        <span className="desc">nhập sai mật khẩu 5 lần khi bị mất thông tin bảo mật.</span>
      </p>
    ),
  },
  {
    icon: "bi bi-phone",
    jsx: (
      <p className="mb-0">
        <span className="fw-semibold">Chỉ cài đặt</span>{" "}
        <span className="desc">ứng dụng ACB ONE / ACB ONE BIZ trên </span>
        <span className="fw-semibold">Google Play</span>
        <span className="desc"> hoặc </span>
        <span className="fw-semibold">App Store</span>
        <span className="desc">.</span>
      </p>
    ),
  },
  {
    icon: "bi bi-window",
    custom: true,
    jsx: (
      <>
        <p className="mb-2 text-center">
          <span className="fw-semibold">Website chính thức:</span>
        </p>
        <ul className="list-unstyled small m-0 text-center">
          <li><a className="link-primary" href="https://online.acb.com.vn">https://online.acb.com.vn</a></li>
          <li><a className="link-primary" href="https://business.acb.com.vn">https://business.acb.com.vn</a></li>
          <li><a className="link-primary" href="https://qrportal.acb.com.vn">https://qrportal.acb.com.vn</a></li>
          <li><a className="link-primary" href="https://developer.acb.com.vn">https://developer.acb.com.vn</a></li>
        </ul>
      </>
    ),
  },
];

export const docs = [
  "Chính sách bảo mật thông tin cá nhân",
  "Hướng dẫn mở khóa thẻ trên ứng dụng ACB ONE",
  "Hướng dẫn khóa thẻ trên ứng dụng ACB ONE",
  "Hướng dẫn cách lấy lại mật khẩu đăng nhập trên ACB ONE BIZ phiên bản web",
  "Hướng dẫn cách thay đổi thông tin cá nhân trên ứng dụng ACB ONE",
];

export const actions = [
  {
    img: "https://picsum.photos/seed/act1/450/800",
    alt: "Tắt nguồn/Ngắt kết nối",
    jsx: (
      <p className="small text-secondary m-0">
        Trong trường hợp nghi ngờ hay phát hiện điện thoại bị kiểm soát từ xa, ngay lập tức:{" "}
        <span className="fw-semibold">tắt nguồn điện thoại hoặc ngắt ngay tất cả các kết nối với wifi/4G</span>.
      </p>
    ),
  },
  {
    img: "https://picsum.photos/seed/act2/450/800",
    alt: "Khóa đăng nhập tạm thời",
    jsx: (
      <p className="small text-secondary m-0">
        <span className="fw-semibold">Nhập sai mật khẩu liên tiếp 05 lần</span>{" "}
        để khóa quyền đăng nhập dịch vụ Ngân hàng số của các ứng dụng, website ACB online.
      </p>
    ),
  },
  {
    img: "https://picsum.photos/seed/act3/450/800",
    alt: "Giảm hạn mức về 0",
    jsx: (
      <p className="small text-secondary m-0">
        <span className="fw-semibold">Đăng nhập website</span>{" "}
        <a className="link-primary" href="https://online.acb.com.vn">https://online.acb.com.vn</a>{" "}
        để điều chỉnh hạn mức giao dịch online về 0.
      </p>
    ),
  },
  {
    img: "https://picsum.photos/seed/act4/450/800",
    alt: "Liên hệ ngân hàng",
    jsx: (
      <p className="small text-secondary m-0">
        <span className="fw-semibold">Liên hệ ngay Ngân hàng</span>{" "}
        <a className="link-primary" href="tel:+842838247247">(028) 38 247 247</a> hoặc{" "}
        <a className="link-primary" href="tel:1900545486">1900 54 54 86</a>{" "}
        để tạm khóa các dịch vụ khi phát hiện dấu hiệu nghi ngờ bị lừa đảo/lộ lọt thông tin bảo mật; hoặc đến CN/PGD gần nhất để được hỗ trợ.
      </p>
    ),
  },
  {
    img: "https://picsum.photos/seed/act5/450/800",
    alt: "Khôi phục cài đặt gốc",
    jsx: (
      <p className="small text-secondary m-0">
        <span className="fw-semibold">Khôi phục cài đặt gốc (Factory Reset)</span>{" "}
        đối với thiết bị trong trường hợp phát hiện/ nghi ngờ cài đặt ứng dụng giả mạo.
      </p>
    ),
  },
  {
    img: "https://picsum.photos/seed/act6/450/800",
    alt: "Trình báo cơ quan chức năng",
    jsx: (
      <p className="small text-secondary m-0">
        Nếu có dấu hiệu tội phạm, <span className="fw-semibold">trình báo với Cơ quan Công an</span> nơi gần nhất.
      </p>
    ),
  },
];
