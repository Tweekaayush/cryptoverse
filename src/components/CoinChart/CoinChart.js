import React, { useContext, useEffect, useState } from 'react'
import './CoinChart.css'
import { CurrencyContext } from '../../context/CurrencyContext'
import { HistoricalChart } from '../../config/api'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
import { CircularProgress } from '@mui/material';

ChartJS.register(...registerables);


const CoinChart = ({id}) => {
  const [chartData, setChartData] = useState()
  const [days, setDays] = useState(1)
  const [flag, setFlag] = useState(false)
  const {currency} = useContext(CurrencyContext)

  const fetchChartData = async() =>{
    await fetch(HistoricalChart(id, days, currency))
          .then(res=>res.json())
          .then(data=>{
            setFlag(true)
            setChartData(data.prices)
          })
  }

  useEffect(()=>{
    fetchChartData()
  },[days])

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
        chartData && flag ?(
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
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={options}
            />
        ):(
          <CircularProgress
            style={{ color: "#1565c0" }}
            size={250}
            thickness={1}
          />
        )
      }
    </div>
  )
}

export default CoinChart