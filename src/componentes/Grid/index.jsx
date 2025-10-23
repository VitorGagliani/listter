import "./style.css";
import { IoCloseCircle } from 'react-icons/io5';


export const Grid = ({ tarefas, deletarTarefa }) => {
  return (
    <div className="grid">   
      {tarefas.map((tarefas, index) => (
        <div className="card" key={index}>
          <div className="card-content">
            <div className="card-title">
      <IoCloseCircle className="icon-close" onClick={() => deletarTarefa(tarefas.titulo)} />
            <h2>{tarefas.titulo}</h2>
            </div>
            <p>{tarefas.tag}</p>
            <span></span>
            <h3>{tarefas.descricao}</h3>
          </div>
        </div>
      ))}
      {/* Os cards estáticos que estavam aqui foram removidos. */}
    </div>
  );
};