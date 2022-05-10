import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [accept, setAccept] = useState('')

  function onChangeValue(e)
  {

    const tests = 
    [
      /^[v]$/,
      /^[v][0-9\b]+$/,
      /^[v][0-9\b]+[.]$/,
      /^[v][0-9\b]+[.][0-9\b]+$/,
    ]

    console.log(e.target.value)


    if (e.target.value === 0)
      setAccept('')
    else if (e.target.value == 'v0')
      setAccept('v')
    else if (/^[1-9]$/.test(e.target.value))
      setAccept(`v${e.target.value}`)
    else if (e.target.value === '' 
      || tests.some(x =>x.test(e.target.value)))
      setAccept(e.target.value)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <input value={accept} onChange={onChangeValue}/>
      </header>
    </div>
  );
}

export default App;
