import React, {useEffect, useState} from 'react'
import './Footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram, faLinkedin, faXTwitter} from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom'

const Footer = () => {

  const [year , setYear] = useState();

    const getYear = () =>  setYear(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])

  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="upper-footer">
            <div>
              <div className="footer-about">
                <h1 className="footer-brand">Cryptoverse</h1>
                <p className="footer-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum sequi eius ipsa dolor quidem.
                </p>
                <ul className="footer-links">
                  <li>
                    <a href="/">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="footer-newsletter">
                <h2 className="footer-heading">get updated</h2>
                <p className="footer-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, debitis?
                </p>
                <form className="newsletter-form">
                  <input type="email" name="" id="" placeholder='Email'/>
                  <input type="submit" value="subscribe" />
                </form>
              </div>
            </div>
            <div>
              <div className="footer-services">
                <h2 className="footer-heading">Services</h2>
                <ul className="footer-service-links">
                  <li>
                    <Link to='/'>Card information</Link>
                  </li>
                  <li>
                    <Link to='/'>Easy transaction</Link>
                  </li>
                  <li>
                    <Link to='/'>Money Analysis</Link>
                  </li>
                  <li>
                    <Link to='/'>System & condition</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="footer-support">
                <h2 className="footer-heading">support</h2>
                <ul className="footer-support-links">
                  <li>
                    <Link to='/'>FAQ</Link>
                  </li>
                  <li>
                    <Link to='/'>Contact Us</Link>
                  </li>
                  <li>
                    <Link to='/'>News</Link>
                  </li>
                  <li>
                    <Link to='/'>Career</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lower-footer">
            <p>Copyright &copy; {year}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer