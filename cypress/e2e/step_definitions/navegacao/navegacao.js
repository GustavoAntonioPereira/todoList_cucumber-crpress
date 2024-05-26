import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";

Before(() => {
  cy.visit("/");
  cy.get("body").should("be.visible");
});

Given("que o usuário está na página inicial", () => {
  cy.get("body").should("be.visible");
});

When("o usuário clica no botão {string}", (nomeBotao) => {
  cy.get("button").contains(nomeBotao).should("be.visible").click();
});

Then("a lista de tarefas concluídas deve ser exibida", () => {
  cy.contains("button.secondaryBtn.active", "Completadas").should("be.visible");
});

Then("a lista de tarefas pendentes deve ser exibida", () => {
  cy.contains("button.secondaryBtn.active", "Pendentes").should("be.visible");
});
