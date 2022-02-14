/// <reference types="Cypress" />

describe("Registrar Colaborador", () => {
  it("Pagina Registro", () => {
    cy.visit("http://localhost:3000/regperfil");
  });

  it("Colaboraor", () => {
    cy.contains("Colaborador");
  });
  it("Diligencia y envia", () => {
    cy.contains("Regístrate aquí").click();
    cy.get('[placeholder="Nombre"]').type("Laura");
    cy.get('[placeholder="Apellido"]').type("Canon");
    cy.get('[placeholder="Correo electrónico"]').type("laurona.20@gmail.com");
    cy.get('[placeholder="Contraseña"]').type("123456");
    cy.get('[placeholder="Selecciona tu ciudad"]').type("Bogotá");
    cy.contains("Regístrate").click();
    cy.wait(2000);
  });
});
describe("Registrar solicitante", () => {
  it("Registro", () => {
    cy.visit("http://localhost:3000/regperfil");
  });

  it("Solicitante", () => {
    cy.contains("Solicitante");
  });
  it("Diligencia y envia", () => {
    cy.contains("Regístrate aquí.").click();
    cy.get('[placeholder="Nombre"]').type("Laura");
    cy.get('[placeholder="Apellido"]').type("Canon");
    cy.get('[placeholder="Correo electrónico"]').type(
      "laurafcanon20@gmail.com"
    );
    cy.get('[placeholder="Contraseña"]').type("123456");
    cy.contains("Regístrate").click();
    cy.wait(2000);
  });
});
