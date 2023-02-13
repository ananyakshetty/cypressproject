//Give a different Email Ids everytime

/// <reference types="Cypress" />

describe('Post user request',()=>{
    let accessToken='Bearer e9a40345838120bf9905a61da59385d93f9de11fd8fec998fa3b1f8a71687f39'
    let randomText=""
    let testEmail=''
    it('create user test',()=>{
        var pattern="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i=0; i<10;i++)
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length))
        testEmail=randomText+'@gmail.com'

            //1. Create User
            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v1/users',
                headers:{
                    'Authorization': accessToken
                },
                body:{
                    "name": "Test Automation Cypres",
                    "gender": "male",
                    "email": "ananyacypress@gmalil.com",
                    "status": "active"
                }
            }).then((res)=>{
                cy.log(JSON.stringify(res.body))
                expect(res.status).to.eq(201)
                expect(res.body.data).has.property('name',"Test Automation Cypres")
                expect(res.body.data).has.property('email',"ananyacypress@gmalil.com")
                expect(res.body.data).has.property('gender',"male")
                expect(res.body.data).has.property('status',"active")
            }).then((res)=>{
                const userId = res.body.data.id
                cy.log('UserId: '+userId)
                //2. Update User {PUT}
                cy.request({
                    method:'PUT',
                    url: 'https://gorest.co.in/public/v1/users/'+userId,
                    headers:{
                        'Authorization': accessToken
                    },
                    body:{
                        "name": "Test Automation Cypres Updated",
                        "gender": "male",
                        "email": "ananyacypressupdated@gmalil.com",
                        "status": "inactive"
                    }
                }).then((res)=>{
                    cy.log(JSON.stringify(res.body))
                    expect(res.status).to.eq(200)
                    expect(res.body.data).has.property('name',"Test Automation Cypres Updated")
                    expect(res.body.data).has.property('gender',"male")
                    expect(res.body.data).has.property('email',"ananyacypressupdated@gmalil.com")
                    expect(res.body.data).has.property('status',"inactive")
                })
            })
        
    })
})