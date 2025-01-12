Cypress.Commands.add('buscarProduto', (nomeProduto) => {
    cy.get('#searchInput').type(nomeProduto).type('{enter}');
  });
  
  Cypress.Commands.add('adicionarAoCarrinho', () => {
    cy.get('.add-to-cart').click();
  });