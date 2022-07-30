import React from "react";
import About from "./Components/About/About";
import Day from "./Components/Day/Day";
import Main from "./Components/Main/Main";
// import Nav from "./Components/Nav/Nav";
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
     <Route path='/' element={<Main/>}/>
     <Route path='/day' element={<Day/>}/>
     <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
