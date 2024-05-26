import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";

Before(() => {
  cy.visit("/");
  cy.get("body").should("be.visible");
});

Given("que o usuário está na página inicial", () => {
  cy.get("body").should("be.visible");
});

Given("uma tarefa {string} está na lista de tarefas concluídas", (titulo) => {
  cy.get('input[name="titulo"]').should("be.visible").clear().type(titulo);
  cy.get('textarea[name="descricao"]')
    .should("be.visible")
    .clear()
    .type("Revisar todos os conceitos básicos de Cypress");
  cy.get("button").contains("Adicionar").should("be.visible").click();
  cy.get("button").contains("Finalizar").should("be.visible").click();
  cy.get("button").contains("Completadas").should("be.visible").click();
});

Then(
  "a data de conclusão deve estar visível para a tarefa {string}",
  (titulo) => {
    cy.get(".todo-list")
      .contains("h3", "Estudar Cypress")
      .parents("li")
      .find(".concluido-em")
      .should("be.visible")
      .and("contain", "Concluído em:");
  }
);
