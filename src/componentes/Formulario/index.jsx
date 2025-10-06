import { Botao } from "./btn-form";
import { InputForm } from "./input";
import "./style.css";

export const Formulario = () => {
  return (
    <div className="Form">
      <div className="forms">
        <div className="form-title">
          <h1>Inserir nova tarefa</h1>
        </div>

        <InputForm
          label="Nome da tarefa"
          placeholder="Digite o nome da sua tarefa"
        />
        <InputForm
          label="Descrição da tarefa"
          placeholder="Digite a descrição da tarefa"
        />
        <InputForm
          label="Categoria da tarefa"
          placeholder="Digite uma categoria para a tarefa"
          />

       <div className="botao">
          <Botao botao="Criar Tarefa"/>
       </div>

      </div>


    </div>
  );
};
