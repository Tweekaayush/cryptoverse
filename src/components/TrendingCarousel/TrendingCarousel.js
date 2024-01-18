import React, {useContext, useEffect, useState} from 'react'
import './TrendingCarousel.css'
import AliceCarousel from "react-alice-carousel";
import { TrendingCoins } from '../../config/api';
import { Link } from 'react-router-dom';
import { CurrencyContext } from '../../context/CurrencyContext';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios'

const TrendingCarousel = () => {

  const {symbol, currency} = useContext(CurrencyContext)
  const [trendingCoins, setTrendingCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [placeholderCoins, setPlaceholderCoins] = useState([1, 2, 3, 4, 5])

  const fetchTrendingCoins = async() =>{
    setLoading(true)
    await axios.get(TrendingCoins(currency))
          .then((res) =>{ 
            setTrendingCoins(res.data)
            setLoading(false)
          })
          .catch((e)=>console.log(e))
  }

  const handleResize = () =>{
    const windowWidth = document.body.clientWidth

    if(windowWidth > 1024)
      setPlaceholderCoins([1, 2, 3, 4, 5])
    else if(windowWidth > 786)
      setPlaceholderCoins([1, 2, 3, 4])
    else if(windowWidth>480)
      setPlaceholderCoins([1, 2, 3])
    else
      setPlaceholderCoins([1, 2])
  }

  useEffect(()=>{
    fetchTrendingCoins()  
  }, [currency])

  useEffect(()=>{
    window.addEventListener('resize', handleResize)
    return () =>{
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const responsive = {
    0: {
      items: 2,
    },

    480:{
      items: 3
    },
    768: {
        items:4,
    },
    1024:{
        items:5,
    }
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
    
  return (
    <section id="trending">
      <div className="container">
        <div className="trending-carousel-container">
        {
          loading ? (
            <div className="trending-skeleton-container">
              {
                placeholderCoins.map((coin, i)=>{
                  return (
                    <div key={i}>
                      <div className="skeleton-circle"></div>
                      <div className="skeleton-bar" style={{width:'100px'}}></div>
                      <div className="skeleton-bar"></div>
                    </div>
                  )
                })
              }
            </div>
          ):(    
            <AliceCarousel
              mouseTracking
              infinite
              autoPlayInterval={2000}
              animationDuration={1500}
              disableDotsControls
              disableButtonsControls
              responsive={responsive}
              items={
                trendingCoins.map((coin) => {
                let profit = coin?.price_change_percentage_24h >= 0;
            
                return (
                  <Link className='carousel-item' to={`/coins/${coin.id}`}>
                    <img
                      src={coin.image}
                      alt={coin.name}
                    />
                    <span>
                        <p>
                            {coin.symbol}
                        </p>
                      &nbsp;
                      <span
                        style={{
                          color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                        }}
                      >
                        {profit && "+"}
                        {coin.price_change_percentage_24h?.toFixed(2)}%
                      </span>
                    </span>
                    <span>
                      {symbol} {numberWithCommas(coin.current_price.toFixed(2))}
                    </span>
                  </Link>
                )
                })
              }
              autoPlay
            />
          )
        }
        </div>
      </div>
     </section>
  )
}

export default TrendingCarousel