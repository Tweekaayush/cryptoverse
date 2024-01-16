import React from 'react'
import './Hero.css'
import heroImg from '../../assets/images/Hero/hero.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id="hero">
        <div className="container">
            <div className="hero-container">
                <div className="hero-header-content">
                    <h1 className="hero-heading">
                        Join the <span>Crypto</span> Revolution
                    </h1>
                    <p className='body-text'>
                        The crypto trading revolution has transformed the way we invest, trade and store value. With its decentralized and transparent nature cyptocurrencies offer a more secure and accessible alternative to traditional financial systems.
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
        </div>
    </section>
  )
}

export default Hero