import Home from "../pages/Home";
import Videos from "../pages/Videos";
import Photos from "../pages/Photos";
import Contact from "../pages/Contact";
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
