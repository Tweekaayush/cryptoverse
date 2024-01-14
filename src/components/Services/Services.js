import React from 'react'
import './Services.css'
import mining from '../../assets/images/Services/bitcoin.png'
import wallet from '../../assets/images/Services/wallet.png'
import trading from '../../assets/images/Services/exchange.png'
import shield from '../../assets/images/Services/shield.png'

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="service-container">
          <div className="service-header">
            <h1>Our <span>Services</span></h1>
            <p className='body-text'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic vel vitae, officiis modi deserunt dolorem minus iure? Autem, vel voluptatem!
            </p>
          </div>
          <div className="service-content">
            <div className="service-card">
              <div className="service-card-header">
                  <img src={trading} alt="" />
              </div>
              <div className="service-card-content">
                  <h2>Cryptocurrency trading</h2>
                  <p>     
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolor autem aliquam laboriosam tenetur fugiat eum, incidunt itaque nesciunt. Earum.
                  </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-header">
                  <img src={wallet} alt="" />
              </div>
              <div className="service-card-content">
                  <h2>secure wallet</h2>
                  <p>     
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolor autem aliquam laboriosam tenetur fugiat eum, incidunt itaque nesciunt. Earum.
                  </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-header">
                  <img src={shield} alt="" />
              </div>
              <div className="service-card-content">
                  <h2>safe and secure</h2>
                  <p>     
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolor autem aliquam laboriosam tenetur fugiat eum, incidunt itaque nesciunt. Earum.
                  </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-header">
                  <img src={mining} alt="" />
              </div>
              <div className="service-card-content">
                  <h2>cryptocurrency mining</h2>
                  <p>     
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolor autem aliquam laboriosam tenetur fugiat eum, incidunt itaque nesciunt. Earum.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services