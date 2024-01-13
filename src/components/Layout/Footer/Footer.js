import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-about">
            <h1 className="footer-brand">Cryptoverse</h1>
            <p className="footer-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum sequi eius ipsa dolor quidem.
            </p>
          </div>
          <div className="footer-newsletter">
            <h2 className="footer-headings">get updated</h2>
            <p className="footer-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, debitis?
            </p>
            <form className="newsletter-form">
              <input type="email" name="" id="" />
              <input type="submit" value="subscribe" />
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer