Feature: Verificação de Carregamento da Página

  Scenario: Verificar se a página carrega corretamente e os inputs estão visíveis
    Given o usuário está na página inicial
    Then o input de título deve estar visível
    And o input de descrição deve estar visível
