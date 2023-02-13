beforeEach(function(){
    cy.fixture('examplejson').then(function(data){
        this.data=data//available to entire class
    })
})