import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./sections/navbar/Navbar"
import Hero from "./sections/hero/Hero"
import Info from "./sections/info/Info"
import Info2 from "./sections/info2/Info2"
import Menu from "./sections/menu/Menu"
import Contact from "./sections/contact/Contact"
import Footer from "./sections/footer/Footer"
import "./styles/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Navbar />
    <Hero/>
    <Info />
    <Info2 />
    <Menu />
    <Contact />
    <Footer />
  </>

);




