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
  it("Should allow user to login with valid credentials", () => {
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
//------------------------------------------------------
  it("Should display required messages for empty fields", () => {
    cy.get("form").within(() => {
      cy.get("#email:invalid").should("exist"); 
      cy.get("#password:invalid").should("exist"); 
      
      cy.get("button").click();
    });
  });

//-------------------------------------------------------
  it("Should stay logged in after page reload", () => {
    cy.get("form").within(() => {
      cy.get("input#email").type("admin@admin.com");
      cy.get("input#password").type("admin");
      cy.get("button").click();
    });
  
    cy.reload();
    cy.url().should("include", "/dashboard");
  });
 //------------------------------------------------------- 
  it("Should save isLogged and email in Local Storage", () => {
    const isLogged = "true";
    const email = "admin@admin.com";
  
    cy.get("form").within(() => {
      cy.get("#email").type(email);
      cy.get("#password").type("admin");
      cy.get("button").click();
    });
  
    cy.window().then((win) => {
      const savedIsLogged = win.localStorage.getItem("isLogged");
      const savedEmail = win.localStorage.getItem("email");
  
      expect(savedIsLogged).to.equal(isLogged);
      expect(savedEmail).to.equal(email);
    });
  });
  //--------------------------------------------------------
  it("Should logout successfully", () => {
    cy.get("form").within(() => {
      cy.get("input#email").type("admin@admin.com");
      cy.get("input#password").type("admin");
      cy.get("button").click();
    });
  
    cy.get("[data-test-id='logout-button']").click();
    cy.url().should("include", "/");
  });
  
});





