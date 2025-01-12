const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // Adiciona o plugin do Cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // Configura o esbuild como preprocessor
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)], // Usa o bundler correto com o esbuild
        })
      );

      return config;
    },
    specPattern: 'cypress/e2e/web/stepDefinitions/**/*.features', // Define o padrão para arquivos de teste
    baseUrl: 'https://advantageonlineshopping.com/',
    supportFile: 'cypress/support/commands.js', // Certifique-se de que o caminho está correto
  },
});
