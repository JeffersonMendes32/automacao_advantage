//import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import './commands';
Given('pagina', () => {
  cy.visit('/');
});


