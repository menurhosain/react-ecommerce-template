import React from "react";
import Header from "./../components/global/header.component";
import Banner from "./../components/home/banner.component";
import Cta from "./../components/home/cta.component";

const Home = () => (
  <div className="home">
    <Header />
    <Banner />
    <Cta />
  </div>
);

export default Home;
