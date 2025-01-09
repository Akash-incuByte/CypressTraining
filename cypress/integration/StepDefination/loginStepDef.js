import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {homepage} from '../../Pages/Homepage.js'



Given('I am on Cypress.io page',()=>{
    cy.visit('https://example.cypress.io')
})

Then('The url should have cypress in it',()=>{
    cy.url().should('include','cypress')
})

When('user clicks on get url',()=>{
    homepage.clickGetUrl()
})