import React from 'react'
import './DownloadSection.css'
import google from '../../assets/images/Download/google.png'
import apple from '../../assets/images/Download/apple.png'

const DownloadSection = () => {
  return (
    <section id="download">
        <div className="container">
            <div className="download-container">
                <h1>Download the <span>Cryptoverse</span> app on your mobile.</h1>
                <div className="download-apk-images">
                    <img src={google} alt="" />
                    <img src={apple} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default DownloadSection