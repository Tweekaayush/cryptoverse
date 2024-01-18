import React, { useContext, useEffect, useState } from 'react'
import './CoinDetails.css'
import { CurrencyContext } from '../../context/CurrencyContext'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { SingleCoin } from '../../config/api'
import axios from 'axios';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CoinDetails = ({id}) => {
 
const {symbol, currency} = useContext(CurrencyContext)
const [loading, setLoading] = useState(true)
const [description, setDescription] = useState('')
const [coin, setCoin] = useState({})

const skeletonColor = { 
    bgcolor: '#2c4170',
}

const getCoinDetails = async() =>{
    setLoading(true)
    await axios.get(SingleCoin(id))
        .then((res)=>{
            setCoin(res.data)
            setLoading(false)
            setDescription(res.data.description.en.split(". ")[0] + '.')
        })
        .catch((e) => console.log(e))
} 


useEffect(()=>{
    getCoinDetails();
}, [currency])

  return (
    <>
        {
            loading?(
                <div className="coin-detail-skeleton">
                    <div className="skeleton-bar" style={{width: '100px', alignSelf: 'flex-start', marginBottom: '64px'}}></div>
                    <div className="skeleton-circle"></div>
                    <div className="skeleton-bar" style={{height:'32px', width: '200px'}}></div>
                    <div className="skeleton-bar" style={{height: '150px'}}></div>
                    <div className="skeleton-bar"></div>
                    <div className="skeleton-bar"></div>
                    <div className="skeleton-bar"></div>
                </div>
            ):(             
                <div className="coin-detail-container">
                    <Link className='back-button' to='/'>
                        <FontAwesomeIcon icon={faAngleLeft} /> Go Back
                    </Link>  
                    <img className="coin-detail-img" src={coin.image.large} alt="" />
                    <h1 className="coin-detail-heading">
                        {coin.name}
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
                            #{coin.market_cap_rank}
                        </span>
                    </p>
                    <p className="coin-detail">
                        <span>
                            current Price:
                        </span>
                        &nbsp; &nbsp;
                        <span>
                        {symbol + " "}{numberWithCommas(coin.market_data.current_price[currency.toLowerCase()])}
                        </span>
                    </p>
                    <p className="coin-detail">
                        <span>
                            market cap:
                        </span>
                        &nbsp; &nbsp;
                        <span>
                            {symbol + " "}{numberWithCommas(coin.market_data.market_cap[currency.toLowerCase()].toString().slice(0, -6))}M
                        </span>
                    </p>
                </div>
            )
        }
    </>
  )
}

export default CoinDetails