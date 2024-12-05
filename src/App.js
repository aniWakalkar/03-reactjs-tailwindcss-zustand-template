import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Counter from "./components/Counter";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-full flex flex-col">
      <Router>
        <Navbar />
        <div className="flex-grow overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/aboutUs" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
