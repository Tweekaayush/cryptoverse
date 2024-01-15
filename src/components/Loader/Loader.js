import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div className="loader">
        <h1>Loading</h1>
        <div className="loading-animation">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
    </div>
  )
}

export default Loader