import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`${lowerCasePage}`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
