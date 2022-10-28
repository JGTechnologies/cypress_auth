describe("/", () => {
  const dataButton = '[data-test="data-button"]';
  const dataDiv = '[data-test="user-data"]';

  beforeEach(() => {
    cy.login(Cypress.env("GOOD_EMAIL"), Cypress.env("GOOD_PASSWORD"));
    cy.visit("/");
    cy.intercept("POST", "**/auth/user").as("postUser");
  });

  it("Shows user data after clicking the button", () => {
    cy.get(dataButton).click();
    cy.wait("@postUser");
    cy.get(dataDiv).should("contain.text", "Cypress-Test-User");
  });
});
