/// <reference types="cypress" />

it('login test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('div#app button[type="submit"]').click()
    cy.get('div#app li:nth-child(1) > a').click()
    cy.get('div#app div.orangehrm-header-container > button[type="button"]').click()

    //Assertions
    
})
