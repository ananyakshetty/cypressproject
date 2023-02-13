declare namespace Cypress {
    interface Chainable<subject = any>{
        /**
         * Click on DOM element
         * 
         * @see https://on.cypress.io/click
         * @example
         *  cy.login('email','password').click()    //click on button
         */
        amazonLogin(email:string, password:string): Chainable<subject>
    }
}