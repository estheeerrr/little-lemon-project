import './styles/App.css';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";
import React from "react";



function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
