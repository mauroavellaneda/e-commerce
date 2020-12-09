describe("Visitor can see articles", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("/");
  });

  it("visitor can see cards", () => {
    cy.get("[data-cy='product-1']").within(() => {
      cy.get("[data-cy='image']").should("be.visible");
      cy.get("[data-cy='title']").should("contain", "Shoes");
      cy.get("[data-cy='price']").should("contain", "$10");
      cy.get("[data-cy='description']").should("contain", "Sport shoes");
    });
  });
});
