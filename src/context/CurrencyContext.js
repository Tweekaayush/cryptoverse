import React, { createContext, useEffect, useState } from 'react'

export const CurrencyContext = createContext()

export const CurrencyContextProvider = ({children}) => {
 
  const [currency, setCurrency] = useState('INR')
  const [symbol, setSymbol] = useState('₹')

  

  useEffect(() =>{
    if(currency === 'INR') setSymbol('₹')
    else if(currency === 'USD') setSymbol('$')
  }, [currency])

  const value = {
    currency,
    setCurrency,
    symbol
  }

  return (
    <CurrencyContext.Provider value={value}>
        {children}
    </CurrencyContext.Provider>
  )
}
