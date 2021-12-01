// TODO fix conflicts between jest and cypress
/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />


describe("Check-in Page", () => {
    const moodScoreContainer = "[data-testid='moodscore']";
    const scoreRange = "[class*='input-range']";
    const feelingsCloud = "[data-testid='feelings']";
    const feelingTag = "[data-testid='feeling']";
    const feelingTagActive = "[data-checked='true']";
    const notesSection = "[data-testid='notes']";
    const notesTextarea = "textarea";
    const slider = "[role='slider']";
    const button = "button";
    const checkedInSection = "[data-testid='checked-in']";
    const errorSection = "[data-testid='error']";

    it("can perform check-in successfully", () => {
        cy.intercept("POST", "/check-in", (req) => {
            req.reply({ statusCode: 200 });
        });

        cy.visit("/check-in");
 
        // check mood score
        cy.get(moodScoreContainer).should("have.length", 1);
        cy.get(slider).should("have.attr", "aria-valuenow", 4);
        cy.get(scoreRange).first().click("right"); // naively simulate a score 7 by clicking on the right corner. TODO implement better strategy for setting score
        cy.get(button).first().contains("Next").click();

        // check feelings cloud
        cy.get(feelingsCloud).should("have.length", 1);
        cy.get(feelingTag).first().click();
        cy.get(feelingTag).last().click();
        cy.get(feelingTagActive).should("have.length", 2);
        cy.get(button).first().contains("Next").click();

        // check notes
        cy.get(notesSection).should("have.length", 1);
        cy.get(notesTextarea).first().type("I am happy");

        // submit results
        cy.get(button).first().contains("Finish").click();
        cy.get(checkedInSection).contains("Check-in completed!");
        cy.get(button).first().contains("Restart").click();

        // ensure mood score has default values
        cy.get(slider).should("have.attr", "aria-valuenow", 4);
        cy.get(button).first().contains("Next").click();
        
        // ensure feelings cloud has default values
        cy.get(feelingTagActive).should("have.length", 0);
        cy.get(button).first().contains("Next").click();

        // ensure notes section has default values
        cy.get(notesTextarea).first().should("have.text", "");
    });


    it("should display error message for failed api request", () => {
        cy.intercept("POST", "/check-in", (req) => {
            req.reply({ statusCode: 500 });
        });

        cy.visit("/check-in");
 
        cy.get(button).first().contains("Next").click();
        cy.get(button).first().contains("Next").click();
        cy.get(button).first().contains("Finish").click();

        cy.get(errorSection).contains("something went wrong!");
        cy.get(button).first().contains("Try again").click();
        cy.get(moodScoreContainer).should("have.length", 1);
    });
});
