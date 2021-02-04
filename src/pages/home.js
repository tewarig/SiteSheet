import React from "react";



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
