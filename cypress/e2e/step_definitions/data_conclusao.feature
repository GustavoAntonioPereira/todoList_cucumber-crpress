Feature: Verificação de Data de Conclusão

  Scenario: Verificar a data de conclusão de uma tarefa concluída
    Given que o usuário está na página inicial
    And uma tarefa "Estudar Cypress" está na lista de tarefas concluídas
    Then a data de conclusão deve estar visível para a tarefa "Estudar Cypress"
