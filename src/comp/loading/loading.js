import React from 'react';
import {CircularProgress} from '@material-ui/core';
import  "./loading.css";
import Funnies from 'funnies';



function Loading({color}) {
  let funnies = new Funnies();

  return (
    <>
   
   <div className="centered ">
   
   <h1>
     {funnies.message()} <br/>
   <div className="loading">  <CircularProgress color={color}  /> </div>
   </h1>
   </div>
  
  

    

    </>
  );
}

export default Loading;
