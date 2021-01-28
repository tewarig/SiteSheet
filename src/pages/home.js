import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";



import Header from '../comp/Header/header';
import Feature from '../comp/feature-list/feature';

function Home() {
  return (
    <>
    <Header mainHeader="main Header" anotherHeader="anotherHeader" dis="dis" mainAction="mainAction" secondaryAction="secaction" />
     <Feature badge="cool app" header1="yo!header one " header2="yo header two" dis="disss" feature1="cool app" feature2="cool2" feature3="cool3" />
    </>
  );
}

export default Home;
