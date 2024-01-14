import React from 'react'
import Hero from '../../components/Hero/Hero'
import Market from '../../components/Market/Market'
import TrendingCarousel from '../../components/TrendingCarousel/TrendingCarousel'
import Services from '../../components/Services/Services'

const Home = () => {
  return (
    <>
      <Hero />
      <TrendingCarousel/>
      <Market/>
      <Services/>
    </>
  )
}

export default Home