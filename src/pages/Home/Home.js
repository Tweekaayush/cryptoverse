import React, { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import Market from '../../components/Market/Market'
import TrendingCarousel from '../../components/TrendingCarousel/TrendingCarousel'
import Services from '../../components/Services/Services'
import DownloadSection from '../../components/DownloadSection/DownloadSection'

const Home = () => {

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])

  return (
    <>
      <Hero />
      <TrendingCarousel/>
      <Market/>
      <Services/>
      <DownloadSection/>
    </>
  )
}

export default Home