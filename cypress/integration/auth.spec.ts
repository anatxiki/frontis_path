describe("Comprueba la pantalla de autenticación", () => {
  it("al introducir la contraseña correcta, se muestra el learning path", () => {
    cy.visit("http://localhost:3000");

    cy.get("input").type("B1k0M4nd4&n0TuB4nd4");

    cy.findByRole("img", { name: /icono del botón enviar/i }).click();

    cy.findByText(/Pasos del learning path/i).should("exist");
  });
});
