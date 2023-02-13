describe('Test Suite',()=>{
    it('Testcase',()=>{
        cy.visit('https://www.amazon.in/')
        cy.amazonLogin(username,password)

        cy.get('abcd').invoke()
    })
})