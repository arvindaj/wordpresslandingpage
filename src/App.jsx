import { useState } from 'react'
import './App.css'
import Headersection from './component/header'
import HeroSection from './component/hero'
import WordPressSection from './component/wordpress'
import WordPressService from './component/wordpressservices'
import WordPressBenfits from './component/wordpressbenefits'
import WordPressTechSection from './component/wordpresstech'
import WordPressAgency from './component/wordpressagency'
import ExploreCard from './component/explorecard'
import PortfolioSection from './component/portfoliosection'
import ContactCard from './component/contact'
import Testimonial from './component/testimonial'
import Footer from './component/footer'
import SlideSection from './component/slidesection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Headersection/>
     <HeroSection/>
     <WordPressSection/>
     <WordPressService/>
     <WordPressBenfits/>
     <WordPressTechSection/>
     <WordPressAgency/>
     <ExploreCard/>
     <PortfolioSection/>
     <SlideSection/>
     <ContactCard/>
     <Testimonial/>
     <Footer/>
    </>
  )
}

export default App
