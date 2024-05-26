Feature: Remover Tarefa

  Scenario Outline: Remover uma tarefa existente
    Given que o usuário está na página inicial
    And uma tarefa "<titulo>" está na lista de tarefas pendentes
    When o usuário remove a tarefa "<titulo>"
    Then a tarefa "<titulo>" não deve mais aparecer na lista de tarefas pendentes

  Examples:
    | titulo          |
    | Estudar Cypress |
    | Comprar leite   |
