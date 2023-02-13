const { method } = require("cypress/types/lodash");

describe('Test Suite Name',()=>{
    it('Test Case', () => {

        cy.request({
            url:'abc.com',
            method:'POST',
            headers:{},
            body:{},
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
    });
})