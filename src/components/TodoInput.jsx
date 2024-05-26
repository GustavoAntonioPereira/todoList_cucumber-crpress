import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

function TodoInput({ adicionarTarefa }) {
  const [novoTítulo, setNovoTítulo] = useState("");
  const [novaDescrição, setNovaDescrição] = useState("");
  const [prazo, setPrazo] = useState("");

  const handleAdd = () => {
    if (!novoTítulo.trim() || !novaDescrição.trim()) {
      alert("O título e a descrição da tarefa não podem estar vazios.");
      return;
    }

    adicionarTarefa(novoTítulo, novaDescrição, prazo);

    setNovoTítulo("");
    setNovaDescrição("");
    setPrazo("");
  };

  return (
    <div className="todo-input">
      <div className="todo-input-item">
        <label htmlFor="titulo" className="todo-input-label">
          Título
        </label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          value={novoTítulo}
          onChange={(e) => setNovoTítulo(e.target.value)}
          placeholder="Qual é o título da tarefa?"
        />
      </div>
      <div className="todo-input-item">
        <label htmlFor="descricao" className="todo-input-label">
          Descrição
        </label>
        <textarea
          id="descricao"
          name="descricao"
          value={novaDescrição}
          onChange={(e) => setNovaDescrição(e.target.value)}
          placeholder="Qual é a descrição da tarefa?"
          rows={4}
        />
      </div>
      <div className="todo-input-item">
        <label htmlFor="prazo" className="todo-input-label">
          Prazo
        </label>
        <input
          type="date"
          id="prazo"
          name="prazo"
          value={prazo}
          onChange={(e) => setPrazo(e.target.value)}
          placeholder="Qual é o prazo da tarefa?"
        />
      </div>
      <button type="button" onClick={handleAdd} className="primaryBtn">
        <AiOutlinePlus style={{ marginRight: "8px" }} />
        Adicionar
      </button>
    </div>
  );
}

export default TodoInput;
