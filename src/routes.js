import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../src/Pages/Home";
import Contato from "../src/Pages/Contato";
import Resumo from "./Pages/Resumo";
import Projetos from "./Pages/Projetos";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function RoutesWeb() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/resumo" element={<Resumo />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
