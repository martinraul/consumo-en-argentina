  cy.visit("http://localhost:3000/", {
      onBeforeLoad(contentWindow) {
        // eslint-disable-next-line no-param-reassign
        delete contentWindow.fetch;
        contentWindow.eval(fetchPolyfill);
        // eslint-disable-next-line no-param-reassign
        contentWindow.fetch = contentWindow.unfetch;
      },
    });
  });

  it("makes sure STUBBED list is loaded and select two STUBBED pokemons", () => {
   
    cy.get("#root")
      .find("li")
      .should("have.length", 26)
      .contains("STUBBED")
  });
});
