import {Button}  from './Button';
import React,{useEffect} from 'react';
import './Hero.css'
//aos animation
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Hero() {
useEffect(() => {
    AOS.init({
      duration:2000,reset:true
      });
      
}, [])
    let bg = 'https://cdn.statically.io/img/i.pinimg.com/originals/31/92/9b/31929b5d9b4676dd23b36c297ad3b3a0.png'
    return (
        <div className='hero-container'>
            <img src={bg} />
            <h1 
                data-aos="flip-right"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-center"
            
            >ufc characters information</h1>
            <p data-aos='zoom-out'  data-aos-mirror="true">Information about all characters of ufc</p>
            <div className='hero-btns'>

            <Button className='hero-btns' buttonSize='btn--large' buttonStyle='btn--outline'>Watch all ufc matches <i className='far fa-play-circle'/></Button>

            </div>
        </div>
    )
}

export default Hero
//            <Button  className='hero-btns' buttonSize='btn--large' buttonStyle='btn--primary' >SHOW  MORE</Button>


//https://images.bfmtv.com/_cgIQ94l3n-eN_5z8X_8q34B3c8=/0x0:1920x1080/images/UFC-Le-choc-pour-le-titre-Ngannou-Gane-officialise-pour-le-22-janvier-en-Californie-1152809.jpg