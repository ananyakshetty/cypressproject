import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../../../support/PageObjects/HomePage'
import ProductsPage from '../../../support/PageObjects/Products'

const homePage=new HomePage()
const productsPage=new ProductsPage()

Given('I open Ecommerce page', () => {
    cy.visit(Cypress.env('url') + '/angularpractice/')
})

When('I add items to cart', function() {
    homePage.getShopTab().click()
    cy.selectProduct('Blackberry')
    cy.selectProduct('Nokia')
    productsPage.checkoutButton().click()
})

And('Validate the total prices', ()=>{
    cy.get('tr td:nth-child(4) strong').each(($e1,index,$list)=>{
        cy.log($e1.text())
        const actualText=$e1.text()
        var res=actualText.split(" ")
        res=res[1].trim()
        cy.log(res)
        sum=Number(sum)+Number(res)
    }).then(function(){
        cy.log(sum)
    })

    cy.get('h3 strong').then(function(element){
        const amount=element.text()
        var res=amount.split(" ")
        var total=res[1].trim()
        expect(Number(total)).to.eq(sum)
    })
})

Then('select the country submit and verify thank you',()=>{
    productsPage.checkoutButton2().click()
    productsPage.contryDropdown().type('India')
    productsPage.countryResults().click()
})