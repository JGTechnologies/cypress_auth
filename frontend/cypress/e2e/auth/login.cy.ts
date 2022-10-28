describe("/login", () => {
  const emailField = '[data-test="email-field"]';
  const passwordField = '[data-test="password-field"]';
  const submitButton = '[data-test="submit-button"]';

  beforeEach(() => {
    cy.visit("/login");
    cy.intercept("POST", "**/auth/login/").as("postLogin");
  });

  it("Redirects to the home page on successful login", () => {
    cy.get(emailField).type(Cypress.env("GOOD_EMAIL"), { log: false });
    cy.get(passwordField).type(Cypress.env("GOOD_PASSWORD"), { log: false });
    cy.get(submitButton).click();
    cy.wait("@postLogin");

    const expected = new RegExp(`^${Cypress.env("FRONTEND_URL")}/$`);
    cy.url().should("match", expected);
  });

  it("Does not redirect on failed login", () => {
    cy.get(emailField).type("bad_email@domain.com");
    cy.get(passwordField).type(Cypress.env("GOOD_PASSWORD"), { log: false });
    cy.get(submitButton).click();

    cy.wait("@postLogin");

    const expected = new RegExp(`^${Cypress.env("FRONTEND_URL")}/login$`);
    cy.url().should("match", expected);
  });
});
