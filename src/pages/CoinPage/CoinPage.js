import React, { useEffect, useState } from 'react'
import './CoinPage.css'
import CoinDetails from '../../components/CoinDetails/CoinDetails'
import CoinChart from '../../components/CoinChart/CoinChart'
import {useParams} from 'react-router-dom'

const CoinPage = () => {

  const { id } = useParams()

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])

  return (
    <section id="coin-details">
      <div className="coin-page-container">
        <CoinDetails id={id}/>
        <CoinChart id={id}/>
      </div>
    </section>
  )
}

export default CoinPage