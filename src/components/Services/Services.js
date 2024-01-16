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
              Explore our range of cryptocurrency services and take advantage of the benefits of the digital currency revolution.
            </p>
          </div>
          <div className="service-content">
            <div className="service-card">
              <div className="service-card-header">
                <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 120.48">
                  <path fill='#ffffff' d="M15.76,64.55c-1.41,20.5,1.74,33.09,24.15,33.09h3.28v6.25c0,3.12.73,3.66,3,1.52L58.35,93.85c1.47-1.39,1.26-2.3-.14-3.65l-12-11.51c-2.1-2.13-3-1.53-3,1.4v7.35c-20.15,1.27-17.12-11-17.12-22.89Zm91.15-8.45C108.32,35.6,105.17,23,82.76,23H79.48V16.76c0-3.12-.74-3.66-3-1.52L64.32,26.8c-1.47,1.39-1.26,2.3.14,3.65L76.47,42c2.1,2.12,3,1.52,3-1.4V33.21c20.16-1.27,17.13,11,17.13,22.89ZM94.83,64.38a28.06,28.06,0,1,0,19.83,8.22,27.92,27.92,0,0,0-19.83-8.22ZM86.46,99.24V85.6c.08-1-.61-1.39-1.71-1.35H82.11V80.57H87.8V76H91v4.61h2.83V76h3.22v4.67c.71,0,1.11.05,1.76.09,2.93.17,5,.64,6.27,3.5a6,6,0,0,1,.55,2.49,4.47,4.47,0,0,1-.8,2.63,4.84,4.84,0,0,1-2.35,2c7.67,1,6.26,11.87-1.77,12.72-.68.07-2,.16-3.66.21v4.66H93.85v-4.6H91v4.6H87.79v-4.6H82.1l.79-3.56h2.54c.82.12,1.1-.46,1-1.5ZM97.07,84.87v5.36c3.83-.93,3.58-4.37,0-5.36Zm0,8.65v6.63a4.4,4.4,0,0,0,.73-.15c3.89-.73,4.78-5.26.14-6.29a5,5,0,0,0-.87-.19Zm-3.22,6.75V93.4H92.22v6.87Zm0-9.81V84.6H92.22v5.86ZM28.05,0A28.06,28.06,0,1,0,47.88,8.22,27.92,27.92,0,0,0,28.05,0ZM30.9,13.53a10.86,10.86,0,0,1,2.71.82l.18-.09a2.77,2.77,0,0,1,3.25.59h0a2.84,2.84,0,0,1,.6,1.16,14.08,14.08,0,0,1,0,4.67,2.84,2.84,0,0,1-.6,1.16c-1.14,1.52-3.83,1-4.58-.8a3.59,3.59,0,0,1-.26-1,5.46,5.46,0,0,0-1.56-.79,7.12,7.12,0,0,0-2.13-.3,9.35,9.35,0,0,0-2.13.21c-2.33.58-3.61,3-.84,4.06a11.92,11.92,0,0,0,1.87.51l3.11.67a18.84,18.84,0,0,1,3.48,1,8.34,8.34,0,0,1,2.41,1.49,7.12,7.12,0,0,1,1.8,2.54,8.46,8.46,0,0,1,.59,3.21,8.09,8.09,0,0,1-.54,3,8.78,8.78,0,0,1-1.63,2.6,9.34,9.34,0,0,1-2.62,2,13.24,13.24,0,0,1-3.11,1.09v1.83a3.86,3.86,0,0,1-.2,1.39,2.37,2.37,0,0,1-.58.88,2.6,2.6,0,0,1-.92.66,3,3,0,0,1-2.26,0,2.6,2.6,0,0,1-.92-.66,2.65,2.65,0,0,1-.58-.88,4.09,4.09,0,0,1-.19-1.39V41.32c-.5-.12-1-.26-1.51-.43s-1.08-.39-1.62-.62a4,4,0,0,1-.83.51,2.59,2.59,0,0,1-1.08.26A3.19,3.19,0,0,1,19,40.83a2.59,2.59,0,0,1-.94-.66,2.68,2.68,0,0,1-.6-1.15,6.11,6.11,0,0,1-.18-1.57v-3a6.13,6.13,0,0,1,.18-1.58,2.74,2.74,0,0,1,5-.77c.4.68.42,1.59,1,2.16a7.09,7.09,0,0,0,4.67,1.56,6.48,6.48,0,0,0,4.08-1.26,2.63,2.63,0,0,0,.75-.86,2.24,2.24,0,0,0-1.45-3.25,12.73,12.73,0,0,0-2-.54l-3.53-.71a13.74,13.74,0,0,1-3.35-1.07,8,8,0,0,1-2.4-1.76,7.6,7.6,0,0,1,.14-10.13,8.29,8.29,0,0,1,2.34-1.82,9.85,9.85,0,0,1,2.58-.92V13a4.28,4.28,0,0,1,.19-1.4,2.82,2.82,0,0,1,5.27,0A4.28,4.28,0,0,1,30.9,13v.52Z"/>
                </svg>
              </div>
              <div className="service-card-content">
                  <h2>Cryptocurrency trading</h2>
                  <p>     
                    Our cryptocurrency trading platform is designed for both novice and experienced traders, offering a range of tools and features to help users maximize their profits. With 24/7 support and advanced security measures users cand trade with confidence and peace of mind.
                  </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-header">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="wallet">
                    <path fill="#ffffff" d="M93 48.627h-.5V34.968c0-4.263-3.157-7.792-7.254-8.398v-3.073c0-4.687-3.813-8.5-8.5-8.5H72.98l-1.983-5.285a1.5 1.5 0 0 0-1.864-.901l-19.201 6.186H10.735c-3.989 0-7.235 3.246-7.235 7.235V82.76c0 4.687 3.813 8.5 8.5 8.5h72c4.687 0 8.5-3.813 8.5-8.5V69.101h.5c1.93 0 3.5-1.57 3.5-3.5V52.127c0-1.929-1.57-3.5-3.5-3.5zM74.106 17.998h2.64c3.032 0 5.5 2.467 5.5 5.5v2.971h-4.961l-.299-.797-2.88-7.674zm-4.33-3 2.437 6.494 1.868 4.977H24.109l44.582-14.362 1.085 2.891zm-59.041 3h29.884l-18.84 6.07-7.453 2.401h-3.591c-2.335 0-4.235-1.9-4.235-4.235s1.9-4.236 4.235-4.236zM89.5 82.76c0 3.033-2.468 5.5-5.5 5.5H12a5.506 5.506 0 0 1-5.5-5.5V28.096c.021.016.046.026.068.042.262.185.535.354.821.504.053.028.109.052.163.079.265.131.538.246.82.344.048.017.094.036.142.052.312.101.633.177.962.235.073.013.147.023.221.034.34.049.685.083 1.038.083H84c3.032 0 5.5 2.467 5.5 5.5v13.659h-9.938c-4.687 0-8.5 3.813-8.5 8.5v3.474c0 4.687 3.813 8.5 8.5 8.5H89.5V82.76zm4-17.159a.5.5 0 0 1-.5.5H79.562a5.506 5.506 0 0 1-5.5-5.5v-3.474c0-3.033 2.468-5.5 5.5-5.5H93a.5.5 0 0 1 .5.5v13.474z"></path>
                    <path fill="#ffffff"d="M83.449 54.522a4.347 4.347 0 0 0-4.343 4.342c0 2.395 1.948 4.342 4.343 4.342s4.342-1.948 4.342-4.342a4.347 4.347 0 0 0-4.342-4.342zm0 5.685c-.74 0-1.343-.602-1.343-1.342a1.343 1.343 0 0 1 2.685 0c0 .739-.602 1.342-1.342 1.342z"></path>
                  </svg>
              </div>
              <div className="service-card-content">
                  <h2>secure wallet</h2>
                  <p>     
                    Our secure cryptocurrency wallet is designed to prioritize user security and privacy. With easy to use features and a streamlined interface users can access their digital assets quickly and securely, from anywhere in the world.
                  </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-header">
                  <svg viewBox="0 0 111.811 122.88">
                    <g><path fill='#ffffff' fillRule="evenodd" d="M55.713,0c20.848,13.215,39.682,19.467,55.846,17.989 c2.823,57.098-18.263,90.818-55.63,104.891C19.844,109.708-1.5,77.439,0.083,17.123C19.058,18.116,37.674,14.014,55.713,0L55.713,0 z M56.163,19.543c14.217,9.011,27.061,13.274,38.083,12.268c1.925,38.936-12.454,61.93-37.935,71.526 c-0.161-0.059-0.319-0.12-0.479-0.18V19.796L56.163,19.543L56.163,19.543z M55.735,7.055 c18.454,11.697,35.126,17.232,49.434,15.923c2.498,50.541-16.166,80.39-49.241,92.846C23.986,104.165,5.091,75.603,6.493,22.211 C23.29,23.091,39.768,19.46,55.735,7.055L55.735,7.055z"/></g>
                  </svg>
              </div>
              <div className="service-card-content">
                  <h2>safe and secure</h2>
                  <p>     
                    Our safe and secure cryptocurrency is designed with user privacy and security in mind. With advanced authenticatoin and multi-factor verification processes, users can enjoy complete control over their digital assets without compromising on security.
                  </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-header">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 511.96">
                    <path fill="#ffffff" d="M198.15 257.89c21.93 7.32 52.45 11.85 86.37 11.85 33.91 0 64.43-4.53 86.36-11.85 19.25-6.42 31.16-14.2 31.16-21.82 0-7.6-11.91-15.38-31.16-21.81-2.74-.91-5.63-1.79-8.64-2.61l26.54-8.28c16.76 7.57 27.46 17.37 29.58 28.57.31.87.48 1.82.48 2.8v230.3c0 15.96-30.5 30.09-42.67 34.15-23.63 7.89-56.05 12.77-91.65 12.77-35.62 0-68.04-4.88-91.66-12.77-12.45-4.16-42.41-17.82-42.41-34.15v-5.35c0-74.54-.17-149.09-.17-223.62 0-5 1.68-9.77 4.83-14.22l11.64-11.01c6.87-4.73 15.71-8.9 26.11-12.37 17.68-5.91 40.3-10.13 65.49-11.87a409.098 409.098 0 0 1 9.98 16.16c-27.38 1.19-51.8 5.37-70.18 11.5-40.85 13.63-41.97 29.62 0 43.63zm-17.1-148.14 30.11 31.56L37.09 306.02C16.2 325.81-13.74 294.06 7 274.44l174.05-164.69zm184.52-23.38 19.86 7.85-47.01 89.66 27.15-97.51zm73.94 57.92 8.49 19.6-96.64 30.15 88.15-49.75zM232.62 50.21l37.17 38.97a3.493 3.493 0 0 1-.12 4.94L264.56 99c36.64 47.7 53.7 103.43 50.11 153.95-16.42-43.15-42.5-87.09-77.47-127.86l-12.34 11.77a3.493 3.493 0 0 1-4.94-.12l-37.17-38.96a3.505 3.505 0 0 1 .12-4.95l11.96-11.4C154.82 44.99 111.31 17.59 68.43.24c51.08-2.62 106.95 16.3 153.87 54.99l5.38-5.14a3.493 3.493 0 0 1 4.94.12zM362.8 445.07c7.26 0 13.14 5.89 13.14 13.14 0 7.26-5.88 13.14-13.14 13.14-7.25 0-13.14-5.88-13.14-13.14 0-7.25 5.89-13.14 13.14-13.14zm0-74.26c7.26 0 13.14 5.88 13.14 13.14 0 7.25-5.88 13.14-13.14 13.14-7.25 0-13.14-5.89-13.14-13.14 0-7.26 5.89-13.14 13.14-13.14zm0-77.35c7.26 0 13.14 5.88 13.14 13.14 0 7.25-5.88 13.14-13.14 13.14-7.25 0-13.14-5.89-13.14-13.14 0-7.26 5.89-13.14 13.14-13.14zm39.28 119.49c-6.85 4.69-15.58 8.83-25.91 12.27-23.63 7.89-56.05 12.77-91.65 12.77-35.62 0-68.04-4.88-91.66-12.77-10.19-3.4-18.88-7.47-25.69-12.09v50.04c1.51 7.09 13.07 14.25 30.98 20.23 21.93 7.32 52.45 11.85 86.37 11.85 33.91 0 64.43-4.53 86.36-11.85 13.29-4.44 23.09-9.52 27.87-14.75 3.95-4.31 3.33-7.15 3.33-12.31v-43.39zM167.17 389.2c1.51 7.09 13.07 14.25 30.98 20.23 21.93 7.32 52.45 11.85 86.37 11.85 33.91 0 64.43-4.53 86.36-11.85 19.25-6.43 31.16-14.21 31.16-21.82h.09v-48.63c-6.86 4.69-15.63 8.82-25.96 12.27-23.63 7.89-56.05 12.76-91.65 12.76-35.62 0-68.04-4.87-91.66-12.76-10.19-3.4-18.88-7.47-25.69-12.09v50.04zm0-73.97c1.51 7.09 13.07 14.25 30.98 20.22 21.93 7.33 52.45 11.86 86.37 11.86 33.91 0 64.43-4.53 86.36-11.86 19.25-6.42 31.16-14.2 31.16-21.81h.09v-52.22c-6.86 4.69-15.63 8.82-25.96 12.27-23.63 7.88-56.04 12.76-91.65 12.76-35.62 0-68.04-4.88-91.66-12.76-10.19-3.4-18.88-7.48-25.69-12.09v53.63z"/>
                  </svg>
              </div>
              <div className="service-card-content">
                  <h2>cryptocurrency mining</h2>
                  <p>     
                    Our cryptocurrency mining services are designed to maximize profitability while minimizing costs. With low electricity rates and advanced mining algorithms, users can earn more cryptocurrency with less energy sonsumption and equipment mantenance.
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