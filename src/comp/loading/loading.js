import React from 'react';
import {CircularProgress} from '@material-ui/core';
import { makeStyles , Box } from '@material-ui/core/styles'
import  "./loading.css";


function Loading() {
  return (
    <>
   <div className="centered ">
   <CircularProgress  />
       
  </div>
  

    

    </>
  );
}

export default Loading;
