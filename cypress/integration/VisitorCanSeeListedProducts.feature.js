describe("Visitor can see articles", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("/");
  });

  it("visitor can see cards", () => {
    cy.get("[data-cy=product-prod_DWy4oGz2zw6Jx2]").within(() => {
      cy.get("[data-cy='image']").should("be.visible");
      cy.get("[data-cy='title']").should("contain", "Macbook Pro");
      cy.get("[data-cy='price']").should("contain", "$999");
      cy.get("[data-cy='description']").should("contain", "Most popular laptop in the market");
    });
  });
});
