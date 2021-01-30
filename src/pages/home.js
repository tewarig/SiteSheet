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

function Home() {
  return <>
   <Intro/>
   <Feature />
  </>;
}

export default Home;
