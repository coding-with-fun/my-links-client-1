import React from "react";
import AllLinks from "../container/Home/AllLinks";
import FeaturedLinks from "../container/Home/FeaturedLinks";

const Home = () => {
    return (
        <div className="container">
            <FeaturedLinks />
            <AllLinks />
        </div>
    );
};

export default Home;
