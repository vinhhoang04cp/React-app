import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import Investors from './Investors.jsx'
import Reward from './Reward.jsx'
import Library from './Library.jsx'
import Security from './Security.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/reward" element={<Reward />} />
        <Route path="/library" element={<Library />} />
        <Route path="/security" element={<Security />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
