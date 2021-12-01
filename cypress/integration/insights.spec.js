// TODO fix conflicts between jest and cypress
/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />


describe("Insights Page", () => {
    it("render page", () => {
        cy.visit("/insights");
 
        cy.get("[data-testid=\"layout\"]").should("have.length", 1).contains("No entries yet");
    });
});
