import "./App.css";
import Header from "./components/header";
import { useState } from "react";
import Cliente from "./components/cliente";
import Produto from "./components/produto";

function App() {
  const [exibeTipoCadastro, setExibeTipoCadastro] = useState(true);
  const [cadastroCliente, setCadastroCliente] = useState(false);
  const [cadastroProduto, setCadastroProduto] = useState(false);

  function cadastraCliente() {
    setExibeTipoCadastro(false);
    setCadastroCliente(true);
  }

  function cadastraProduto() {
    setExibeTipoCadastro(false);
    setCadastroProduto(true);
  }

  function fechaCadastro() {
    setCadastroProduto(false);
    setCadastroCliente(false);
    setExibeTipoCadastro(true);
  }

  return (
    <>
      <div className="App-header">
        <Header />
      </div>
      <div className="App-body">
        {cadastroCliente ? <Cliente cancel={fechaCadastro} /> : ""}
        {cadastroProduto ? <Produto cancel={fechaCadastro} /> : ""}
        {exibeTipoCadastro ? (
          <div>
            <button onClick={cadastraCliente}>Cliente</button>
            <button onClick={cadastraProduto}>Produto</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
