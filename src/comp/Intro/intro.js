import React from 'react';
import { Button} from '@material-ui/core/'
import Exel from './exel.svg';
import  "./intro.css";
import Typewriter from 'typewriter-effect';

import {
   
    Link,
    
  } from "react-router-dom";

function Intro() {

  return (
    <>
   
    <div className="intro-bg" >
    <div className="intro-blankSpace">
          

         </div>
        <img src={Exel} className="intro-exelImg"></img>
        

        <div className="intro-Buttons">
        

        </div>

    <h3 className="intro-typeWrite">
        <Typewriter
        options={{
            strings: ['API', 'Website','Fun Game'],
            autoStart: true,
            loop: true,
        }}
        
        /> 
        <Link href="/api" >
        <Button style={{
            
            borderRadius: 25,
            backgroundColor: "#47ff8c",
            color: "#787c7a",
            textDecoration: false,
            marginRight: 5,

            
    
        }} ><h3 className="intro-button-text">Convert into API</h3></Button> 
        </Link>
        <Button
         style={{
            
            borderRadius: 25,
            backgroundColor: "#787c7a",
            color:"#47ff8c",
            borderWidth: 5,
            borderColor: "#787c7a",
            textDecoration: false,
            marginRight: 3,

            
    
        }}
        ><h3 className="intro-button-text">Convert into Website</h3></Button> 
        </h3>
        <h3 className="intro-h3">
           Convert Google Sheets into
        </h3>
       <h1 className="intro-h1">
           Sheet Site
      

        </h1>
  
    </div>
  
  

    

    </>
  );
}

export default Intro;
