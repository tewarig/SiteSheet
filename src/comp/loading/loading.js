import React from 'react';
import {CircularProgress} from '@material-ui/core';
import { makeStyles , Box } from '@material-ui/core/styles'
import  "./loading.css";
import Funnies from 'funnies';



function Loading() {
  let funnies = new Funnies();

  return (
    <>
   
   <div className="centered ">
   
   <h1>
     {funnies.message()} <br/>
   <div className="loading">  <CircularProgress color={'#000'}  /> </div>
   </h1>
   </div>
  
  

    

    </>
  );
}

export default Loading;
