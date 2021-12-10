import react from "react";
import { Link } from "react-router-dom";
import '../components/Products.css';


export default function Products(){
    return(
        <section className="arrival" id="NEW">
            <h1 className="heading"><span>Most popular fighters</span></h1>
            <div className="box-container">

            <div className="box">
                    <div className="image">
                        <img src="https://cdn.vox-cdn.com/thumbor/98nYqIgCydW0rEQ3J8JH-GBpaM4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20083798/1190623645.jpg.jpg" alt="" srcset=""/>
                    </div>
                    <div className="content">
                        <h3>michael chandler</h3>
                        <div className="info">
                            <strong className="price">Poids légers</strong>
                            <div className="stars">
                           <i> Poids : 70 kg</i>
                           
                            </div>
                        </div>
                    </div>
                </div>


                <div className="box">
                    <div className="image">
                        <img src="https://cdni.rbth.com/rbthmedia/images/2019.11/original/5dca6e8485600a6e1040e9c6.jpg" alt="" srcset=""/>
                    </div>
                    <div className="content">
                        <h3>khabib nurmagomedov</h3>
                        <div className="info">
                            <strong className="price">Poids légers</strong>
                            <div className="stars">
                           <i> Poids : 70 kg</i>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src="https://www.lequipe.fr/_medias/img-photo-jpg/pour-sa-seconde-apparition-dans-ce-classement-conor-mc-gregor-prend-la-premiere-place-tom-hogan-i/1500000001487951/0:0,1997:1331-828-552-75/2be6d.jpg" alt="" srcset=""/>
                    </div>
                    <div className="content">
                        <h3>Conor McGregor</h3>
                        <div className="info">
                            <strong className="price">Poids légers</strong>
                            <div className="stars">
                           <i> Poids : 70 kg</i>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src="https://www.actumma.com/wp-content/uploads/2020/02/tony-ferguson-armes-contre-khabib.jpeg" alt="" srcset=""/>
                    </div>
                    <div className="content">
                        <h3>Tony Ferguson</h3>
                        <div className="info">
                            <strong className="price">Poids légers</strong>
                            <div className="stars">
                           <i> Poids : 70 kg</i>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                        <img src="https://parlersport.com/wp-content/uploads/2021/09/Je-suis-paye-plus-que-la-plupart-des-gars-dans.jpg" alt="" srcset=""/>
                    </div>
                    <div className="content">
                        <h3>Justin Gaethje</h3>
                        <div className="info">
                            <strong className="price">Poids légers</strong>
                            <div className="stars">
                           <i> Poids : 70 kg</i>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src="https://i1.wp.com/www.fr24news.com/fr/a1/wp-content/uploads/2021/07/Resultats-de-la-pesee-de-lUFC-264-Dustin-Poirier-Conor.jpg?fit=1200%2C628&ssl=1" alt="" srcset=""/>
                    </div>
                    <div className="content">
                        <h3>Dustin Poirier</h3>
                        <div className="info">
                            <strong className="price">Poids légers</strong>
                            <div className="stars">
                           <i> Poids : 70 kg</i>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src="https://www.sportbusinessmag.com/wp-content/uploads/2020/01/image.jpg" alt="" srcset=""/>
                    </div>
                    <div className="content">
                        <h3>Israel Adesanya</h3>
                        <div className="info">
                            <strong className="price">Poids moyens</strong>
                            <div className="stars">
                           <i> Poids : 84 kg</i>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src="https://i1.wp.com/cafecremesport.com/wp-content/uploads/2021/02/ngannou.jpg?fit=780%2C520&ssl=1" alt="" srcset=""/>
                    </div>
                    <div className="content">
                        <h3>Francis Ngannou</h3>
                        <div className="info">
                            <strong className="price">heavy weight</strong>
                            <div className="stars">
                           <i> Poids : 119 kg</i>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )

}