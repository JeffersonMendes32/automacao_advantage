const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('pagina', () => {
  cy.visit('https://advantageonlineshopping.com/#/');
});


