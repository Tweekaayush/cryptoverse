import React, { useContext, useEffect, useState } from 'react'
import './CoinChart.css'
import { CurrencyContext } from '../../context/CurrencyContext'
import { HistoricalChart } from '../../config/api'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
import axios from 'axios';
import { chartDays } from '../../config/data';

ChartJS.register(...registerables);


const CoinChart = ({id}) => {
  const [chartData, setChartData] = useState()
  const [days, setDays] = useState(1)
  const [loading, setLoading] = useState(true)
  const {currency} = useContext(CurrencyContext)

  const buttonStyle = {
    backgroundColor: '#3471f5',
  }

  const fetchChartData = async() =>{
    setLoading(true)
    await axios.get(HistoricalChart(id, days, currency))
          .then((res) =>{
            setChartData(res.data.prices) 
            setLoading(false)
          })
          .catch((e) => console.log(e))
  }

  useEffect(()=>{
    fetchChartData()
  },[days])


  const changeDay = (val) =>{
    setDays(val)
  }

  const options = {
    scales: {
      x: {
        ticks: {
          color: '#c7c7c7'
        }
      },
      y: {
        ticks: {
          color: '#c7c7c7'
        }
      },
    },
    elements: {
      point: {
        radius: 1,
      },
    },
  }

  return (
    <div className="coin-chart-container">
      {
        loading ?(
          <div className="skeleton-bar"></div>
        ):(
          <>
            <Line
              data={{
                labels: chartData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),
            
                datasets: [
                  {
                    data: chartData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#1565c0",
                  },
                ],
              }}
              options={options}
            />
            <div className="chart-days-container">
                {
                  chartDays.map((c_day, i)=>{
                    return <button key={i} onClick={()=>changeDay(c_day.value)} style={days === c_day.value?buttonStyle:{}}>{c_day.label}</button>
                  })
                }
            </div>
          </>
        )
      }
    </div>
  )
}

export default CoinChart