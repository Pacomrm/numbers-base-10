import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [transformedNumber, setTransformedNumber] = useState('');
    const [number, setNumber] = useState('');
    const [base, setBase] = useState('');

    const baseToChar = (base) => {
        const baseChars = '0123456789abcdefghijklmnopqrstuvwxyz';
        if (base === 10) {
            return baseChars;
        }
        const baseLength = base.toString().length;
        const baseMap = Array.from({ length: baseLength }, (_, i) => {
            return i.toString();
        });
        return baseMap.join('');
    };

    const handleInputChange = (event) => {
        console.log("here"+transformedNumber);
        const { name, value } = event.target;

        if (name === 'number') {
            setNumber(value);
        } else if (name === 'base') {
            setBase(value);
        }
        let newBase = 0;

        if (newBase === 0 || isNaN(newBase)) {
            return;
        }

        const transformed = (num) => {
            let result = '';
            while (num > 0) {
                const remainder = num % newBase;
                result = baseToChar(newBase) + result;
                num = Math.floor(num / newBase);
            }
            return result;
        };

        const transformedValue = transformed(parseInt(value, 10));
        console.log(transformedValue);
        setTransformedNumber(transformedValue);
    };

    return (
    <div className="App">
      <header></header>
      <main>
        <div className="container-md">
          <p>Transform a number Base 10 into any</p>
          <p>Number to be used</p>
          <input
              type="number"
              name="number"
              value={number}
              onChange={(e) => handleInputChange(e)}
              data-number={number}
          />
          <p>Base to be transformed</p>
          <input
              type="number"
              name="base"
              value={base}
              onChange={(e) => handleInputChange(e)}
              data-base={base}
          />
        <p>Transformed Number: {transformedNumber}</p>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
