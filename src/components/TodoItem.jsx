import React, { useRef, useEffect } from "react";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineRollback,
} from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { getRandomColor } from "../utils/getRandomColor";

function TodoItem({
  item,
  index,
  removerTarefa,
  completarTarefa,
  editarTarefa,
  reverterTarefa,
}) {
  const listItemRef = useRef(null);

  useEffect(() => {
    if (listItemRef.current) {
      listItemRef.current.style.color = getRandomColor();
    }
  }, []);

  const prazoFormatado = item.prazo
    ? new Date(item.prazo).toLocaleDateString()
    : "Não definido";

  return (
    <section className="todo-list-item">
      <nav className="todo-item-actions">
        <button
          className="icon"
          onClick={() => removerTarefa(index)}
          title="Excluir?"
        >
          <AiOutlineDelete /> Excluir
        </button>
        {!item.completo && (
          <button
            className="check-icon"
            onClick={() => completarTarefa(index)}
            title="Concluir?"
          >
            <BsCheckLg /> Finalizar
          </button>
        )}
        {!item.completo && (
          <button
            className="check-icon"
            onClick={() => editarTarefa(index)}
            title="Editar?"
          >
            <AiOutlineEdit /> Editar
          </button>
        )}
        {item.completo && (
          <button
            className="check-icon"
            onClick={() => reverterTarefa(index)}
            title="Reverter para incompleto?"
          >
            <AiOutlineRollback /> Retornar
          </button>
        )}
      </nav>
      <ul>
        <li ref={listItemRef} className={item.completo ? "completed" : ""}>
          <div className="todo-item-header">
            <h3>{item.título}</h3>
            <p className="prazo">Prazo: {prazoFormatado}</p>
          </div>
          <p>{item.descrição}</p>
          {item.completo && item.dataConclusao && (
            <p className="concluido-em">
              Concluído em: {new Date(item.dataConclusao).toLocaleDateString()}
            </p>
          )}
        </li>
      </ul>
    </section>
  );
}

export default TodoItem;
