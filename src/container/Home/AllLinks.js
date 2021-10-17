import React, { useContext } from "react";
import LinksList from "../../components/LinksList";
import { LinksContext } from "../../contexts/LinksContext";

const AllLinks = () => {
    const { allLinks } = useContext(LinksContext);

    return allLinks.length ? <LinksList links={allLinks} /> : null;
};

export default AllLinks;
