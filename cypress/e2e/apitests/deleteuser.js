/// <reference types="Cypress" />

describe('Delete user request', () => {
    let accessToken = 'Bearer e9a40345838120bf9905a61da59385d93f9de11fd8fec998fa3b1f8a71687f39'
    let randomText = ""
    let testEmail = ''
    it('Delete user test', () => {
        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 10; i++)
            randomText += pattern.charAt(Math.floor(Math.random() * pattern.length))
        cy.log(randomText)
        testEmail = randomText + '@gmail.com'

        cy.fixture('createuser').then((payload) => {
            //1. Create User
            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v1/users',
                headers: {
                    'Authorization': accessToken
                },
                body: {
                    "name": payload.name,
                    "gender": payload.gender,
                    "email": testEmail,
                    "status": payload.status
                }
            }).then((res) => {
                cy.log(JSON.stringify(res.body))
                expect(res.status).to.eq(201)
                expect(res.body.data).has.property('name', payload.name)
                expect(res.body.data).has.property('email', testEmail)
            }).then((res) => {
                const userId = res.body.data.id
                cy.log('UserId: ' + userId)
                //2. Delete User
                cy.request({
                    method: 'DELETE',
                    url: 'https://gorest.co.in/public/v1/users/' + userId,
                    headers: {
                        'Authorization': accessToken
                    }
                }).then((res) => {
                    expect(res.status).to.eq(204)
                }).then((res) => {
                    cy.request({
                        method: 'GET',
                        url: 'https://gorest.co.in/public/v1/users/' + userId,
                        headers: {
                            'Authorization': accessToken
                        },
                        failOnStatusCode: false
                    }).then((res) => {
                        expect(res.status).to.eq(404)
                        expect(res.body.data.message).to.eq('Resource not found')
                    })
                })
            })
        })
    })
})