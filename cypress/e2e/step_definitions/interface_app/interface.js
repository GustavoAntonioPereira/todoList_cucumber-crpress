import { Given, Then, Before } from "cypress-cucumber-preprocessor/steps";

Before(() => {
  cy.visit("/");
  cy.get("body").should("be.visible");
});

Given("o usuário está na página inicial", () => {
  cy.get("body").should("be.visible");
});

Then("o botão {string} deve estar visível", (nomeBotao) => {
  cy.contains("button", nomeBotao).should("be.visible");
});
