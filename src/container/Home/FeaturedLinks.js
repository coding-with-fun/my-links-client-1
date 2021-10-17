import React, { useContext } from "react";
import LinksList from "../../components/LinksList";
import { LinksContext } from "../../contexts/LinksContext";

const FeaturedLinks = () => {
    const { featuredLinks, handleFeaturedLinks } = useContext(LinksContext);

    return featuredLinks.length ? (
        <LinksList links={featuredLinks} handleList={handleFeaturedLinks} />
    ) : null;
};

export default FeaturedLinks;
