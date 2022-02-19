import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/login";
import NotFoundPage from "./screens/notfoundpage"
import novoCadastro from "./screens/novo-cadastro";
import OpcoesRefeicoes from "./screens/options-refeicoes";
import MostrarRefeicoes from "./screens/refeicao";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route path="/cadastrar" element={<novoCadastro />} />
        <Route path="/refeicoes" element={<MostrarRefeicoes />} />
        <Route path="/refeicoes/adicionar" element={<OpcoesRefeicoes />} />
        <Route path="/refeicoes/editar" element={<OpcoesRefeicoes />} />
        <Route path="/refeicos/deletar" element={<OpcoesRefeicoes />} />
        <Route path="/error" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
