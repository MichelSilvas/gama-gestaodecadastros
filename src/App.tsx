import "./App.css";
import Header from "./components/header";
import Cadastro from "./components/cadastro";

function App() {
  return (
    <>
      <div className="App-header">
        <Header />
      </div>
      <div className="App-body">
        <Cadastro />
      </div>
    </>
  );
}

export default App;
