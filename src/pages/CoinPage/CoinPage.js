import React, { useEffect, useState } from 'react'
import './CoinPage.css'
import CoinDetails from '../../components/CoinDetails/CoinDetails'
import CoinChart from '../../components/CoinChart/CoinChart'
import {useParams} from 'react-router-dom'
import { coinList } from '../../data'
import { SingleCoin } from '../../config/api'
import Loader from '../..//components/Loader/Loader'
import axios from 'axios'

const CoinPage = () => {

  const { id } = useParams()
  const [coin, setCoin] = useState()

  const getCoinDetails = async() =>{

    const { data } = await axios.get(SingleCoin(id))
    setCoin(data)
  }

  useEffect(()=>{
    getCoinDetails();
  }, [])

  return (
    <>
    {
      coin?(
        <section id="coin-details">
          <div className="coin-page-container">
            <CoinDetails {...coin}/>
            <CoinChart id={id}/>
          </div>
        </section>
      ):(
        <Loader/>
      )
    }
    </>
  )
}

export default CoinPage