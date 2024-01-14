import React, {useContext, useState} from 'react'
import './TrendingCarousel.css'
import { trendingCoinList } from '../../data'
import AliceCarousel from "react-alice-carousel";
import { TrendingCoins } from '../../config/api';
import { Link } from 'react-router-dom';
import { CurrencyContext } from '../../context/CurrencyContext';
import 'react-alice-carousel/lib/alice-carousel.css';

const TrendingCarousel = () => {

  const {symbol} = useContext(CurrencyContext)
  const [trendingCoins, setTrendingCoins] = useState(trendingCoinList)
  const responsive = {
    0: {
      items: 2,
    },

    768: {
        items:3,
    },
    1024:{
        items:4,
    }
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const items = trendingCoins.map((coin) => {
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
    );
    });
    
  return (
    <section id="trending">
        <div className="container">
            <div className="trending-carousel-container">
                <AliceCarousel
                    mouseTracking
                    infinite
                    autoPlayInterval={2000}
                    animationDuration={1500}
                    disableDotsControls
                    disableButtonsControls
                    responsive={responsive}
                    items={items}
                    autoPlay
                />
            </div>
        </div>
    </section>
  )
}

export default TrendingCarousel