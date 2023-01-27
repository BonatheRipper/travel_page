import React, { useState } from "react";
import "aos/dist/aos.css";

import Category from "./components/Category";
import Destination from "./components/Destination";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Subscription from "./components/Subscription";
const App = () => {
  return (
    <main className="flex flex-col items-center justify-start overflow-hidden">
      <Navbar />
      <Header />
      <Category />
      <Destination />
      <Partners />
      <Subscription />
      <Footer />
    </main>
  );
};

export default App;
