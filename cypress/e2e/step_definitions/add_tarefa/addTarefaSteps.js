import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";

// Abre a página uma única vez antes de todos os cenários
Before(() => {
  cy.visit("/");
  cy.get("body").should("be.visible"); // Garante que a página foi carregada
});

Given("que o usuário está na página inicial", () => {
  // Assume que a página já está aberta pelo hook Before
  cy.get("body").should("be.visible"); // Confirma que a página foi carregada
});

When(
  "o usuário adiciona uma nova tarefa com título {string} e descrição {string}",
  (titulo, descricao) => {
    cy.get('input[name="titulo"]').should("be.visible").clear().type(titulo);
    cy.get('textarea[name="descricao"]')
      .should("be.visible")
      .clear()
      .type(descricao);
    cy.get("button").contains("Adicionar").should("be.visible").click();
  }
);

Then(
  "a tarefa {string} deve aparecer na lista de tarefas pendentes",
  (titulo) => {
    cy.get(".todo-list h3", { timeout: 5000 })
      .should("be.visible")
      .and("contain", titulo);
  }
);
