///<reference types="Cypress"/>

describe('HTTP Example', () => {
    it('GET', () => {
        cy.request({
            method : 'GET',
            url : 'https://httpbin.org/get',
        }).then(function(reponse){
            expect(reponse.body).to.have.property('url')
        })
    });

    it('POST', () => {
        cy.request({
            method : 'POST',
            url : 'https://httpbin.org/post',
            body : {
                'name':'ananya',
                'age' : 26
            },
            headers:{
                'content-type' : 'application/json'
            }
        }).then(function(reponse){
            expect(reponse.body).to.have.property('json')
            expect(reponse.body.json).to.deep.equal({
                "name":'ananya',
                "age" : 26
            })
        })
    });
});