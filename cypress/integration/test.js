const URL = "http://localhost:3000/";

context("TESTING THE JOSE LARRALDE APP", () => {
  before(() => {
    cy.visit(URL);
  });
  it("makes sure the APP deploys ok", () => {
    cy.get("#root")
      .find(".App")
      .get(".App")
      .find("#header")
      .get("#root")
      .find(".card-group")
      .children()
      .should("have.length", 8)
  });

  it("makes sure a random single page open", () => {
    cy.get("#root")
      .find("#Card1 > div.card-footer.font-weight-bold > a").click()
      .get(".App")
      .find("#header")
      .get(".App")
      .find("#AnchorTag")
  });

  it("makes sure it goes back home when needed", () => {
    cy.get("#root")
    .find("#AnchorTag > div.font-weight-bold.bg-light > a").click()
});
});
