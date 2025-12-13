import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/functionalComponents/navbar";
import Home from "./Component/functionalComponents/Home";
import About from "./Component/functionalComponents/About";
import Contact from "./Component/functionalComponents/Contact";
import LearningReact from "./Component/functionalComponents/LearningReact";

import './css/App.css';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learningReact" element={<LearningReact />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;