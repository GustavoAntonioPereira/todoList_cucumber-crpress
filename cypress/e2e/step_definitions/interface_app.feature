Feature: Verificação de Interface

  Scenario: Verificar se os botões de ação estão visíveis
    Given o usuário está na página inicial
    Then o botão "Adicionar" deve estar visível
    And o botão "Completadas" deve estar visível
