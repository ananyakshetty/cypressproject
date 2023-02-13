describe('API Tests', () => {
    // GET Request 

it("GET API testing Using Cypress API Plugin", () => {
    cy.api("GET", "https://reqres.in/api/users?page=2").should((response) => {
      expect(response.status).to.eq(201);
    });
  });
  // POST Request
  
  it("POST API testing Using Cypress API Plugin", () => {
    cy.api("POST", "https://reqres.in/api/users", {
      name: "morpheus",
      job: "leader",
    }).should((response) => {
      expect(response.status).to.eq(200);
    });
  });
  // PUT Request
  
  it("PUT API testing Using Cypress API Plugin", () => {
    cy.api("PUT", "https://reqres.in/api/users/2", {
      name: "morpheus",
      job: "zion resident",
    }).should((response) => {
      expect(response.status).to.eq(200);
    });
  });
  // DELETE Request
  
  it("DELETE API testing Using Cypress API Plugin", () => {
    cy.api("DELETE", "https://reqres.in/api/users/2").should((response) => {
      expect(response.status).to.eq(204);
    });
  });
});