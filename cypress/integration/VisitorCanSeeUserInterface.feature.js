describe("Visitor can see articles", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("/");
  });
  it("successfully renders navbar", () => {
    cy.get("[data-cy='navbar']").should("be.visible");
    cy.get("[data-cy='title']").should(
      "contain",
      "E-commerce site"
    );
    cy.get("[data-cy='logo']").should("be.visible");
    cy.get("[data-cy='cart-icon']").should("be.visible");
  });
});
