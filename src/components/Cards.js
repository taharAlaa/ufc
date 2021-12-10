import React from 'react';
import CardItem from './CardItem';
import './Card.css'
function Cards() {
    return (
        <div className='cards'>
            <h1 className="last-phones">Best fights  </h1>
            <div className='cards__container'>
            <div className='wrapper'>
                <ul className='cards__items'>
                <CardItem          
                    src='https://theufcnews.com/wp-content/uploads/2021/10/Untitled-1-11.png'
                  text='justin gaethje vs michael chandler may 11 SAT'
                     label='gaethje vs chandler'
                     path='/services'
                    />
                <CardItem          
                        src='https://i2.wp.com/www.actumma.com/wp-content/uploads/2018/09/ufc-229.jpg?ssl=1'
                        text='Khabib Nurmagomedov vs Conor McGregor oct 6 SAT'
                        label='khabib vs mcGregor'
                        path='/services'
                        />



                </ul>

                <ul className='cards__items'>
                <CardItem          
                    src='https://www.sporteconomy.it/wp-content/uploads/2019/06/0-9.jpg'
                  text='khabib nurmagomedov vs Dustin Poirier may 09 SAT'
                     label='khabib vs poirier'
                     path='/services'
                    />

                <CardItem          
                    src='https://www.sportbusinessmag.com/wp-content/uploads/2020/11/EndbbjHUUAE7SGG.jpg'
                  text='Dustin Poirier vs Conor McGregor jan 23 SAT'
                     label='poirier vs mcGregor'
                     path='/services'
                    />

                <CardItem          
                        src='https://www.mmaoddsbreaker.com/wp-content/uploads/2020/05/UFC-249-Ferguson-vs.-Gaethje-Fight-Poster-758x426.jpg'
                        text='tony ferguson vs justin gaethje  may 09 SAT'
                        label='ferguson vs gaethje'
                        path='/services'
                        />

                       <CardItem          
                        src='https://i1.wp.com/www.actumma.com/wp-content/uploads/2020/08/UFC-253-Israel-Adesanya-vs-Paulo-Costa.jpg?resize=900%2C506&ssl=1'
                        text='israel adesanya vs paulo costa 2020 18 august'
                        label='Adesanya vs Paulo'
                        path='/services'
                        />
                        <CardItem          
                        src='https://pbs.twimg.com/media/EcMB-vbXQAQqRbu.jpg'
                        text='kamaru usman vs jorge masvidal jul 11 SAT'
                        label='usman vs masvidal'
                        path='/services'
                            />
                        <CardItem          
                        src='https://lasueur.com/wp-content/uploads/2021/08/Ciryl-Gane-Francis-Ngannou-Fitness-Coach.jpg'
                        text='Francis Ngannou vs Ciryl Gane 2020 07 March'
                        label='Ngannou vs Gane'
                        path='/services'
                        />

                </ul>

            </div>

            </div>
        </div>
    )
}

export default Cards

