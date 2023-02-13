class flipkartTravel {
    getTravelSection() {
        return cy.get('img[alt="Travel"]')
    }

    selectRoundTrip() {
        return cy.get('#ROUND_TRIP')
    }

    selectRoundTrip() {
        return cy.get('#ROUND_TRIP')
    }

    fromCity() {
        return cy.get('input[name="0-departcity"]')
    }

    toCity() {
        return cy.get('input[name="0-arrivalcity"]')
    }

    selectDate() {
        return cy.get('button').contains("30")
    }

}
export default flipkartTravel