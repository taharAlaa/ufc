import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

function CardItem(props) {
useEffect(() => {
  Aos.init({duration:2000})
}, [])
    return (
        <>
         <li className='cards__item'>
             <Link className='cards__item__link' to={props.path}>
                 <aside className='cards__item__pic-wrap' data-category={props.label}>
                   <img data-aos='fade-up' data-aos-mirror='true' src={props.src} className='cards__item__img'/>
                 </aside>
                 <div className='cards__item__info'>
                     <h5 className='cards__item__text'>{props.text}</h5>
                 </div>
                
             </Link>
        </li> 
        </>
    )
}

export default CardItem;