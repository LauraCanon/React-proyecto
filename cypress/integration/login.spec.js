/// <reference types="Cypress" />

describe("Login", () => {
  it("Session login", () => {
    cy.visit("http://localhost:3000/sessionlogin");
  });
  it("login page can be open", () => {
    cy.contains("Inicia Sesión");
  });
  it("login", () => {
    cy.get('[placeholder="Email"]').type("laurona.20@gmail.com");
    cy.get('[placeholder="Contraseña"]').type("123456");
    cy.contains("Iniciar Sesión").click();
    cy.contains("Hola Laura");
    cy.wait(4000);
  });
});
describe("Login", () => {
  it("Session login", () => {
    cy.visit("http://localhost:3000/sessionlogin");
  });
  it("login page can be open", () => {
    cy.contains("Inicia Sesión");
  });
  it("login", () => {
    cy.get('[placeholder="Email"]').type("laurafcanon@gmail.com");
    cy.get('[placeholder="Contraseña"]').type("123456");
    cy.contains("Iniciar Sesión").click();
  });
});
