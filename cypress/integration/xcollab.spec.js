/// <reference types="Cypress" />

describe("Colaborador se loguea y agrega tarifa", () => {
  it("Login", () => {
    cy.visit("http://localhost:3000/sessionlogin");
  });
  it("Login y crea tarifa", () => {
    cy.wait(4000);
    cy.get('[placeholder="Email"]').type("laurona.20@gmail.com");
    cy.get('[placeholder="Contraseña"]').type("123456");
    cy.contains("Iniciar Sesión").click({force: true});
    cy.wait(4000);
    cy.get('button').eq(3).click({force: true});
    cy.get('select').eq(0).select('Pintura de Interiores', {force: true});
    cy.get('[placeholder="Descripcion del servicio..."]').type("acabado profesional");
    cy.get('[placeholder="Tu tarifa $"]').type("100000"); 
    cy.contains("Añadir Tarifa").click({force: true});
  });
});

