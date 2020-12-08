describe("Visitor can see articles", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("/");
  });

  it("visitor can see cards", () => {
    cy.get("[data-cy='card-1']").within(() => {
      cy.get("[data-cy='image']").should("be.visible");
      cy.get("[data-cy='title']").should("sport shoes");
      cy.get("[data-cy='price']").should("$10");
      cy.get("[data-cy='description']").should("running shoes");
    });
  });
});
