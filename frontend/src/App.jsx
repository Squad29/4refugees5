import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarGlobal from "./components/NavbarGlobal";
import Home from "./pages/Home";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Refugiado from "./pages/Refugiado";
import Contratante from "./pages/Contratante";

function App() {
  return (
    <BrowserRouter>
      <NavbarGlobal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/refugiado" element={<Refugiado />} />
        <Route path="/contratante" element={<Contratante />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
