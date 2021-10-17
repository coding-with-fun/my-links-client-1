import React, { useContext } from "react";
import LinksList from "../../components/LinksList";
import { LinksContext } from "../../contexts/LinksContext";

const FeaturedLinks = () => {
    const { featuredLinks } = useContext(LinksContext);

    return featuredLinks.length ? <LinksList links={featuredLinks} /> : null;
};

export default FeaturedLinks;
