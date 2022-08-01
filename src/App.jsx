import React from "react";
import About from "./Components/About/About";
import Day from "./Components/Day/Day";

import { Routes, Route } from "react-router-dom";
import nasa from "./video/nasa2.mp4";
import style from "../src/Components/Styles/Style.module.css";
import Header from "./Components/Nav/Header";
import Search from "./Components/Search/Search";
import SearchVideo from "./Components/SearchVideo/SearchVideo";
function App() {
  return (
    <>
      <video className={style.videoBackground} src={nasa} autoPlay loop muted>
        <source type="video/mp4" />
      </video>
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/day" element={<Day />} />
        <Route path="/video" element={<SearchVideo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
