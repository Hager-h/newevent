import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Intro from "./components/Intro/Intro.js";
import Overview from "./components/Overview/Overview";
import Speakers from "./components/Speakers/Speakers.js";
import Programs from "./components/Programs/Programs.js";
import Register from "./components/Register/Register.js";
import Venue from "./components/Venue/Venue.js";
import Contact from "./components/Contact/Contact.js";
import Sponsors from "./components/Sponsors/Sponsors.js";
import Home from "./components/Home";
import Nav from "./components/Navbar/Nav";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Footer from "./components/Footer/Footer";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Nav isScrolled={isScrolled} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Intro" element={<Intro />} />
        <Route path="/overview" element={<Overview />} />
        // <Route path="/speakers" element={<Speakers />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      <button
        className={`btnn ${isScrolled ? "active" : "top"}`}
        onClick={handleScrollToTop}
      >
        {<FaArrowUp />}
      </button>
    </div>
  );
}

export default App;
