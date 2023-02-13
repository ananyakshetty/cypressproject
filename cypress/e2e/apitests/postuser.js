/// <reference types="Cypress" />

describe('Post user request',()=>{
    let accessToken='Bearer e9a40345838120bf9905a61da59385d93f9de11fd8fec998fa3b1f8a71687f39'
    let randomText=""
    let testEmail=''
    it('create user test',()=>{
        var pattern="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i=0; i<10;i++)
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length))
        cy.log(randomText)
        testEmail=randomText+'@gmail.com'

        cy.fixture('createuser').then((payload) =>{
            //1. Create User
            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v1/users',
                headers:{
                    'Authorization': accessToken
                },
                body:{
                    "name": payload.name,
                    "gender": payload.gender,
                    "email": testEmail,
                    "status": payload.status
                },
                failonstauscode:false
            }).then((res)=>{
                cy.log(JSON.stringify(res.body))
                expect(res.status).to.eq(201)
                expect(res.body.data).has.property('name',payload.name)
                expect(res.body.data).has.property('email',testEmail)
                expect(res.body.data).has.property('gender',payload.gender)
                expect(res.body.data).has.property('status',payload.status)
            }).then((res)=>{
                const userId = res.body.data.id
                cy.log('UserId: '+userId)
                //2. Get User
                cy.request({
                    method:'GET',
                    url: 'https://gorest.co.in/public/v1/users/'+userId,
                    headers:{
                        'Authorization': accessToken
                    }
                }).then((res)=>{
                    cy.log(JSON.stringify(res.body))
                    expect(res.status).to.eq(200)
                    expect(res.body.data).has.property('id',userId)
                    expect(res.body.data).has.property('name',payload.name)
                    expect(res.body.data).has.property('status',payload.status)
                })
            })
        })
    })
})