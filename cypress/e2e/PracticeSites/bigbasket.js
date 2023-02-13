/// <reference types="Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from 
    // failing the test 
    return false })
    
describe('Big Basket', function(){
    
    it('Big basket', function(){

        cy.visit("https://www.bigbasket.com/")

    })
})