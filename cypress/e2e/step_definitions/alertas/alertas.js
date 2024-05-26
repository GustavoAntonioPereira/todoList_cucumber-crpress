import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";

Before(() => {
  cy.visit("/");
  cy.get("body").should("be.visible");
});

Given("que o usuário está na página inicial", () => {
  cy.get("body").should("be.visible");
});

When("o usuário tenta adicionar uma tarefa sem título", () => {
  cy.get('input[name="titulo"]').should("be.visible").clear();
  cy.get('textarea[name="descricao"]')
    .should("be.visible")
    .type("Alguma descrição");
  cy.get("button").contains("Adicionar").should("be.visible").click();
});

When("o usuário tenta adicionar uma tarefa sem descrição", () => {
  cy.get('input[name="titulo"]').should("be.visible").type("Título da Tarefa");
  cy.get('textarea[name="descricao"]').should("be.visible").clear();
  cy.get("button").contains("Adicionar").should("be.visible").click();
});

Then("um alerta {string} deve ser exibido", (mensagemAlerta) => {
  cy.on("window:alert", (text) => {
    expect(text).to.contains(mensagemAlerta);
  });
});
