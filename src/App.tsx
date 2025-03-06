
import "./App.css";

import logoImg from "./assets/logo.png";

function App() {
  return (
    <div>
      <main className="container">
        <img src={logoImg} alt="Logo da Calculadora de gasolina ou alcool" />
        <h1 className="title">Qual a melhor opção??</h1>

        <form className="form">
          <label> Álcool(preço por litro)</label>
          <input 
           className="input" 
           type="number"
           placeholder="Ex: 4.05"
           min='1'
           step='0.01'
           required
           />
          <label> Gasolina(preço por litro)</label>
          <input 
           className="input" 
           type="number"
           placeholder="Ex: 4.05"
           min='1'
           step='0.01'
           required
           />

           <input  className="button"type="submit" 
           value="Calcular"
           />
        </form>
      </main>
    </div>
  );
}

export default App;
