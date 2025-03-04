import React from "react";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Choose from "./components/Choose";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="font-publicSans ">
      <Navbar />
      <Home />
      <Choose />
      <Articles />
      <Footer />
    </div>
  );
};

export default App;
