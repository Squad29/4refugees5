import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarGlobal from "./components/NavbarGlobal";
import Home from "./pages/Home";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavbarGlobal />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/hoteis" element={<Hoteis />} />
        <Route path="/pacotes" element={<Pacotes />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/destinos" element={<AdmDestino />} />
        <Route path="/admin/hoteis" element={<AdmHotel />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
