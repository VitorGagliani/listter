
import { useState } from 'react';
import './App.css';
import { Banner } from './componentes/Banner/index.jsx';
import { Formulario } from './componentes/Formulario/index.jsx';
import { Grid } from './componentes/Grid/index.jsx';

function App() {

  const adicionarTarefa  = (titulo, tag, descricao) => {
    const novaTarefa = {
      titulo:titulo,
      tag:tag,
      descricao:descricao
    };


    setTarefas([...tarefas, novaTarefa]);
    }

    const deletarTarefa = (titulo) => {
      setTarefas(tarefas.filter(tarefa => tarefa.titulo !== titulo));
    }

    const [tarefas, setTarefas] = useState([]);
  

  return (
    <div className="App">
      <Banner/>
      <Formulario aoSalvar={adicionarTarefa}/>
      <Grid tarefas={tarefas} deletarTarefa={deletarTarefa} />
    </div>
  );
}

export default App;
