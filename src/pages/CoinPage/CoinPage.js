import React, { useEffect, useState } from 'react'
import './CoinPage.css'
import CoinDetails from '../../components/CoinDetails/CoinDetails'
import CoinChart from '../../components/CoinChart/CoinChart'
import {useParams} from 'react-router-dom'
import { coinList } from '../../data'
import { SingleCoin } from '../../config/api'

const CoinPage = () => {

  const {id} = useParams()
  const [coin, setCoin] = useState(coinList[0])

  const getCoinDetails = async() =>{
    await fetch(SingleCoin(id))
          .then((res) => res.json())
          .then((data) => setCoin(coin))
  }

  // useEffect(()=>{
  //   getCoinDetails();
  // }, [])

  return (
      <section id="coin-details">
        <div className="coin-page-container">
          <CoinDetails {...coin}/>
          <CoinChart/>
        </div>
      </section>
  )
}

export default CoinPage