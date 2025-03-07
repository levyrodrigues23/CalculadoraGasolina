import "./App.css";
import { useState, FormEvent } from "react";
import logoImg from "./assets/logo.png";

/*
calculo: alcool / gasolina
se o resultado for menor que 0.7, compensa utilizar o álcool
*/

interface InfoProps {
  title: string;
  gasolina: string | number;
  alcool:  string |number;
}

function App() {
  const [gasolinaInput, setGasolinaInput] = useState(0);
  const [alcoolInput, setAlcoolInput] = useState(0);
  const [info, setInfo] = useState<InfoProps>();

  function calcular(event: FormEvent) {
    event.preventDefault();


    let calculo = (alcoolInput / gasolinaInput)
    console.log(calculo)

    if (calculo < 0.7) {
      setInfo({
        title: "Compensa usar álcool!",
        gasolina : formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      });
    } else {
      setInfo({
        title: "Compensa usar gasolina!",
        gasolina : formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      });
    }
  }

  function formatarMoeda(valor: number){
let valorFormatado = valor.toLocaleString("pt-br",{
  style: "currency",
  currency:  'BRL'
})

return valorFormatado

  }

  return (
    <div>
      <main className="container">
        <img src={logoImg} alt="Logo da Calculadora de gasolina ou álcool" />
        <h1 className="title">Qual a melhor opção?</h1>

        <form className="form" onSubmit={calcular}>
          <label>Álcool (preço por litro)</label>
          <input
            className="input"
            type="number"
            placeholder="Ex: 4.05"
            min="1"
            step="0.01"
            required
            value={alcoolInput}
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
          />

          <label>Gasolina (preço por litro)</label>
          <input
            className="input"
            type="number"
            placeholder="Ex: 4.05"
            min="1"
            step="0.01"
            required
            value={gasolinaInput}
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
          />

          <input className="button" type="submit" value="Calcular" />
        </form>

        {info && (
          <section className="result">
            <h2 className="result-title">{info.title}</h2>
            <span>Álcool: R$ {info.alcool}</span>
            <span>Gasolina: R$ {info.gasolina}</span>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
