import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import Header from "../comp/Header/header";
import Feature from "../comp/feature-list/feature";
import Contact from "../comp/contact/contact";
import DivLine from "../comp/div-line/divLine";

function Home() {
  return <>this is home page</>;
}

export default Home;
