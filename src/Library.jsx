import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/Subpage/Library.css';
import Carousel from '../src/components/Homepage/Carousel';

// Import dữ liệu đã tách
import { breadcrumbs, searchHints, tilesTop, tilesMore } from './Data/library.data.jsx';

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
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-2">
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
            <div className="search-hints d-flex align-items-center flex-wrap gap-2">
              <span className="text-secondary">Gợi ý tìm kiếm:</span>
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
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {tilesTop.map((t) => (
                <Tile key={t.id} {...t} />
              ))}
            </div>
          </div>
        </section>

        {/* Tiles: All sub components in the same style */}
        <section className="tiles">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
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
