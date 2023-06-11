/// <reference types="cypress" />

it('login test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').clear().type('Admin')
    cy.get('input[name="password"]').clear().type('admin123')
    cy.get('div#app button[type="submit"]').click()

    //Add User
    cy.get('div#app li:nth-child(1) > a').click()
    cy.get('div#app div.orangehrm-header-container > button[type="button"]').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').select("Admin").should('have.value', 'Admin')
    
})
