import React from "react";

import Header from  '../../../comp/Header/header'
import Feature from "../../../comp/feature-list/feature";
import Contact from "../../../comp/contact/contact";

function LandingPage() {
  return (
    <>
      <Header
        mainHeader="main Header"
        anotherHeader="anotherHeader"
        dis="dis"
        mainAction="mainAction"
        secondaryAction="secaction"
      />

      <Feature
        badge="cool app"
        header1="yo!header one "
        header2="yo header two"
        dis="disss"
        feature1="cool app"
        feature2="cool2"
        feature3="cool3"
      />
      <Contact
        header="reach us out"
        dis="nanital,uk"
        address="haldwai"
        statePin="263139"
        email="hello@gmail.com"
      />
    </>
  );
}

export default LandingPage;
