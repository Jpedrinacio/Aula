import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Telainicial from "../src/pages/telaInicial";
import CadastroProduto from "./pages/cadastroProd";
import "./index.css";

function Main() {
  return (
    <Router>
      <header className="menu-navegacao">
        <h1 className="titulo-site">Minha Loja</h1>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/cadastro">Cadastro de Produto</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Telainicial />} />
        <Route path="/cadastro" element={<CadastroProduto />} />
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
