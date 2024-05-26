Feature: Completar Tarefa

Scenario Outline: Marcar uma tarefa como concluída
  Given que o usuário está na página inicial
  And uma tarefa "<titulo>" está na lista de tarefas pendentes
  When o usuário marca a tarefa "<titulo>" como concluída
  Then a tarefa "<titulo>" deve aparecer na lista de tarefas concluídas

Examples:
  | titulo          |
  | Estudar Cypress |
  | Comprar leite   |
  | Fazer exercício |
