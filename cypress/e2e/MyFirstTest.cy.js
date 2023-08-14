/// <reference types="cypress" />

//creating test cases inside the describe block
describe('MyFirstTest', ()=>{

    it("TitleTest-1", function(){
        //open the web page: cy.visit()
        cy.visit("https://enthrallit.com/")
        cy.title().should('eq', 'Enthrall IT');

    })

    it("TitleTest-2", ()=>{
        cy.visit("https://enthrallit.com/")
        cy.title().should('contain', "Enthrall")

    })
})