import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.jsx";
import HomeGuest from "./components/HomeGuest.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/pages/About.jsx";
import Terms from "./components/pages/Terms.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeGuest />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.render(<Main />, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept();
}
