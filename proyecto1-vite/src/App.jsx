import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Grilla from "./components/Grilla";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Grilla />
      <Footer />
    </>
  );
}

export default App;
