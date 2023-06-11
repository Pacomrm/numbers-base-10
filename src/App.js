/*Michael Rodriguez M
* Calidad, Verificacion y Validacion del software
* Universidad Cenfotec
* Laboratorio #1
* Revisión por la compañera: Liz Montero
* R2_V1 - 110623 ' 10:00am
* */

import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [number, setNumber] = useState('');
    const [base, setBase] = useState('');
    const [finalNum, setFinalNum] = useState('')

    /*Obtiene el numero a transformar*/
    const handleNumberChange = (event) => {
        const decimalValue = parseInt(event.target.value, 10);
        setNumber(event.target.value);
        console.log(number);
    };

    /*Obtiene la base deseada*/
    const handleBaseChange = (event) => {
        setBase(event.target.value);
    };

    /*Realiza la conversión del numero*/
    function decimalToBase(number, base) {
        const digits = [];
        while (number !== 0) {
            const remainder = number % base;
            digits.unshift(remainder);
            number = Math.floor(number / base);
        }
        return digits.join("");
    }

    /*Funcion que se ejecuta con el botón*/
    function convertNumber(){
        const convertedValue = decimalToBase(number, base);
        setFinalNum(convertedValue);
    }

    return (
    <div className="App">
      <header></header>
      <main>
        <div className="container-md">
          <p>Transformar un número de base 10 a otra</p>
          <p>Número a usar</p>
          <input
              type="number"
              name="number"
              value={number}
              onChange={(e) => handleNumberChange(e)}
              data-number={number}
          />
          <p>Base deseada</p>
          <input
              type="number"
              name="base"
              value={base}
              onChange={(e) => handleBaseChange(e)}
              data-base={base}
          />
        <div><button onClick={convertNumber}>Convert</button></div>
        <p>Número final: {finalNum}</p>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
