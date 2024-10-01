// App.js
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useTranslation } from "react-i18next";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import ServiceDetail from "./components/Main/ServiceDetail";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import { useEffect, useRef, useState } from "react";
import { MdLanguage } from "react-icons/md";
import GoalsDetails from "./components/OurGoals/GoalsDetails";

function App() {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (language) => {
    // Ensure that i18n has been properly initialized
    if (i18n && typeof i18n.changeLanguage === "function") {
      i18n.changeLanguage(language);
    } else {
      console.error(
        "i18n is not properly initialized or changeLanguage is not a function"
      );
    }
    setIsDropdownOpen(false); // Close dropdown after language change
  };

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/goals" element={<GoalsDetails />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      <div className="fixed bottom-6 right-8 bg-blue-200" ref={dropdownRef}>
        <button
          type="button"
          className="bg-white m-[1px] px-3 py-2 text-sm flex font-semibold text-gray-900 rounded-lg shadow-sm hover:bg-gray-50"
          onClick={toggleDropdown}
        >
          <MdLanguage className="text-xl" /> {i18n.language}
        </button>

        {isDropdownOpen && (
          <div className="absolute mt-[-115px] bg-white shadow-lg rounded-md">
            <button
              onClick={() => changeLanguage("en")}
              className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
            >
              English
            </button>
            <button
              onClick={() => changeLanguage("np")}
              className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
            >
              नेपाली
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
