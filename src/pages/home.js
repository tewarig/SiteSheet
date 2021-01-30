import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";


import Intro from '../comp/Intro/intro';
import Feature from '../comp/intro-feature/feature';
import Footer from '../comp/footer/footer';
import Banner from '../comp/feature-banner/banner';

function Home() {
  return <>
   <Intro/>
   <Feature />
   <Banner/>
   <Footer/>
  </>;
}

export default Home;
