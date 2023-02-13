/// <reference types="Cypress"/>

import redBusPage from '../PageObjects/RedBusPage'

describe('Book from Red Bus', function(){
    it('Redbus',function(){
        const RB= new redBusPage()
        cy.visit("https://www.redbus.com/")
        cy.title().should('eq','Book bus tickets online with redBus!')
        var count=0
        cy.get('a').its('length').then((count)=>{
            cy.log('No. of weblinks present in the page: '+count)
        })
        cy.get('a').then(ele=> {
            cy.log('Length:' + ele.length);
        })
        Cypress.config('defaultCommandTimeout',10000)

          
        // cy.contains("a")
        // .scrollIntoView()
        // .should("not.have.attr", "href", "#undefined");
        cy.get('input[data-message="Please enter a source city"]')
        .should('be.visible').focus().type("Kundapura")
        //RB.fromInput().click()
        cy.get('li[select-id="results[0]"]').click()
        cy.get('input[data-message="Please enter a destination city"]')
        .should('be.visible').type("Bangalore")
        cy.get('li[select-id="results[0]"]').click()
        cy.scrollTo("top", { duration: 500 });
        //cy.get('input[id="onward_cal"]').click()
        cy.get('td[class="current day"]').eq(1).click({force: true})
        cy.wait(1000)
        cy.get('td[class="current day"]').eq(0).next().click({force: true})
        cy.scrollTo("top", { duration: 500 });
        cy.get('#search_btn').click()
        cy.wait(3000)
        
        cy.get('span[class="f-bold busFound"]').invoke('text').then((abc)=>{
            cy.log(abc)
        })
        
        cy.get('span[class="d-color"]').contains('Live Tracking').click()
        cy.get('input[id="dtAfter 6 pm"]').next().click()
        cy.get('a').contains('Departure').dblclick()
        cy.get('div').contains('Kamat Tourist').parent('div').parent('div')
        .parent('div').siblings().children('div').contains('View Seats').click()

    })
})