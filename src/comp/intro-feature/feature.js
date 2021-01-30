import React from 'react';
import {CircularProgress} from '@material-ui/core';
import { makeStyles , Box } from '@material-ui/core/styles'
import  "./feature.css";

import FileCopyIcon from '@material-ui/icons/FileCopy';
import LanguageIcon from '@material-ui/icons/Language';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

function Feature() {

  return (
    <div className="intro-feature-comp">
       <div className="intro-video-Grid">

       
        <div className="intro-card">
            <FileCopyIcon className="intro-svg-icon"/>
            <h1 className="intro-heading">Make website or api in a snap</h1>
            <h3 className="intro-des">
                Just publish your google sheet to web. share your google sheet url and your api or website is ready.<br/>Easy Peasy.
            </h3>
     </div>

    <div className="intro-card">
        <LanguageIcon className="intro-svg-icon"/>
        <h1 className="intro-heading">Publish website in a snap</h1>
        <h3 className="intro-des">
               Share your google sheet url ,choose template you site is ready
            </h3>

    </div>

    <div className="intro-card">
    <SentimentVerySatisfiedIcon className="intro-svg-icon"/>
    <h1 className="intro-heading">Share your data in a cool way</h1>
    <h3 className="intro-des">
        Well making website from exel sheet is fun and cool . plus you will have a cool link to share your data.
     </h3>

    </div>


  
     </div>
 
  
  

    

    </div>
  );
}

export default Feature;
