import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";

Before(() => {
  cy.visit("/");
  cy.get("body").should("be.visible");
});

Given("que o usuário está na página inicial", () => {
  cy.get("body").should("be.visible");
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

When("o usuário marca a tarefa {string} como concluída", (titulo) => {
  cy.get("button").contains("Finalizar").should("be.visible").click();
  cy.get("button").contains("Completadas").should("be.visible").click();
});

When("o usuário desmarca a tarefa {string} como concluída", (titulo) => {
  cy.get(".check-icon").contains("Retornar").should("be.visible").click();
  cy.get("button").contains("Pendentes").should("be.visible").click();
});

Then(
  "a tarefa {string} deve aparecer novamente na lista de tarefas pendentes",
  (titulo) => {
    cy.get(".todo-list").should("contain", titulo);
  }
);
