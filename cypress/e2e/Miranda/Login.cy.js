import { it } from "mocha";

describe('Login', () => {
  beforeEach(() => {
      cy.visit("http://localhost:3000");
  });

  it("Should display the login access", () => {
    cy.get("h2").contains("Login for Access to Dashboard");
  });
});
