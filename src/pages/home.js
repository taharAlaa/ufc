import '../App.css';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

import Slider from '../components/Slider'
 export default function home(){
    return(
        <>
        <Hero />
        <Cards   />
        <Slider />
        <Footer />
        </>
    )
}