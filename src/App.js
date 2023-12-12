import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Basket from "./pages/basket/Basket";
import "./index.css";
import Home from "./pages/home/Home";
import Details from "./pages/movieDetails/MovieDetails";
function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
