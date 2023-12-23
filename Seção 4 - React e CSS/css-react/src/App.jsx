import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("Gustavo")

  const redTitle = true
  return (
    <div className="App">
      {/* CSS Global */}
    <h1>React com CSS</h1> 
      {/* CSS de componente */} 
    <MyComponent/>
    <p>Este parágrafo é do App.jsx</p>

    {/* Inline CSS */}
    <p style={{color: "magenta", padding: "25px", borderTop: "2px solid red", fontWeight: "bolder"}}>
      Este elemento foi estilizado de forma inline.
    </p>

    {/* CSS Inline Dinâmico */}
    <h2 style={n < 10 ? ({color: "purple"}): ({color: "magenta"})}>CSS Dinâmico</h2>

    <h2 style={name === "Gustavo" ? ({color: "green", backgroundColor: "#000"}): null } >CSS Dinâmico</h2>

    {/* Classe dinâmica */}
    <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica.</h2>

    {/* CSS Modules */}
    <Title/>
    <h2 className='my_title'>Testando</h2>
    </div>

  );
}

export default App;
