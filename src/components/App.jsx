import Home from "../pages/Home";
import Videos from "../pages/Videos";
import Photos from "../pages/Photos";
import Contact from "../pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Erreur404 from "../pages/Erreur404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Erreur404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
