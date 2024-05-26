import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("o usuário está na página inicial", () => {
  cy.visit("/");

Then("o input de título deve estar visível", () => {
  cy.get('input[name="titulo"]').should("be.visible");
});

Then("o input de descrição deve estar visível", () => {
  cy.get('textarea[name="descricao"]').should("be.visible");
});
