import React,{useState,useEffect} from 'react';
import Data from './Data'
import Search from './Search';
import './Searchs.css'

function Searchs() {

    let [val,setVal] = useState(' ');
let [data ,setData] = useState(false);

//valMustBe more then or equal 3 length 

return (
        <div className='searchs-body'>
            <div className='container-inpSearch-btnGet'>
          <input className='input-search' placeholder='search for ufc fighters' autoCapitalize = 'none' type="text" onChange={  (e)=>{setVal(e.target.value.toLowerCase())}} />
          <button className='button-get-data' onClick={(e)=> {setData(!data)}}>get</button>;
        </div>


           {   
                Data.details.map((item,index)=> {
                    if(data && val != '' )
                     return(
                        ( item.name.startsWith(val) && (val.length >= 3 )  ) // startWith(val) or includes(val)
                ?
                   
                    <Search key={index} wikipedia={`https://fr.wikipedia.org/wiki/${item.wiki}` /*+ (item.name.replace(' ','_').toUpperCase())*/}  Catégorie={item.Catégorie} nationality={item.nationality} poids={item.Poids} taille={item.taille} name={item.name} date={item.date} age={item.age} img={item.img}/>
                    
                   : val == ' '
                    )
                  
                    })

            }
        </div>
    )
}

export default Searchs
/*
           {      Data.details.map((item,index)=> {
                    if(data && val != '' )
                     return(
                        ( item.name.startsWith(val) && (val.length >= 3 ) ) // startWith(val) or includes(val)
                ?
                   
                    <Search key={index} wikipedia={`https://fr.wikipedia.org/wiki/${item.wiki}` /*+ (item.name.replace(' ','_').toUpperCase())*///}  Catégorie={item.Catégorie} nationality={item.nationality} poids={item.Poids} taille={item.taille} name={item.name} date={item.date} age={item.age} img={item.img}/>
                    
                 //   : val == ' '
                 //   )
                  
              //      })
                  
          //    }
  