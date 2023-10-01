import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Checkout from "./Checkout";
import Home from "./Home";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element= {<Login/>} />
          {/* <Route path="/Home" element= {<Home/>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

