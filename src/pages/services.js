import react,{useEffect} from "react";
import { Link } from "react-router-dom";
import '../components/Services.css';
import $ from 'jquery';
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Services(){
  useEffect(() => {
    Aos.init({duration:1000});
    $('.box').each(function(){
      $(this).on('click',function(){
        $(this).toggleClass('jquery')
      })
    })
    
  }, [])
    return  (
        <section className ="deal" id="services">
        <h1 className="heading"><span>This month's fights</span></h1>
        <div className="box-container">
        <div class="box">
                <img data-aos='zoom-in-up' src="https://cdn.vox-cdn.com/thumbor/9JEYFK0Mp7F2P589auPkPNHUnHA=/0x0:1080x1350/1400x933/filters:focal(452x286:624x458):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/69304993/E0RDLbqXMAAT95a.0.jpeg" alt="" srcset=""/>
                <div className="content">
                    <h3>rozenstruik vs sakai</h3>
                  <p>Match date 02 october 2021, don't miss it
                </p>
                  <Link to="#" id=""><button class="btn">Book now</button></Link>
                </div>
            </div>
            
            <div class="box">
                <img data-aos='zoom-in' src="https://cdn.vox-cdn.com/thumbor/uFkkYdhgHXvwYMR-WsOX5zGw0mo=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22804594/E84AShLVUAMEJo_.jpeg" alt="" srcset=""/>
                <div className="content">
                    <h3>santos vs walker</h3>
                  <p>Match date 11 october 2021, don't miss it
                </p>
                  <Link to="#" id=""><button class="btn">Book now</button></Link>
                </div>
            </div>
           <div class="box">
                <img data-aos='zoom-in' src="https://cdn.vox-cdn.com/thumbor/c-UWgf_pywEeY2tKNo45-x8Naow=/0x0:1080x1350/1400x933/filters:focal(474x400:646x572):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/69856213/E_yZV0cVEAQD4aC.0.jpeg" alt="" srcset=""/>
                <div className="content">
                    <h3>costa vs vettori</h3>
                  <p>Match date 19 october 2021, don't miss it
                </p>
                  <Link to="#" id=""><button class="btn">Book now</button></Link>
                </div>
            </div>

            <div class="box">
                <img data-aos='zoom-in' src="https://www.telecomasia.net/upload/iblock/1a6/1a6d61bd79859be9dac939763f4e1a34.jpg" alt="" srcset=""/>
                <div className="content">
                    <h3>smith vs spann</h3>
                  <p>Match date 27 october 2021, don't miss it
                </p>
                  <Link to="#" id=""><button class="btn">Book now</button></Link>
                </div>
            </div>

        </div>

    </section>

    )
    
}