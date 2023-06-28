import React, { useState } from "react";

import useMediaQuery from "../hooks/useMediaQuery";
import Link from "../components/Link";

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";
  const handleClick = () => setSelectedPage(lowerCasePage);
  return (
    <nav className={` ${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">JE</h4>
        {/*desktop*/}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={handleClick}
            ></Link>
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={handleClick}
            ></Link>
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={handleClick}
            ></Link>
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={handleClick}
            ></Link>
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={handleClick}
            ></Link>
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img src="../assets/menu-icon.svg" alt="menu-icon" />
          </button>
        )}
        {/*mobile menu popup*/}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px] ">
            {/*Close Icon*/}
            <div className="flex justify-end p-12 ">
              <button
                onClick={() => {
                  setIsMenuToggled(!isMenuToggled);
                }}
              >
                <img src="../assets/close-icon.svg" alt="close-icon" />
              </button>
            </div>
            {/*menu items*/}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue ">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                onClick={handleClick}
              ></Link>
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                onClick={handleClick}
              ></Link>
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                onClick={handleClick}
              ></Link>
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                onClick={handleClick}
              ></Link>
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                onClick={handleClick}
              ></Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
