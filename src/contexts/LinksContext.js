import { createContext, useEffect, useState } from "react";
import links from "../data/links.json";

export const LinksContext = createContext();

export const LinksProvider = (props) => {
    const [featuredLinks, setFeaturedLinks] = useState([]);
    const [allLinks, setAllLinks] = useState([]);

    useEffect(() => {
        handleAllLinks();
        handleFeaturedLinks();
    }, []);

    const handleFeaturedLinks = (updatedLinks) => {
        let featuredLinks = updatedLinks;

        if (!featuredLinks) {
            featuredLinks = links.featuredLinks;
        }

        setFeaturedLinks(featuredLinks);
    };

    const handleAllLinks = (updatedLinks) => {
        let allLinks = updatedLinks;

        if (!allLinks) {
            allLinks = links.allLinks;
        }

        setAllLinks(allLinks);
    };

    return (
        <LinksContext.Provider
            value={{
                featuredLinks,
                handleFeaturedLinks,

                allLinks,
                handleAllLinks,
            }}
        >
            {props.children}
        </LinksContext.Provider>
    );
};
