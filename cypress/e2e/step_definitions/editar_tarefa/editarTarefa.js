import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";

Before(() => {
  cy.visit("/");
  cy.get("body").should("be.visible");
});

Given("que o usuário está na página inicial", () => {
  cy.get("body").should("be.visible");
});

Given(
  "uma tarefa {string} está na lista de tarefas pendentes",
  (titulo_original) => {
    cy.get('input[name="titulo"]')
      .should("be.visible")
      .clear()
      .type(titulo_original);
    cy.get('textarea[name="descricao"]')
      .should("be.visible")
      .clear()
      .type("Descrição inicial");
    cy.get("button").contains("Adicionar").should("be.visible").click();
    cy.get(".todo-list").should("contain", titulo_original);
  }
);

When(
  "o usuário edita a tarefa {string} para ter o título {string} e descrição {string}",
  (titulo_original, novo_titulo, nova_descricao) => {
    cy.get(".todo-list")
      .contains(titulo_original)
      .get(".todo-list")
      .find("button")
      .contains("Editar")
      .should("be.visible")
      .click();

    cy.get('input[placeholder="Título Atualizado"]')
      .should("be.visible")
      .clear()
      .type(novo_titulo);
    cy.get('textarea[placeholder="Descrição Atualizada"]')
      .should("be.visible")
      .clear()
      .type(nova_descricao);
    cy.get("button").contains("Atualizar").should("be.visible").click();
  }
);

Then(
  "a tarefa {string} deve aparecer na lista de tarefas pendentes com a descrição {string}",
  (novo_titulo, nova_descricao) => {
    cy.get(".todo-list").should("contain", novo_titulo);
    cy.get(".todo-list")
      .contains(novo_titulo)
      .get(".todo-list")
      .contains(nova_descricao);
  }
);
