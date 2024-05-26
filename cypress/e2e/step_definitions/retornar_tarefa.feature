Feature: Gerenciamento de Tarefas

  Scenario: Adicionar e desmarcar tarefa como concluída
    Given que o usuário está na página inicial
    When o usuário adiciona uma nova tarefa com título "Estudar Cypress" e descrição "Revisar todos os conceitos básicos"
    And o usuário marca a tarefa "Estudar Cypress" como concluída
    And o usuário desmarca a tarefa "Estudar Cypress" como concluída
    Then a tarefa "Estudar Cypress" deve aparecer novamente na lista de tarefas pendentes
