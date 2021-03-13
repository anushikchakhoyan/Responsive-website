import React from "react";

import SubHeader from "../../components/SubHeader";
import Products from "../../components/Products";
import WhoWeAre from "../../components/WhoWeAre";
import Hero from "../../components/Hero";

const Home = () => (
    <>
        <SubHeader/>
        <Hero/>
        <Products />
        <WhoWeAre />
        <Products />
    </>
)

export default Home;
