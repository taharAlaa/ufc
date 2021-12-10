import React,{useEffect} from 'react'
import './Slider.css'
//OwlCarousel
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

 //aos
 import Aos from 'aos';
 import 'aos/dist/aos.css'
 
    function Slider() {
    useEffect(() => {
        Aos.init({duration:2000})
    }, [])
        return (
            <OwlCarousel className='carousel' items={1} loop ={true} autoplay ={true} autoplaySpeed={1000}>

            <div class="item">
                <img data-aos='fade' src="https://wallpapercave.com/wp/wp5493998.jpg" alt="" srcset=""/>
            </div>
            <div class="item">
                <img data-aos='fade' src="https://www.castlehillrsl.com.au/wp-content/uploads/sites/2/events/ufc229-foxsports-16x9-hori.jpg" alt="" srcset=""/>
            </div>
            <div class="item">
                <img data-aos='fade' src="https://cdn.wallpapersafari.com/50/74/9zDpCk.jpg" alt="" srcset=""/>
            </div>
            <div class="item">
                <img data-aos='fade' src="https://www.thesportsgeek.com/wp-content/uploads/2020/03/Khabib-vs-Tony-1280x720.jpg" alt="" srcset=""/>
            </div>

            <div class="item">
                <img data-aos='fade' src="https://miro.medium.com/max/3840/1*_KbDHKhzf7jojOtb1bHtqw.jpeg" alt="" srcset=""/>
            </div>
            <div class="item">
                <img data-aos='fade' src="https://media.elegantcms.io/a/96dc72d1-4d96-40b8-a3bd-cd44c423ca4b/87d71980-6f9a-47ab-bfcb-aea7f749bcdb/1570933060/o/presser.jpeg?1570933060" alt="" srcset=""/>
            </div>
            <div class="item">
                <img data-aos='fade' src="https://i.ytimg.com/vi/Z-ds1xta_F4/maxresdefault.jpg" alt="" srcset=""/>
            </div>
            <div class="item">
                <img data-aos='fade' src="https://i.ytimg.com/vi/qGwDr2cNiOk/maxresdefault.jpg" alt="" srcset=""/>
            </div>
            <div class="item">
                <img data-aos='fade' src="https://blog.personal.com.py/wp-content/uploads/2020/05/ufc-espn-vivo-online-flow-2020-ferguson-gaethje.jpg" alt="" srcset=""/>
            </div>
            <div class="item">
                <img data-aos='fade' src="https://cutewallpaper.org/21/ufc-screensavers/74+-Ufc-Fighters-Wallpapers-on-WallpaperPlay.jpg" alt="" srcset=""/>
            </div>
            <div class="item">
                <img data-aos='fade' src="https://www.itnwwe.com/wp-content/uploads/2021/07/Justin-Gaethje-vs-Michael-Chandler-lightweight-match-UFC-268-1.jpg" alt="" srcset=""/>
            </div>

            </OwlCarousel>
        )
    }
    
    export default Slider
    