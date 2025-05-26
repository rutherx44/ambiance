import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Mission from "./pages/Mission";
import Features from "./pages/Features";
import Project from "./pages/Project";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mission />
      <Features />
      <Project />
    </>
  );
}

export default App;
