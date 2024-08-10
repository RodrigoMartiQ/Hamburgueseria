import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import Info from "./info/Info";
import Info2 from "./info2/Info2";
import Menu from "./menu/Menu";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import "./styles/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Navbar />
    <Hero />
    <Info />
    <Info2 />
    <Menu />
    <Contact />
    <Footer />
  </>

);




