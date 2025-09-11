// src/data/investorsData.jsx
import React from 'react'

// ====== DỮ LIỆU TÁI SỬ DỤNG (cho .map) ======
export const breadcrumbItems = [
  { label: 'Trang chủ', href: '#' },
  { label: 'Nhà Đầu tư', active: true }
]

export const yearOptions = ['2025', '2024', '2023']

export const reportSlides = [
  [
    {
      src: 'https://m.yodycdn.com/blog/hinh-nen-thien-nhien-4k-yody-vn-11.jpg',
      alt: 'Khung Tài chính bền vững',
      title: 'Khung Tài chính bền vững',
      href: '#'
    },
    {
      src: 'https://m.yodycdn.com/blog/hinh-nen-thien-nhien-4k-yody-vn-11.jpg',
      alt: 'Báo cáo phát triển bền vững',
      title: 'Báo cáo phát triển bền vững',
      href: '#'
    },
    {
      src: 'https://m.yodycdn.com/blog/hinh-nen-thien-nhien-4k-yody-vn-11.jpg',
      alt: 'Báo cáo quản trị',
      title: 'Báo cáo quản trị',
      href: '#'
    }
  ],
  [
    {
      src: 'https://m.yodycdn.com/blog/hinh-nen-thien-nhien-4k-yody-vn-11.jpg',
      alt: 'Báo cáo thường niên',
      title: 'Báo cáo thường niên',
      href: '#'
    },
    {
      src: 'https://m.yodycdn.com/blog/hinh-nen-thien-nhien-4k-yody-vn-11.jpg',
      alt: 'Báo cáo tài chính',
      title: 'Báo cáo tài chính',
      href: '#'
    },
    {
      src: 'https://m.yodycdn.com/blog/hinh-nen-thien-nhien-4k-yody-vn-11.jpg',
      alt: 'Tài liệu khác',
      title: 'Tài liệu khác',
      href: '#'
    }
  ]
]

export const agmItems = [
  {
    title:
      '1. Thông báo về ngày đăng ký cuối cùng để thực hiện quyền tham dự họp Đại hội đồng cổ đông thường niên năm 2025',
    btnClass: 'btn-download'
  },
  {
    title:
      '2. Thông báo về việc tổ chức họp Đại hội đồng cổ đông thường niên năm 2025',
    btnClass: 'btn-download'
  },
  { title: '2.1. Giấy ủy quyền cá nhân', btnClass: 'btn btn-outline-primary btn-download' },
  { title: '2.2. Giấy ủy quyền tổ chức', btnClass: 'btn btn-outline-primary btn-download' }
]

export const charterItems = [
  { title: 'Bản cập nhật 2025' },
  { title: 'Quy chế quản trị nội bộ' }
]

export const disclosureItems = [
  { title: 'Kết quả hoạt động Quý I/2025 – Bản trình bày & Hỏi đáp' },
  { title: 'Thông báo mời họp ĐHĐCĐ 2025 – Tài liệu họp' }
]

export const toolkitItems = [
  { title: 'ACB - Tài liệu NĐT - 1H25' },
  { title: 'ACB - Tài liệu NĐT - 1Q25' }
]

export const contactList = [
  {
    icon: 'bi bi-geo-alt',
    html: (
      <div>
        <div className="fw-semibold">
          442 Nguyễn Thị Minh Khai, Phường 5, Quận 3, TP.Hồ Chí Minh
        </div>
      </div>
    )
  },
  {
    icon: 'bi bi-envelope',
    html: (
      <div>
        <a href="mailto:ir@acb.com.vn">ir@acb.com.vn</a>
      </div>
    )
  },
  {
    icon: 'bi bi-globe2',
    html: (
      <div>
        <a href="https://acb.com.vn" target="_blank" rel="noopener">
          www.acb.com.vn
        </a>
      </div>
    )
  }
]

export const subscribeFields = [
  {
    label: 'Họ và tên *',
    type: 'text',
    placeholder: 'Nguyễn Văn A'
  },
  {
    label: 'Email *',
    type: 'email',
    placeholder: 'nguyenvana@gmail.com'
  },
  {
    label: 'Tên doanh nghiệp *',
    type: 'text',
    placeholder: 'Cty TNHH AZX'
  }
]
