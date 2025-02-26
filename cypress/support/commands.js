Cypress.Commands.add("visitCoursePage", (url) => {
    cy.visit(url);
    cy.wait(2000);
  });
  