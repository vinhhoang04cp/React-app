import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Homepage from './Homepage.jsx'
import About from './About.jsx'
import Investors from './Investors.jsx'
import Reward from './Reward.jsx'
import Library from './Library.jsx'
import Security from './Security.jsx'
import Liquidation from './Liquidation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/reward" element={<Reward />} />
        <Route path="/library" element={<Library />} />
        <Route path="/security" element={<Security />} />
        <Route path="/liquidation" element={<Liquidation />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
