Feature: Verificação de Navegação

  Scenario: Navegar entre tarefas pendentes e concluídas
    Given que o usuário está na página inicial
    When o usuário clica no botão "Completadas"
    Then a lista de tarefas concluídas deve ser exibida
    When o usuário clica no botão "Pendentes"
    Then a lista de tarefas pendentes deve ser exibida
