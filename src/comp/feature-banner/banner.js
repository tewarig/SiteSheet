import React from 'react';
import  "./banner.css";

import BannerImg from './info.svg';


function Banner({}) {

  return (
    <div className="banner-div">
   
   <img src={BannerImg} className="banner-img"/>
  <h1 className="banner-text"> so, what will you build? </h1>
    </div>
  );
}

export default Banner;
