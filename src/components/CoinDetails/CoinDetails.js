import React, { useContext } from 'react'
import './CoinDetails.css'
import { CurrencyContext } from '../../context/CurrencyContext'

const CoinDetails = (props) => {
 
  const {symbol} = useContext(CurrencyContext)

  return (
    <div className="coin-detail-container">
        <img className="coin-detail-img" src={props.image} alt="" />
        <h1 className="coin-detail-heading">
            {props.name}
        </h1>
        <p className='body-text'>
        Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency.
        </p>
        <p className="coin-detail">
            <span>
                Rank:
            </span>
            &nbsp; &nbsp;
            <span>
                {props.market_cap_rank}
            </span>
        </p>
        <p className="coin-detail">
            <span>
                current Price:
            </span>
            &nbsp; &nbsp;
            <span>
              {symbol + " "}{props.current_price}
            </span>
        </p>
        <p className="coin-detail">
            <span>
                market cap:
            </span>
            &nbsp; &nbsp;
            <span>
                {symbol + " "}{props.market_cap}
            </span>
        </p>
    </div>
  )
}

export default CoinDetails