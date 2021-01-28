import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";



import Header from '../comp/Header/header';

function Home() {
  return (
    <>
    <Header mainHeader="main Header" anotherHeader="anotherHeader" dis="dis" mainAction="mainAction" secondaryAction="secaction" />
    </>
  );
}

export default Home;
