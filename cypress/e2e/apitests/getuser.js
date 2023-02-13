/// <reference types="Cypress" />

describe('get api user tests',()=>{
    let accessToken='Bearer 1deadf248a2c90aea6619f286bf92f2007f1d89dc1c520abb1b193d93f564c2b'
    it('get users',()=>{
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v1/users',
            headers : {
                authorization : accessToken
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination.limit).to.eq(20)
        })
    })

    it.only('get users by id',()=>{
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v1/users/1',
            headers : {
                authorization : accessToken
            },
            failOnStatusCode: false
        }).then((res)=>{
            // cy.log(JSON.stringify(res.body))
        }).then((res)=>{
            expect(res.status).to.eq(404)
        })
    })
})