/*This API tests involves 
sending a request
capturing resp body
using the resp body results to send another request (loop)
*/

/// <reference types="Cypress"/>

describe('check weather Information', ()=>{
    it('Get Weather Information for city',()=>{
        cy.request({
            method:'GET',
            url: 'https://www.metaweather.com/api/location/search/?query=san'
        }).then((res)=>{
            expect(res.status).to.eq(200)
            var city=res.body[0].title
            return city
        }).then((city)=>{
           cy.request({
            method:'GET',
            url: 'https://www.metaweather.com/api/location/search/?query='+city
           }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body[0].title).to.eq(city)
           })
        })
    })

    it('Get Weather Information for all cities',()=>{
        cy.request({
            method:'GET',
            url: 'https://www.metaweather.com/api/location/search/?query=ind'
        }).then((res)=>{
            var location=res.body
            return location
        }).then((location)=>{
            for( let i=0; i<location.length; i++){
           cy.request({
            method:'GET',
            url: 'https://www.metaweather.com/api/location/search/?query='+location[i].title
           }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body[0].title).to.eq(location[i].title)
           })
        }
        })
    })
})