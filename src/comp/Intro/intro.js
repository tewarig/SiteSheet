import React from 'react';
import {CircularProgress} from '@material-ui/core';
import { makeStyles , Box } from '@material-ui/core/styles'
import Exel from './exel.svg';
import  "./intro.css";
import Typewriter from 'typewriter-effect';



function Intro() {

  return (
    <>
   
    <div className="intro-bg" >
    <div className="intro-blankSpace">
          

         </div>
        <img src={Exel} className="intro-exelImg"></img>
        
    <h3 className="intro-typeWrite">
        <Typewriter
        options={{
        strings: ['API', 'Website','Fun Game'],
         autoStart: true,
         loop: true,
       }}

             />
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
