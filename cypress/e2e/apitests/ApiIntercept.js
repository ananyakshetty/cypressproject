///<reference types="Cypress"/>

describe('Intercept with simple intercept',()=>{
    it('Test Api with simple Intercept',()=>{
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept({
            path : '/posts'
        }).as('posts')
        cy.get('a[href="/posts"]').eq(1).click()
        cy.wait('@posts').then(inter =>{
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(100)
        })
    })

    it('mocking with intercept test with static response',()=>{
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET','/posts',{totalpost: 5, name: 'Naveen'}).as('posts')
        cy.get('a[href="/posts"]').eq(1).click()
        cy.wait('@posts')
    })

    it('mocking with intercept test with dynamic fixture',()=>{
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET','/posts',{fixture: 'createuser.json'}).as('posts')
        cy.get('a[href="/posts"]').eq(1).click()
        cy.wait('@posts')
    })
})