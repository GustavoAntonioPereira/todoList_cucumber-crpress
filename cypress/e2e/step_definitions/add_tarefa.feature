Feature: Adicionar Tarefa

Scenario Outline: Adicionar uma nova tarefa
  Given que o usuário está na página inicial
  When o usuário adiciona uma nova tarefa com título "<titulo>" e descrição "<descricao>"
  Then a tarefa "<titulo>" deve aparecer na lista de tarefas pendentes

Examples:
  | titulo          | descricao                       |
  | Estudar Cypress | Aprender a usar Cypress         |
  | Comprar leite   | Comprar leite no supermercado   |
  | Fazer exercício | Fazer 30 minutos de exercício   |
