

import { useEffect, useState } from 'react';
import Header from './components/1-header/Header';
import Hero from './components/2-hero/Hero';
import Main from './components/3-main/Main';
import Contact from './components/4-contact/Contact';
import Footer from './components/5-footer/Footer';
import { IoIosArrowUp } from "react-icons/io";

function App() {

  useEffect(() => { 
    window.addEventListener("scroll",() => { 
      if(window.scrollY>300){
        setshowScroll(true)
      }else{
        setshowScroll(false)
      }
     })
   })
 
  const[showScroll ,setshowScroll] = useState(false)
  return (
    <div id='up' className='container'>
    <Header/>
   
    <Hero/>
    <div className='line'/>
    <Main/>
    <div className='line'/>
    <Contact/>
    <div className='line'/>
    <Footer/>
  
  <a style={{opacity: showScroll?1:0, transition:'.3s'}} href='#up'>
  <button className='scrollup'>
  <IoIosArrowUp className='scoll-icon'/>
  </button>
  </a>
 
    </div>
  )
}

export default App;
