import './App.css';

import MKAssets from './assets/MK-Assets.png'

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public - Dá para acessar diretamente pela barra */}
      <div>
          <img src="/MK-Public.png" alt="Mortal Kombat" width="250"/>
      </div>  
      {/* Imagem em asset */}
      <div>
           <img src={MKAssets} alt="Mortal Kombat" width="250"/>
      </div>
    </div>
  );
}

export default App;
