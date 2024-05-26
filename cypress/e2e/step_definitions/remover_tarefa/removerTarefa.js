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
    .type("Descrição temporária");
  cy.get("button").contains("Adicionar").should("be.visible").click();
  cy.get(".todo-list").should("contain", titulo);
});

When("o usuário remove a tarefa {string}", (titulo) => {
  cy.get(".todo-list")
    .contains(titulo)
    .get(".todo-list")
    .find("button")
    .contains("Excluir")
    .should("be.visible")
    .click();
});

Then(
  "a tarefa {string} não deve mais aparecer na lista de tarefas pendentes",
  (titulo) => {
    cy.get(".todo-list").should("not.contain", titulo); // Verify the task is no longer present
  }
);
