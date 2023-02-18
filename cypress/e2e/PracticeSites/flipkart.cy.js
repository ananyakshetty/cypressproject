import flipkartTravel from "../../support/PageObjects/flipkart/flikartTravel";

describe('Flipkart', () => {
    it('Order a mobile', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('img[alt="Mobiles"]').click()
        // cy.get('input[placeholder="Search Brand"]').type('Infinix')
        // cy.get('div[title="Infinix"] input').check({force: true})
        //Checkbox
        cy.get('input[placeholder="Search Brand"').type('Mi')
        cy.get('div[title="Micromax"] input').check({ force: true })
        cy.get('div').contains('GST Invoice Available').click()
        cy.contains('GST Invoice Available').should('exist')
        cy.get('option[value="10000"]').eq(1).click({ force: true })
        cy.contains('Micromax X412').invoke('removeAttr', 'target').click()
        cy.get('#pincodeInputId').type(576230)
        cy.get('span').contains('Check').click()
        cy.contains('Add to cart').realClick()
        cy.get('a[href*="/viewcart"]').click({ force: true })
        cy.contains('Place Order').realClick()
        cy.contains('Enter Email/Mobile number').parent('label').prevUntil('input').type(8495966223)
        cy.wait(10000)
    });

    it('Book a Flight Ticket', () => {
        const fp = new flipkartTravel()
        cy.visit('https://www.flipkart.com/')
        fp.getTravelSection().click()
        cy.title().should('contain','Flight Booking')
        fp.selectRoundTrip().click({ force: true })
        fp.fromCity().type('Bangalore')
        cy.get('span').contains('Bangalore').click()
        fp.toCity().type('Delhi')
        cy.get('span').contains('Delhi').click()
        fp.selectDate().click()
        cy.wait(1000)
        cy.contains('Travellers').siblings('div').eq(0).children('div div').eq(1).children('div').children('div').eq(2).click()
        cy.contains('Premium Economy').click()
        cy.contains('Done').click()
        cy.contains('SEARCH').click({force: true})
        cy.wait(10000)
    });
});