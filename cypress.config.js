const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    defaultCommandTimeout: 70000,
    pageLoadTimeout: 70000,
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      on(
          "file:preprocessor",
          webpack({
            webpackOptions: {
              resolve: {
                extensions: [".ts", ".js"],
              },
              module: {
                rules: [
                  {
                    test: /\.feature$/,
                    use: [
                      {
                        loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                        options: config,
                      },
                    ],
                  },
                ],
              },
            },
          })
      );

      // Add the stepDefinitions option to include the new pattern
      config.env.stepDefinitions = [
        "cypress/integration/features/[filepath]/**/*.{js,mjs,ts,tsx}",
        "cypress/integration/features/[filepath].{js,mjs,ts,tsx}",
        "cypress/support/step_definitions/**/*.{js,mjs,ts,tsx}",
        "cypress/integration/StepDefination/*.js" // New pattern added here
      ];

      return config;
    },
  },
});