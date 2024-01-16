import React, { useContext, useRef, useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { CurrencyContext } from '../../../context/CurrencyContext'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function useComponentVisible(initialIsVisible, currencyList) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
          currencyList.current.classList.remove('currency-list-toggle')
          setIsComponentVisible(false);
      }
  };

  useEffect(() => {
      document.addEventListener('click', handleClickOutside, true);
      return () => {
          document.removeEventListener('click', handleClickOutside, true);
      };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible };
}

const Navbar = () => {

  const {currency, setCurrency} = useContext(CurrencyContext)
  const [toggle, setToggle] = useState(false)
  const [scroll, setScroll] = useState(false)
  let resizeTimer
  const currencyList = useRef(null)
  const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(false, currencyList)
  
  const handleScroll = () =>{    
    window.scrollY > 0 ? setScroll(true) : setScroll(false);
  }

  const handleResize = () =>{
    if(document.body.clientWidth>1074)
        setToggle(false)
           document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          document.body.classList.remove("resize-animation-stopper");
        }, 400); 
  }

  window.addEventListener("resize", ()=>{
    if(document.body.clientWidth>1074)
        setToggle(false)
           document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          document.body.classList.remove("resize-animation-stopper");
        }, 400);
  });

  const highlightedStyle = {
    backgroundColor: '#e2e2e2'
  }

  const handleCurrencyList = () =>{
    if(isComponentVisible)
      currencyList.current.classList.remove('currency-list-toggle')
    else
      currencyList.current.classList.add('currency-list-toggle')

    setIsComponentVisible(!isComponentVisible)

  }
  
  const handleCurrency = (e) =>{
    setCurrency(e.target.innerHTML)
    currencyList.current.classList.remove('currency-list-toggle')
  }

  const handleNavToggle = () =>{
    setToggle(!toggle)
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    return ()=>{
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className={scroll?"navbar scrolled":"navbar"}>
      <div className="nav-container">
        <Link to="/" className="nav-brand">Cryptoverse</Link>
        <ul className={toggle?'nav-links nav-links-active':'nav-links'}>
          <li className='nav-item' onClick={()=>setToggle(false)}>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-item' onClick={()=>setToggle(false)}>
            <Link to='#market'>Market</Link>
          </li>
          <li className='nav-item' onClick={()=>setToggle(false)}>
            <Link to='/#services'>Services</Link>
          </li>
          <li className='nav-item' onClick={()=>setToggle(false)}>
            <Link to='/'>Contact</Link>
          </li>
        </ul>
        <div className="nav-right">
          <div className="nav-currency-container">
            <p ref={ref} className="nav-currency-display" onClick={handleCurrencyList}>{currency} <KeyboardArrowDownIcon /></p>
            <ul ref={currencyList} className="nav-currency-list">
              <li style={currency ==='INR'?highlightedStyle:{}} onClick={handleCurrency}>INR</li>
              <li style={currency ==='USD'?highlightedStyle:{}} onClick={handleCurrency}>USD</li>
            </ul>
          </div>
          <div className={toggle?'nav-toggler toggle':'nav-toggler'} onClick={handleNavToggle}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar