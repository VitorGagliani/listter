import "./style.css";

export const Grid = ({ tarefas }) => {
  return (
    // A div "grid" deve conter apenas os itens gerados pelo .map
    <div className="grid">
      {/* É uma boa prática usar o singular ('tarefa') para o item
        e o plural ('tarefas') para o array.
      */}
      {tarefas.map((tarefa, index) => (
        <div className="card" key={index}>
          <div className="card-content">
            <h2>{tarefa.titulo}</h2>
            <p>{tarefa.tag}</p>
            <span></span>
            <h3>{tarefa.descricao}</h3>
          </div>
        </div>
      ))}
      {/* Os cards estáticos que estavam aqui foram removidos. */}
    </div>
  );
};