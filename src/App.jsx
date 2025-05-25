import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Mission from "./pages/Mission";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mission />
    </>
  );
}

export default App;
