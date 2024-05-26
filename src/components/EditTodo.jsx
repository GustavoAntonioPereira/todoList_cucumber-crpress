import React, { useState } from "react";

function EditTodo({ item, indice, atualizarTarefa }) {
  const [titulo, setTitulo] = useState(item.título);
  const [descricao, setDescricao] = useState(item.descrição);

  const handleUpdate = () => {
    atualizarTarefa(indice, titulo, descricao);
  };

  return (
    <div className="edit__wrapper">
      <input
        type="text"
        placeholder="Título Atualizado"
        onChange={(e) => setTitulo(e.target.value)}
        value={titulo}
      />
      <textarea
        placeholder="Descrição Atualizada"
        rows={4}
        onChange={(e) => setDescricao(e.target.value)}
        value={descricao}
      />
      <button type="button" onClick={handleUpdate} className="primaryBtn">
        Atualizar
      </button>
    </div>
  );
}

export default EditTodo;
