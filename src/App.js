import axios from 'axios';
import Searchs from './search/Searchs';


import './App.css';
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';
import Home from './pages/home'

import Nav from '././components/NavBar';
import Services from './pages/services';
import Products from './pages/products';
import SignUp from './pages/signUp';

export default function App() {

  /*ScrollReveal().reveal('.heading ',{
    delay: 300,
    distance: '150%',
    origin: 'bottom',
    opacity: false,
  
    reset: true
  
  });*/





  return (
    <>
      <Router>
        <Nav />
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path='/sign-up' exact component={SignUp} />
        <Route path='/Searchs' exact component={Searchs} />

        <Route path='*' />

        </Switch>
      </Router>
    </>
  );


          }
















          /*
             Data.details.map((item,index)=> {
                    if(data)
                 return(
                   item.title.includes(val) && val == item.title 
                  ?
                 <Card key={index} film={item.film} img={item.img} title={item.title}/>
  
                   : ''
                 )
  
                })
                */

 //code 1 berfore develpomer
                          /*
 Data.details.map((item,index)=> {
                 
  return(
   item.title.includes(val) && val == item.title 
                  ?
                 <Card key={index} film={item.film} img={item.img} title={item.title}/>

                   : ''
              )
            })
                */
          