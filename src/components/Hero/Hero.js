import React from 'react'
import './Hero.css'
import heroImg from '../../assets/images/Hero/hero.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id="hero">
        <div className="hero-container">
            <div className="hero-header-content">
                <h1 className="hero-heading">
                    Lorem ipsum dolor sit.
                </h1>
                <p className='body-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, velit. Eius dolorem culpa excepturi nesciunt suscipit dolorum iste placeat laboriosam.
                </p>
                <div className="hero-btns">
                    <Link to = '/'>Get Started</Link>
                </div>
            </div>
            <div className="hero-header-img">
                <div className="header-img-bg"></div>
                <img src={heroImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero