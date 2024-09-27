import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileNav, setMobileNav] = useState(false);
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const links = [
    { title: "Our Goals", link: "/#our-goals" },
    { title: "Our Services", link: "/#our-services" },
    { title: "Volunteering", link: "/#volunteering" },
  ];

  const handleLinkClick = (e) => {
    if (e.target.hash) {
      e.preventDefault();
      const targetElement = document.querySelector(e.target.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      setMobileNav(false);
    }
  };

  const toggleMobileNav = () => setMobileNav(!mobileNav);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > lastScrollPos) {
        // User is scrolling down, hide navbar
        setShowNavBar(false);
      } else {
        // User is scrolling up, show navbar
        setShowNavBar(true);
      }
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos]);

  return (
    <nav
      className={`fixed w-full flex items-center justify-between px-[50px] md:px-[50px] md:h-[74px] h-[60px] shadow-lg transition-transform duration-300 bg-white z-50 ${
        showNavBar ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ top: "0", position: "fixed" }}
    >
      <div>
        <NavLink to="/" aria-label="Home">
          <img src="./logo.png" alt="logo" className="h-10 md:h-11 lg:h-16" />
        </NavLink>
      </div>

      <div className="hidden md:flex items-center md:gap-2 lg:gap-8">
        {location.pathname !== "/" ? (
          <NavLink
            to="/"
            className="text-gray-700 hover:text-blue-500 md:text-md lg:text-lg"
            onClick={() => navigate("/")}
          >
            Home
          </NavLink>
        ) : (
          links.map((item, i) => (
            <NavLink
              to={item.link}
              key={i}
              className="text-gray-700 hover:text-blue-500 md:text-md lg:text-lg"
              onClick={handleLinkClick}
            >
              {item.title}
            </NavLink>
          ))
        )}
        <NavLink
          to="/about-us"
          className="text-gray-700 hover:text-blue-500 md:text-md lg:text-lg"
          onClick={() => navigate("/about-us")}
        >
          About Us
        </NavLink>
        <NavLink to="/contact-us">
          <button
            className="bg-blue-600 text-white rounded-3xl px-4 py-2 hover:bg-blue-700 transition duration-300 md:text-md lg:text-lg"
            onClick={() => navigate("/contact-us")}
          >
            Contact Us
          </button>
        </NavLink>
      </div>

      <div className="md:hidden">
        <button
          aria-label="Toggle menu"
          className="text-2xl"
          onClick={toggleMobileNav}
        >
          {mobileNav ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {mobileNav && (
        <div className="md:hidden absolute top-[60px] left-0 w-full bg-white shadow-lg z-20">
          <ul className="flex flex-col items-center py-4 gap-6">
            {location.pathname !== "/" ? (
              <NavLink
                to="/"
                className="text-gray-700 hover:text-blue-500 text-lg md:text-md lg:text-lg"
                onClick={() => {
                  navigate("/");
                  setMobileNav(false);
                }}
              >
                Home
              </NavLink>
            ) : (
              links.map((item, i) => (
                <NavLink
                  to={item.link}
                  key={i}
                  className="text-gray-700 hover:text-blue-500 text-lg md:text-md lg:text-lg"
                  onClick={handleLinkClick}
                >
                  {item.title}
                </NavLink>
              ))
            )}
            <NavLink
              to="/about-us"
              className="text-gray-700 hover:text-blue-500 text-lg"
              onClick={() => {
                navigate("/about-us");
                setMobileNav(false);
              }}
            >
              About Us
            </NavLink>
            <NavLink to="/contact-us">
              <button
                className="bg-blue-600 text-white rounded-3xl px-4 py-2 hover:bg-blue-700 transition duration-300 text-lg"
                onClick={() => {
                  navigate("/contact-us");
                  setMobileNav(false);
                }}
              >
                Contact Us
              </button>
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
