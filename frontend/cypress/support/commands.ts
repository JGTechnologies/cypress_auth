/// <reference types="cypress" />

Cypress.Commands.add("login", (email: string, password: string) => {
  cy.request("POST", `${Cypress.env("API_URL")}/auth/login/`, {
    email,
    password,
  })
    .its("body")
    .then((body) => {
      localStorage.setItem("access-token", body.access_token);
      localStorage.setItem("user-id", body.user.pk);
    });
});

Cypress.Commands.add("logout", () => {
  localStorage.removeItem("access-token");
  localStorage.removeItem("user-id");
});
