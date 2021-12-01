// TODO fix conflicts between jest and cypress
/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />


describe("Homepage", () => {
    it("should redirect to check-in page", () => {
        cy.visit("/");
 
        cy.location("pathname").should("eq", "/check-in");
    });
});
