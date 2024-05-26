import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";

Before(() => {
  cy.visit("/");
  cy.get("body").should("be.visible");
});

Given("que o usuário está na página inicial", () => {
  cy.get("body").should("be.visible");
});

Given("uma tarefa {string} está na lista de tarefas pendentes", (titulo) => {
  cy.get('input[name="titulo"]').should("be.visible").clear().type(titulo);
  cy.get('textarea[name="descricao"]')
    .should("be.visible")
    .clear()
    .type("Descrição de teste");
  cy.get("button").contains("Adicionar").should("be.visible").click();
  cy.get(".todo-list", { timeout: 5000 }).should("contain", titulo);
});

When("o usuário marca a tarefa {string} como concluída", (titulo) => {
  cy.get(".todo-list")
    .contains(titulo)
    .get(".todo-list")
    .find("button")
    .contains("Finalizar")
    .should("be.visible")
    .click();
  cy.get("button").contains("Completadas").should("be.visible").click();
});

Then(
  "a tarefa {string} deve aparecer na lista de tarefas concluídas",
  (titulo) => {
    cy.get(".todo-list h3", { timeout: 5000 })
      .should("be.visible")
      .and("contain", titulo);
  }
);
