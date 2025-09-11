import React from "react";

// ==================== DATA (export riêng) ====================
export const activeSlideIndex = 2; // slide thứ 3 active lúc load

export const slides = [
  // Slide 1
  [
    { icon: "bi bi-receipt", title: "Thanh toán hóa đơn bằng điểm thưởng", desc: "Biến điểm thưởng thành giá trị tiết kiệm thực tế mỗi khi thanh toán hóa đơn Nước, Internet, Nạp di động trả trước..." },
    { icon: "bi bi-arrow-down-up", title: "Dễ dàng chuyển điểm", desc: "Khi là khách hàng ưu tiên hoặc tham gia gói sản phẩm \"Dịch vụ tài chính Gia Đình Việt\"" },
    { icon: "bi bi-stars", title: "Kho quà hấp dẫn", desc: "Từ các thương hiệu yêu thích" },
  ],
  // Slide 2
  [
    { icon: "bi bi-lightning-charge", title: "Săn quà mỗi ngày", desc: "Deal HOT chỉ từ 1 điểm. Nhận ưu đãi quanh năm." },
    { icon: "bi bi-credit-card-2-front", title: "Tích điểm không giới hạn", desc: "Khi chi tiêu bằng thẻ tín dụng ACB." },
    { icon: "bi bi-heart", title: "Đổi quà theo sở thích", desc: "Mua sắm, Ăn uống, Giải trí và hơn thế nữa." },
  ],
  // Slide 3 (active)
  [
    { icon: "bi bi-receipt", title: "Thanh toán hóa đơn bằng điểm thưởng", desc: "Biến điểm thưởng thành giá trị tiết kiệm thực tế mỗi khi thanh toán hóa đơn Nước, Internet, Nạp di động trả trước..." },
    { icon: "bi bi-arrow-down-up", title: "Dễ dàng chuyển điểm", desc: "Khi là khách hàng ưu tiên hoặc tham gia gói sản phẩm \"Dịch vụ tài chính Gia Đình Việt\"" },
    { icon: "bi bi-stars", title: "Kho quà hấp dẫn", desc: "Từ các thương hiệu yêu thích" },
  ],
  // Slide 4
  [
    { icon: "bi bi-gift-fill", title: "Ưu đãi dịp đặc biệt", desc: "Sự kiện lễ tết, Black Friday, sinh nhật ACB..." },
    { icon: "bi bi-shield-check", title: "An toàn bảo mật", desc: "Chuẩn xác và minh bạch khi đổi quà/chi tiêu điểm." },
    { icon: "bi bi-bag-check", title: "Mua sắm linh hoạt", desc: "Đổi e-voucher, thanh toán hóa đơn, nạp dịch vụ." },
  ],
  // Slide 5
  [
    { icon: "bi bi-receipt", title: "Thanh toán hóa đơn bằng điểm thưởng", desc: "Biến điểm thưởng thành tiết kiệm thực tế cho gia đình." },
    { icon: "bi bi-arrow-down-up", title: "Dễ dàng chuyển điểm", desc: "Chia sẻ điểm linh hoạt cho người thân." },
    { icon: "bi bi-stars", title: "Kho quà hấp dẫn", desc: "Nhiều thương hiệu và danh mục yêu thích." },
  ],
];

export const accordionItems = [
  { key: "Food",   title: "Ăn uống",  body: "Gợi ý: nhà hàng, cà phê, fast food, e-voucher giảm giá..." },
  { key: "Fun",    title: "Giải trí", body: "Rạp phim, công viên giải trí, gói streaming..." },
  { key: "Beauty", title: "Làm đẹp",  body: "Spa, chăm sóc tóc/da, mỹ phẩm..." },
  { key: "Shop",   title: "Mua sắm",  body: "Siêu thị, thời trang, điện máy..." },
  { key: "Util",   title: "Tiện ích", body: "Nạp điện thoại, thanh toán hóa đơn, dịch vụ số..." },
];

export const pointCategories = [
  {
    title: "Thẻ",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
    alt: "Thẻ",
    href: "#",
  },
  {
    title: "Khách hàng ưu tiên",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    alt: "Khách hàng ưu tiên",
    href: "#",
  },
  {
    title: "Bảo hiểm",
    img: "https://images.unsplash.com/photo-1520975682031-a603130fc8a1?q=80&w=1200&auto=format&fit=crop",
    alt: "Bảo hiểm",
    href: "#",
  },
];

export const stepsVoucher = [
  <>Chọn mục “ACB Rewards” tại màn hình chính.</>,
  <>Nhấn vào danh mục quà tặng muốn đổi.</>,
  <>Xem quà tặng trong từng danh mục.</>,
  <>Xem chi tiết quà tặng, chọn giá trị đổi và nhấn <em>Đổi ngay</em>.</>,
  <>Nhấn <em>Xác nhận</em> để hoàn tất.</>,
  <>Màn hình hiển thị đổi quà thành công, chọn <em>Xem quà đã đổi</em>.</>,
  <>Xem chi tiết quà tặng đã đổi.</>,
];

export const stepsBill = [
  <>Chọn <em>Thanh toán</em> tại trang chủ ACB ONE.</>,
  <>Chọn hóa đơn cần thanh toán tại mục <em>Tất cả dịch vụ</em>.</>,
  <>Chọn <em>Số tài khoản (VND)</em> để thay đổi nguồn tiền.</>,
  <>Chọn nguồn tiền là <em>Điểm ACB Rewards</em>.</>,
  <>Kiểm tra thông tin và chọn <em>Tiếp tục</em>.</>,
  <>Chọn <em>Xác nhận</em> thông tin giao dịch.</>,
  <>Nhập mật mã <em>Safekey</em>.</>,
  <>Chọn <em>Nhập OTP – Xác nhận</em>.</>,
  <>Vào <em>Lịch sử điểm Rewards</em> để xem lại giao dịch.</>,
  <>Xem trạng thái giao dịch.</>,
];
