import React from 'react';
import { Button} from '@material-ui/core/'
import  "./banner.css";

import BannerImg from './info.svg';

import {
   
    Link,
    
  } from "react-router-dom";

function Banner({}) {

  return (
    <div className="banner-div">
   
   <img src={BannerImg} className="banner-img"/>
  <h1 className="banner-text"> so, with over 6+ templates what will you build? </h1>
    </div>
  );
}

export default Banner;
