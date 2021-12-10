import React,{useState,useEffect} from 'react';
import {SiUfc,FaBeer} from 'react-icons/fi';
import {Link,NavLink,Route,Router} from 'react-router-dom';
import { Button } from './Button';
import './NavBar.css';

function NavBar() {
    let [click,setClick] = useState(false);
    let [button,setButton] = useState(true);

    const handleClick = ()=>   setClick(click =! click);

    const closeMenu = ()=> setClick(false)

    const showButton =()=>{
        if(window.innerWidth <=960){
            setButton(false)
        }else{
            setButton(true)
        }
    };

      
useEffect(() => {
    showButton();
}, [])   
 window.addEventListener('resize',showButton)
    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container' >
            <Link to='/' className='navbar-logo' style={{color:'white',textDecoration:'none'}} onClick={closeMenu}>
              ufc-characters   <i class="fas fa-fist-raised"></i>
            </Link>
           
           <div className='menu-icon' onClick={handleClick}>
               <i className={click ?'fas fa-times':'fas fa-bars'}/>
            </div>
        <ul className={click ? 'nav-menu active':'nav-menu'}>
        <li className='nav-item'>
        <NavLink to='/' activeClassName='navLink-active' exact className='nav-links'  onClick={closeMenu}>home</NavLink>
        </li>
        <li className='nav-item'>
        <NavLink to='/services' activeClassName='navLink-active' exact className='nav-links'  onClick={closeMenu}>soon</NavLink>
        </li>
        <li className='nav-item'>
        <NavLink to='/products'activeClassName='navLink-active' exact className='nav-links'  onClick={closeMenu}>fighters</NavLink>
        </li>
        <li className='nav-item'>
        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMenu}>sign up</Link>
        </li>

        </ul>
        {button && <Button buttonStyle='btn--primary '><i class="fas fa-search"></i> </Button>}

            </div>
        </nav>
        </>
    )
}

export default NavBar;
//     
