import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import CoinPage from './pages/CoinPage/CoinPage'
import Navbar from './components/Layout/Navbar/Navbar'
import Footer from './components/Layout/Footer/Footer'
import { CurrencyContextProvider } from './context/CurrencyContext'

const App = () => {
  return (
    <CurrencyContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/coins/:id' element={<CoinPage/>} />
        </Routes>
        {/* <Footer/> */}
      </Router>
    </CurrencyContextProvider>
  )
}

export default App