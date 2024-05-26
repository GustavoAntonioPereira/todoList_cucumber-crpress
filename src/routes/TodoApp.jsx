import React, { useState, useEffect } from "react";
import "../styles/App.css";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import EditTodo from "../components/EditTodo";

function TodoApp() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [todosCompletos, setTodosCompletos] = useState([]);
  const [todos, setTodos] = useState([]);
  const [edicaoAtual, setEdicaoAtual] = useState(null);

  useEffect(() => {
    const salvos = JSON.parse(localStorage.getItem("todolist")) || [];
    let salvosCompletos =
      JSON.parse(localStorage.getItem("completedTodos")) || [];
    salvosCompletos = salvosCompletos.map((item) => ({
      ...item,
      dataConclusao: new Date(item.dataConclusao),
    }));
    setTodosCompletos(salvosCompletos);
    setTodos(salvos);
  }, []);

  const adicionarTarefa = (título, descrição, prazo) => {
    if (!título.trim()) {
      alert("O título da tarefa não pode estar vazio.");
      return;
    }
    const novoItemTarefa = { título, descrição, prazo, completo: false };
    const listaAtualizada = [...todos, novoItemTarefa];
    setTodos(listaAtualizada);
    localStorage.setItem("todolist", JSON.stringify(listaAtualizada));
  };

  const removerTarefa = (indice) => {
    const listaReduzida = todos.filter((_, i) => i !== indice);
    setTodos(listaReduzida);
    localStorage.setItem("todolist", JSON.stringify(listaReduzida));
  };

  const removerTarefaCompleta = (indice) => {
    const listaReduzida = todosCompletos.filter((_, i) => i !== indice);
    setTodosCompletos(listaReduzida);
    localStorage.setItem("completedTodos", JSON.stringify(listaReduzida));
  };

  const completarTarefa = (indice) => {
    const itemCompleto = {
      ...todos[indice],
      completo: true,
      dataConclusao: new Date().toISOString(),
    };
    const listaCompletosAtualizada = [...todosCompletos, itemCompleto];
    const listaReduzida = todos.filter((_, i) => i !== indice);
    setTodosCompletos(listaCompletosAtualizada);
    setTodos(listaReduzida);
    localStorage.setItem(
      "completedTodos",
      JSON.stringify(listaCompletosAtualizada)
    );
    localStorage.setItem("todolist", JSON.stringify(listaReduzida));
  };

  const editarTarefa = (indice) => {
    setEdicaoAtual(indice);
  };

  const reverterTarefa = (indice) => {
    const itemRevertido = { ...todosCompletos[indice], completo: false };
    const listaCompletosAtualizada = todosCompletos.filter(
      (_, i) => i !== indice
    );
    const listaAtualizada = [...todos, itemRevertido];
    setTodosCompletos(listaCompletosAtualizada);
    setTodos(listaAtualizada);
    localStorage.setItem(
      "completedTodos",
      JSON.stringify(listaCompletosAtualizada)
    );
    localStorage.setItem("todolist", JSON.stringify(listaAtualizada));
  };

  const atualizarTarefa = (indice, novoTítulo, novaDescrição) => {
    const listaAtualizada = todos.map((item, index) =>
      index === indice
        ? { ...item, título: novoTítulo, descrição: novaDescrição }
        : item
    );
    setTodos(listaAtualizada);
    localStorage.setItem("todolist", JSON.stringify(listaAtualizada));
    setEdicaoAtual(null);
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <div className="todo-wrapper">
        <TodoInput adicionarTarefa={adicionarTarefa} />
        <div className="btn-area">
          <button
            className={`secondaryBtn ${!isCompleteScreen && "active"}`}
            onClick={() => setIsCompleteScreen(false)}
          >
            Pendentes
          </button>
          <button
            className={`secondaryBtn ${isCompleteScreen && "active"}`}
            onClick={() => setIsCompleteScreen(true)}
          >
            Completadas
          </button>
        </div>
        <TodoList
          tarefas={isCompleteScreen ? todosCompletos : todos}
          removerTarefa={
            isCompleteScreen ? removerTarefaCompleta : removerTarefa
          }
          completarTarefa={completarTarefa}
          editarTarefa={editarTarefa}
          reverterTarefa={reverterTarefa}
          edicaoAtual={edicaoAtual}
          atualizarTarefa={atualizarTarefa}
        />
      </div>
    </div>
  );
}

export default TodoApp;
