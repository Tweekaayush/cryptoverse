import React, { useContext, useEffect, useState } from 'react'
import './CoinDetails.css'
import { CurrencyContext } from '../../context/CurrencyContext'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CoinDetails = (props) => {
 
  const {symbol, currency} = useContext(CurrencyContext)
  const [description, setDescription] = useState('')

  useEffect(()=>{
    setDescription(props?.description.en.split(". ")[0] + '.')
  }, [props])

  return (
    <div className="coin-detail-container">
        <Link className='back-button' to='/'>
            <FontAwesomeIcon icon={faAngleLeft} /> Go Back
        </Link>
        <img className="coin-detail-img" src={props?.image.large} alt="" />
        <h1 className="coin-detail-heading">
            {props?.name}
        </h1>
        <p className='coin-detail-text'
            dangerouslySetInnerHTML={{__html: description}}
        >

        </p>
        <p className="coin-detail">
            <span>
                Rank:
            </span>
            &nbsp; &nbsp;
            <span>
                #{props?.market_cap_rank}
            </span>
        </p>
        <p className="coin-detail">
            <span>
                current Price:
            </span>
            &nbsp; &nbsp;
            <span>
              {symbol + " "}{numberWithCommas(props?.market_data.current_price[currency.toLowerCase()])}
            </span>
        </p>
        <p className="coin-detail">
            <span>
                market cap:
            </span>
            &nbsp; &nbsp;
            <span>
                {symbol + " "}{numberWithCommas(props?.market_data.market_cap[currency.toLowerCase()].toString().slice(0, -6))}M
            </span>
        </p>
    </div>
  )
}

export default CoinDetails