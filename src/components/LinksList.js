import React from "react";

const LinksList = ({ links }) => {
    return (
        <div>
            <ul>
                {links.map((link) => {
                    return <li>{link.title}</li>;
                })}
            </ul>
        </div>
    );
};

export default LinksList;
