/// <reference types="Cypress" />

describe("my first test", () => {
  it("Registration", () => {
    cy.visit("http://localhost:3000/regperfil");
  });

  it("Regperfil colaborator/user can be open", () => {
    cy.contains("Colaborador");
  });
  it("Regperfil can be clicked", () => {
    cy.contains("Regístrate aquí").click();
    cy.get('[placeholder="Nombre"]').type("Laura");
    cy.get('[placeholder="Apellido"]').type("Canon");
    cy.get('[placeholder="Correo electrónico"]').type("laurona.20@gmail.com");
    cy.get('[placeholder="Contraseña"]').type("123456");
    cy.contains("Regístrate").click();
    cy.wait(4000);
  });
});
describe("my first test", () => {
  it("Registration", () => {
    cy.visit("http://localhost:3000/regperfil");
  });

  it("Regperfil colaborator/user can be open", () => {
    cy.contains("Solicitante");
  });
  it("Regperfil can be clicked", () => {
    cy.contains("Regístrate aquí").click();
    cy.get('[placeholder="Nombre"]').type("Laura");
    cy.get('[placeholder="Apellido"]').type("Canon");
    cy.get('[placeholder="Correo electrónico"]').type(
      "laurafcanon20@gmail.com"
    );
    cy.get('[placeholder="Contraseña"]').type("123456");
    cy.contains("Regístrate").click();
  });
});
