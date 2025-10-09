import { Botao } from "./btn-form";
import { useState } from "react";
import { InputForm } from "./input";
import "./style.css";

export const Formulario = (props) => {

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tag, setTag] = useState("");

  const aoSubmeter = (e) =>{
    e.preventDefault();
    props.aoSalvar(titulo, tag, descricao);
    setTitulo("");
    setDescricao("");
    setTag("");
  }

  return (
    <form className="Form" onSubmit={aoSubmeter}>
      <div className="forms">
        <div className="form-title">
          <h1>Inserir nova tarefa</h1>
        </div>

        <InputForm
          label="Nome da tarefa"
          placeholder="Digite o nome da sua tarefa"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required={true}
        />
        <InputForm
          label="Descrição da tarefa"
          placeholder="Digite a descrição da tarefa"
          value={descricao}
          onChange={(e)=>setDescricao(e.target.value)}
          required={true}

        />
        <InputForm
          label="Categoria da tarefa"
          placeholder="Digite uma categoria para a tarefa"
          value={tag}
          onChange={(e)=>setTag(e.target.value)}
          max="35"
          />

       <div className="botao">
          <Botao botao="Criar Tarefa"/>
       </div>

      </div>


    </form>
  );
};
