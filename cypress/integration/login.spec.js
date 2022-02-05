/// <reference types="Cypress" />

describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/sessionlogin");
  });
  it("login page can be open", () => {
    cy.contains("Inicia Sesión");
  });
  it("Registrate redirect", () => {
    cy.contains("Regístrate").click();
  });
  it("login", () => {
    cy.get('[placeholder="Email"]').type("laurona.20@gmail.com");
    cy.get('[placeholder="Contraseña"]').type("12345678");
    cy.contains("Iniciar Sesión").click();
    cy.contains("Hola laura");
  });
});
