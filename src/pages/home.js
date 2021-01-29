import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";


import Intro from '../comp/Intro/intro';

function Home() {
  return <>
   <Intro/>
  </>;
}

export default Home;
