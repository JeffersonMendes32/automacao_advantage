import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import './commands';
Given('que o usuário está na página inicial', () => {
  cy.visit('https://advantageonlineshopping.com/#/');
});

When('o usuário busca pelo produto {string}', (produto) => {
  cy.buscarProduto(produto);  
});

Then('o produto {string} é exibido na lista de resultados', (produto) => {
  cy.get('.product-list').should('contain', produto);
});