import React, {useState, useEffect, useContext} from 'react'
import './Market.css'
import {CurrencyContext} from '../../context/CurrencyContext'
import { CoinList } from '../../config/api'
import {useNavigate} from 'react-router-dom'
import Pagination from '@mui/material/Pagination'
import { LinearProgress } from '@mui/material'
import axios from 'axios'

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Market = () => {

  const [coins, setCoins] = useState([])
  const [page, setPage] = useState(1)
  const {currency, symbol} = useContext(CurrencyContext)
  const [loading, setLoading] = useState(false)
  const [paginationSize, setPaginatonSize] = useState('large')
  const navigate = useNavigate()

  const priceStyle = {
    color: 'rgb(14, 203, 129)'
  }

  const fetchCoins = async ()=>{
    setLoading(true)
    const { data } = await axios.get(CoinList(currency))
    setCoins(data)
    setLoading(false)
  }

  const handleChange = (e, p) =>{
    setPage(p)
  }

  const handleResize = () =>{
    if(document.body.clientWidth>480)
        setPaginatonSize('large')
    else
        setPaginatonSize('small')

  }

  useEffect(()=>{
    fetchCoins();
  },[currency])

  useEffect(()=>{
    window.addEventListener('resize', handleResize)
    return () =>{
        window.removeEventListener('resize', handleResize)
    }
  },[])

  return (
    <section id="market">
        <div className="container">
            <div className="market-container">
                <div className="market-header">
                    <h1 className='section-heading'>Mar<span>ket</span></h1>
                </div>
                <div className="coins-table-container">
                    <div className="coins-table">
                        <div className="coins-table-head">
                            {
                                ['Coins', 'price', '24h change', 'market cap'].map((head, i)=>{
                                    return <p key={i}>{head}</p>
                                })
                            }
                        </div>
                        <div className="coins-table-body">
                            {
                                loading ? (
                                    <LinearProgress />
                                ):(
                                    coins.slice((page - 1) * 10, (page - 1) * 10 + 10).map((coin)=>{
                                    let profit = coin.market_cap_change_percentage_24h
                                    return (
                                        <div key={coin.id} className='coins-table-item' onClick={()=>navigate(`/coins/${coin.id}`)}>
                                            <div className="table-item-head">
                                                <img src={coin.image} alt="" />
                                                <div>
                                                    <span className="table-item-symbol">{coin.symbol}</span>
                                                    <span className="table-item-name">{coin.name}</span>
                                                </div>
                                            </div>
                                            <p className="table-item-price">
                                                {coin.price}
                                                {symbol + " "}{numberWithCommas(coin.current_price)}
                                            </p>
                                            <p  className="table-item-24hchange"
                                                style={profit > 0? priceStyle :{}}
                                            >
                                                {profit > 0 && "+"}
                                                {profit.toFixed(2)}%
                                            </p>
                                            <p className="table-item-market-cap">
                                                {symbol + " "}{numberWithCommas(coin.market_cap.toString().slice(0, -6))}M
                                            </p>
                                        </div>
                                    )
                            })) 
                        }
                        </div>
                    </div>
                </div>
                <Pagination 
                    count={Math.ceil(coins.length/10)} 
                    color="primary"
                    style={{
                        paddingTop: 20,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }} 
                    page={page}
                    onChange={handleChange} 
                    size={paginationSize}
                />
            </div>
        </div>
    </section>
  )
}

export default Market