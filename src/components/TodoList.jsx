import React from "react";
import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

function TodoList({
  tarefas,
  removerTarefa,
  completarTarefa,
  editarTarefa,
  reverterTarefa,
  edicaoAtual,
  atualizarTarefa,
}) {
  return (
    <section className="todo-list">
      {tarefas.map((item, index) => (
        <React.Fragment key={index}>
          <TodoItem
            item={item}
            index={index}
            removerTarefa={removerTarefa}
            completarTarefa={completarTarefa}
            editarTarefa={editarTarefa}
            reverterTarefa={reverterTarefa}
          />
          {edicaoAtual === index && !item.completo && (
            <EditTodo
              item={item}
              indice={index}
              atualizarTarefa={atualizarTarefa}
            />
          )}
        </React.Fragment>
      ))}
    </section>
  );
}

export default TodoList;
