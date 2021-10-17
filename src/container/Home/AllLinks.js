import React, { useContext } from "react";
import LinksList from "../../components/LinksList";
import { LinksContext } from "../../contexts/LinksContext";

const AllLinks = () => {
    const { allLinks, handleAllLinks } = useContext(LinksContext);

    return allLinks.length ? (
        <LinksList links={allLinks} handleList={handleAllLinks} />
    ) : null;
};

export default AllLinks;
