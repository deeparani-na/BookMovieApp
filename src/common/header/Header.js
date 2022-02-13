import React from 'react';
import "./Header.css";
import ReactLogo from '../../assets/logo.svg';
import Button from "@material-ui/core/Button";

const Header = function(){

 return(
         <div className='header'>
             
             <img  className="film-icon" src={ReactLogo} alt="React Logo"/>
             
             <button 
             variant="contained" 
             color="default"
             >
              LOGIN
            </button> 
            <button 
             variant="contained" 
             color="default"
             >
              LOGOUT
            </button>
            <Button 
             variant="contained" 
             color="primary"
             >
              BOOK SHOW
            </Button>
            
            <div/>

         </div>
           
     )
}

export default Header;