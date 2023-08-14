/// <reference types="cypress" />
describe('My first Test', ()=>{
    it('TitleTest1', ()=>{
        cy.visit("https://enthrallit.com/");
        cy.title().should('eq', 'Enthrall IT')
        .end();
    })

    it('TitleTest2', function(){
        cy.visit("https://enthrallit.com/")
        cy.title().should('include', 'IT')
        .end();
    })

})