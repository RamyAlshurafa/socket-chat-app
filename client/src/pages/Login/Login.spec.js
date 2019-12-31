/* eslint-disable spaced-comment */
/// <reference types="Cypress" />

describe("should login correctly", () => {
  beforeEach(() => {
    // clear cookies again after visiting to remove
    // any 3rd party cookies picked up such as cloudflare
    Cypress.Cookies.debug(true);
  });

  it("should correctly fill the inputs data", () => {
    cy.visit("/login");
    cy.exec("NODE_ENV=test npm run build:schema");

    cy.server();

    cy.route({
      method: "POST",
      url: "**/users/login",
      status: 200,
    }).as("loginRequest");

    cy.get('[data-test-id="email"]').type("test@gmail.com");
    cy.get('[data-test-id="password"]').type("123456");
    cy.get('[data-test-id="submit"]').click();

    cy.wait("@loginRequest").then(xhr => {
      assert.include(
        xhr.response.body,
        {
          id: 1,
          email: "test@gmail.com",
          firstName: "Vincent",
          lastName: "Porter",
        },
        "request response contains the user data"
      );
    });

    cy.server({ enable: false });

    cy.url().should("equal", `${Cypress.config().baseUrl}/`);
    cy.getCookie("token").should("have.property", "name", "token");
  });
});
