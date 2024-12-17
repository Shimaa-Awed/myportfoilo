 import myphoto from '../../../public/photo.png'
 import { MdVerified } from "react-icons/md";
 import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"
import { IoLogoGithub } from "react-icons/io";
import Lottie from "lottie-react";
import developerUsAnimation from "../../../src/animation/dev.json"
 import './hero.css'
import { useRef } from 'react';
function Hero() {
  const lottieRef = useRef();
  return (
   <section className='hero flex'>
    <div className='left-section'>
     <div className='avitar flex'>
       <img className='myphoto' src={myphoto} alt='photo'/>
       <MdVerified className='verifie'/>
       </div>
         <h3> Front-End Developer | <br/>React Js,and amature<br/> astronaut</h3>
         <p>
         Hello! I'm Shimaa Awad, a Front-End Developer with a passion for the field of web development., I have one year of experience working with various projects, and I specialize in using the React framework. I'm 18 years old and eager to continue growing my skills and contributing to exciting projects.
         </p>
         <div className='links flex'>
         <a href='https://www.facebook.com/profile.php?id=100090255180094' target='_blank' rel='noopener noreferrer'>
           <FaFacebook className='icon' />
         </a>
         <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
           <FaTwitter className='icon' />
         </a>
         <a href='https://www.linkedin.com/in/shimaa-awed-8a01862a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noopener noreferrer'>
           <FaLinkedin className='icon' />
         </a>
         <a href='https://github.com/Shimaa-Awed' target='_blank' rel='noopener noreferrer'>
           <IoLogoGithub className='icon' />
         </a>
       </div>
    </div>





   <div className='right-section animation'>
   <Lottie
   lottieRef={lottieRef}
    className=""
    onLoadedImages={() => { 
      lottieRef.current.setSpeed(0.2);
     }} 
    animationData={developerUsAnimation} />
   </div>
   </section>
  )
}

export default Hero;
