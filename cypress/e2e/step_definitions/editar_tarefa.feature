Feature: Editar Tarefa

  Scenario Outline: Editar uma tarefa existente
    Given que o usuário está na página inicial
    And uma tarefa "<titulo_original>" está na lista de tarefas pendentes
    When o usuário edita a tarefa "<titulo_original>" para ter o título "<novo_titulo>" e descrição "<nova_descricao>"
    Then a tarefa "<novo_titulo>" deve aparecer na lista de tarefas pendentes com a descrição "<nova_descricao>"

  Examples:
    | titulo_original | novo_titulo    | nova_descricao                |
    | Estudar Cypress | Estudar React  | Aprender a usar React         |
    | Comprar leite   | Comprar pão    | Comprar pão na padaria        |
