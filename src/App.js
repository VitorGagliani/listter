
import { useState, useEffect } from 'react';
import './App.css';
import { Banner } from './componentes/Banner/index.jsx';
import { Formulario } from './componentes/Formulario/index.jsx';
import { Grid } from './componentes/Grid/index.jsx';
import { v4 as uuidv4 } from 'uuid';


function App() {

   const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });

  const adicionarTarefa  = (titulo, tag, descricao) => {
    const novaTarefa = {
      id: uuidv4(),
      titulo:titulo,
      tag:tag,
      descricao:descricao
    };


    setTarefas([...tarefas, novaTarefa]);
    }

    const deletarTarefa = (id) => {
      setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
    }

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);
  

  return (
    <div className="App">
      <Banner/>
      <Formulario aoSalvar={adicionarTarefa}/>
      <Grid tarefas={tarefas} deletarTarefa={deletarTarefa}/>
    </div>
  );
}

export default App;
