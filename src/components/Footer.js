import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <section className="footer">
        <div className="box-container">
            <div className="box">
                <a href=""><i class="fas fa-store"></i></a>
                <p>The advancement of technology has bought many inventions. One such invention is the mobile phone. Gone are those days when mobiles were used just as a medium of communication. Now day’s mobiles are far more than just a device meant to communicate. It is not wrong to say that mobiles are not only a part of our lives but also a necessity in our daily lives. People from all ages own cell phones these days.
                </p>
            </div>

    <div className="box">
        <h3>links</h3>
        <a href="/home">home</a>
        <a href="/services">soon</a>
        <a href="/products">fighters</a>

        <p></p>
    </div>
    <div className="box">
        <h3>fllow us</h3>
        <p>find us on social media:</p>
        <a href="https://www.facebook.com/alaa.edin.1004/">facebook</a>
        <a href="https://github.com/taharAlaa">github</a>
        <a href="#">twitter</a>
        <a href="https://www.instagram.com/alaaedinxthr/">instagram</a>
        
    </div>
    <div className="box">
        <h3>contact us</h3>
      <p><i className="fas fa-map-marker-alt"></i>
        algeria(chlef)
    </p>
    <p><i className="fas fa-phone"></i>
      027753696
    </p>
    <p><i className="far fa-envelope"></i>
        alaaedine62@gmail.com
      </p>

    </div>

        </div>
        <div className="footer-written">
          created by  <span>alaa tahar</span> | all right reserved&reg;
        </div>

    </section>

    )
}

export default Footer
