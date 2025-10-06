import logo from './logo.svg';
import './App.css';
import { Banner } from './componentes/Banner/index.jsx';
import { Formulario } from './componentes/Formulario/index.jsx';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Formulario/>
    </div>
  );
}

export default App;
