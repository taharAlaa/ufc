import React from 'react';
import './Search.css';
import {Link} from 'react-router-dom'

function Search(props) {
    return (
        <div  to={`https://fr.wikipedia.org/wiki/${props.name}`} className='card'>
            <div className='container'>
                <div className='img-container'>
                <img style={{maxWidth:'400PX'}} className='big-img' src={props.img ? props.img : 'null'}/> 
                </div>

                <div className='info-container'>
            <div className='info'>
            <p className='name'>name: <span>{props.name}</span></p>
            <p className='nationality'>nationality: <span>{props.nationality}</span></p>
            <p className='date'>date:<span> {props.date}</span></p>
            <p className='age'>age: <span>{props.age}</span></p>
            </div>
            <div className='height-and-weight'>
            <p className='taille'>taille: <span>{props.taille}</span></p>
            <p className='poids'>poids: <span>{props.poids}</span></p>
            <p className='poids'>Catégorie: <span>{props.Catégorie}</span></p>
            </div>

            </div>
            <div className='link'>
              <p>more  about <span className='name-in-link'>{`"${props.name}"`}</span><a className='wiki' href={props.wikipedia}> wikipedia</a></p>
            </div>

           
            </div>
        </div>
    )
}

export default Search;
/**            map from array in cards.js in props
           <div>{props.movie.map((imgs)=>{return( <img className='small-img' src={imgs} />)})}</div>

*/