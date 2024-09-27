import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import ServiceDetail from "./components/Main/ServiceDetail";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
