import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherApp from "./components/WeatherApp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WeatherApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;