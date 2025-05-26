import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Mission from "./pages/Mission";
import Features from "./pages/Features";
import Project from "./pages/Project";
import Testimonial from "./pages/Testimonial";
import Team from "./pages/Team";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mission />
      <Features />
      <Project />
      <Testimonial />
      <Team />
    </>
  );
}

export default App;
