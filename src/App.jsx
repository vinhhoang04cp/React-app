import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Carousel from './components/Homepage/Carousel.jsx'
import Features from './components/Homepage/Features.jsx'
import Offers from './components/Homepage/Offers.jsx'
import Services_5per from './components/Homepage/Services_5per.jsx'
import Tools_acb from './components/Homepage/Tools_acb.jsx'


function App() {

  return (
    <>
      <Header />
      <Carousel />
      <Features />
      <Offers />
      <Services_5per />
      <Tools_acb />
      <Footer />
    </>
  )
}

export default App
