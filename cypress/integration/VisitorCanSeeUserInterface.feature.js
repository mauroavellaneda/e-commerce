describe("Visitor can see articles", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("/");
  });
  it("successfully renders navbar", () => {
    cy.get("[data-cy='navbar']").should("be.visible");
    cy.get("[data-cy='title']").should(
      "contain",
      "Most popular e-commerce site of the web"
    );
    cy.get("[data-cy='logo']").should("be.visible");
    cy.get("[data-cy='picture']").should("be.visible");
  });
});
