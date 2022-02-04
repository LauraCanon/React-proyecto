/// <reference types="Cypress" />

describe("my first test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/regperfil");
  });

  it("Regperfil colaborator/user can be open", () => {
    cy.contains("Colaborador");
  });
  it("Regperfil can be clicked", () => {
    cy.contains("Registrate aquí").click();
    cy.get('[placeholder="Nombre"]').type("Laura");
    cy.get('[placeholder="Apellido"]').type("Canon");
    cy.get('[placeholder="Correo electronico"]').type("laurona.20@gmail.com");
    cy.get('[placeholder="Contrasena"]').type("12345678");
    cy.contains("Continúa aquí").click();
  });
});
