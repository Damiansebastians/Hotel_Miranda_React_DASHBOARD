
import { it } from "mocha";

describe('Login', () => {
  beforeEach(() => {
      cy.visit("http://localhost:3000");
  });
//------------------------------------------------------
  it("Should display the login form", () => {
    cy.get("[data-test-id='login-form']").should("exist");
    cy.get("[data-test-id='login-form']").within(() => {
      cy.get("h2").should("have.text", "Login for Access to Dashboard");
      cy.get("#email").should("exist");
      cy.get("#password").should("exist");
      cy.get("button").should("have.text", "Login");
      cy.get("h4").should("have.text", "Forgot Password?");
    });
  });

//-------------------------------------------------------
it("Should not be able to access bookings without logging in", () => {
  cy.visit("http://localhost:3000/bookings");
  cy.url().should("include", "/");
});

//-------------------------------------------------------
  it("Should allow user to log in with valid credentials", () => {
    cy.get("form").within(() => {
      cy.get("input#email").type("admin@admin.com");
      cy.get("input#password").type("admin");
      cy.get("button").click();
    });
    cy.url().should("include", "/dashboard");
    // cy.wait(2000);
  });

//-------------------------------------------------------
  it("Should display an error message with invalid credentials", () => {
    cy.get("form").within(() => {
      cy.get("input#email").type("user@user.com");
      cy.get("input#password").type("user");
      cy.get("button").click();
    });

    cy.on("window:alert", (message) => {
      expect(message).to.equal("Email or password wrong");
    });
  });
});





