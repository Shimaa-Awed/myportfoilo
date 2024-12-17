
import { useState,useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";
import { MdSunny } from "react-icons/md";
import './header.css'
const Header = () => {
    const [showModel ,setshowModel] =useState(false);
    const [theme,setTheme]=useState("dark");

    useEffect(() => {
      
    if(theme==="light"){
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }else{
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    }
    }, [theme]);
  return (
  <header className='flex'>
  <button className='menu' onClick={() => { 
    setshowModel(true)
   }}><IoMenu/></button>
  <div/> 
    <nav>
      <ul className='flex'>
       <li><a href=''>About</a></li>
       <li><a href=''>Articles</a></li>
       <li><a href=''>Projects</a></li>
       <li><a href=''>Speaking</a></li>
       <li><a href=''>Uses</a></li>
      </ul>
    </nav>
    <button onClick={() => { 
     // sent value to local storage
     localStorage.setItem("mode",theme=== "dark"? "light" :"dark");

     // get value from ls
     setTheme(localStorage.getItem('mode'));
     }} className='mode'>
   {theme === "dark"? (  <LuMoonStar className='icon-moon'/>):  <MdSunny  className='icon-sun'/>}
    </button>
   {showModel && ( 
    <div className='fixed'>
    <ul className='model'>
    <li><button onClick={() => { 
        setshowModel(false)
     }}><IoClose/></button></li>
    <li><a href=''>About</a></li>
    <li><a href=''>Articles</a></li>
    <li><a href=''>Projects</a></li>
    <li><a href=''>Speaking</a></li>
    <li><a href=''>Uses</a></li>
   </ul>
    </div>)}
  </header>
  )
}

export default Header;