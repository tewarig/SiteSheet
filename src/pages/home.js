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

function Home() {
  return <>
   <Intro/>
   <Feature />
   <Footer/>
  </>;
}

export default Home;
