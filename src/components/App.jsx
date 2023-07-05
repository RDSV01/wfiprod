import "../App.css";
import Home from "../pages/home";
import Videos from "../pages/videos";
import Photos from "../pages/photos";
import Contact from "../pages/contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
