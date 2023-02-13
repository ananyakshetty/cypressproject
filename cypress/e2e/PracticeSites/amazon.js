/// <reference types="Cypress"/>

describe('Order an Amazon Product', ()=>{
    it('Open Amazon', ()=>{
        cy.visit('https://www.amazon.in/')
        //Scroll
        cy.scrollTo("bottom", { duration: 2000 });
        cy.scrollTo("top", { duration: 2000 });
        cy.scrollTo("bottom", { duration: 500 });
        cy.scrollTo("top", { duration: 500 });
        // cy.get('#nav-link-accountList-nav-line-1').click()
        // //Taking data from fixtures
        // cy.fixture("user").then((user) => {
        //     cy.get("#ap_email").type(user.email)
        //     //Get vValue
        //     cy.get("#ap_email").invoke('val').then(sometext=>cy.log(sometext))
        //     cy.get('#continue').click()
        //     cy.get('#ap_password').type(user.password, { log: false })
        // })

        // cy.get('input[name="rememberMe"]').check()
        // cy.get('#signInSubmit').click()
        cy.get('a[data-csa-c-content-id*="nav_cs_mobiles"]').click()
        //cy.get('a[data-csa-c-content-id*="nav_cs_mobiles"]').rightclick()
        cy.get('li span.a-size-base.a-color-base').contains('OnePlus').click()
        cy.get('#low-price').type(15000)
        cy.get('#high-price').type(25000)
        cy.get('.a-button-input').click()
        cy.get('h2 a[href*="/OnePlus-Nord-Lite-128GB-Storage"]').invoke('removeAttr','target').click()
        // cy.get('#searchDropdownBox').select('Deals') 
        // cy.go('back')
        // cy.go('forward')
    })
})