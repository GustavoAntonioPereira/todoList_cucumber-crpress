Feature: Verificação de Alertas

  Scenario: Verificar alerta ao tentar adicionar uma tarefa sem título
    Given que o usuário está na página inicial
    When o usuário tenta adicionar uma tarefa sem título
    Then um alerta "O título da tarefa não pode estar vazio." deve ser exibido

  Scenario: Verificar alerta ao tentar adicionar uma tarefa sem descrição
    Given que o usuário está na página inicial
    When o usuário tenta adicionar uma tarefa sem descrição
    Then um alerta "A descrição da tarefa não pode estar vazia." deve ser exibido
