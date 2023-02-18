describe('Gmail Automation with Cypress', () => {
    beforeEach(() => {
      cy.visit('https://gmail.com');
    });
  
    it('Logs in to Gmail account', () => {
      cy.get('input[type="email"]').type('ananyakumar.shetty@gmail.com');
      cy.get('#identifierNext').click();
      cy.get('input[type="password"]').type('');
      cy.get('#passwordNext').click();
      cy.get('.Wixet').should('be.visible');
    });
  
    it('Sends an email', () => {
      cy.get('[role="button"][aria-label="Compose"]').click();
      cy.get('textarea[name="to"]').type('recipient_email@gmail.com');
      cy.get('input[name="subjectbox"]').type('Test email from Cypress');
      cy.get('.Am.Al.editable.LW-avf').type('This is a test email sent from Cypress.');
      cy.get('[aria-label="Send ‪(Ctrl-Enter)‬"]').click();
      cy.get('.bAq').should('contain', 'Your message has been sent.');
    });
  
    it('Checks the sent email', () => {
      cy.get('a[title="Sent Mail"]').click();
      cy.get('.yO').should('contain', 'Test email from Cypress');
    });
  });