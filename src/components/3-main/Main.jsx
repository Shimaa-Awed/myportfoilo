
import { FaLink } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
 import './main.css'
import { useState } from "react";
import { myProject } from "./api";

const Main = () => {
  const [currentActive,setcurrentActive]=useState('all');
  const [arr,setArr]=useState(myProject);
  return (
    <main className='flex'>  
    <section className='left-section'>
     <button onClick={() => { 
      setcurrentActive('all')
     const allProjectss = myProject.filter((item) => { 
     return item.category === "Js" || 'React'
       })
      setArr(allProjectss);
     }} className={currentActive=== 'all'?"active":null}>All Projects</button>
     <button onClick={() => { 
      setcurrentActive('react')
      const newReact = myProject.filter((item) => { 

        return item.category === 'React'
       })
      setArr(newReact);
     }} className={currentActive=== 'react'?"active":null}> React & Nodejs</button>
     <button onClick={() => {
      setcurrentActive('js-section')
       const newJs = myProject.filter((item) => { 
         return item.category ==='Js'
        })
      setArr(newJs)
     }} className={currentActive==="js-section" ? "active":null}> JavaScript</button>

    </section>
    <section className=' right-section'>
     {arr.map( (items) => {
        return(
            <article key={items} className='card'>
            <img width={246} src={items.imgPath} alt='#'/>
            <div style={{width:'246px'}} className="box">
            <h3 className='title'>{items.title}</h3>
            <p className='subtitle'>{items.discription}</p>
            <div className='flex links'>
             <div style={{gap:'11px'}} className="icons flex">
             <FaLink className="icon"/>
             <IoLogoGithub className="icon"/>
             </div>
             <div className="more">  More <FaArrowRight className="icon"/> </div>
              </div>
      
      
            </div>
            </article>
        )
       
     }
     )}
    </section>
    </main>
  )
}

export default Main;