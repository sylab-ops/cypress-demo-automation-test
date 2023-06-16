/// <reference types="cypress" />

import {LoginPage2} from "../pages/login_page2"
const loginPage2 = new LoginPage2()
    it('login test', () => {
        loginPage2.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage2.getUsername('Admin')
        loginPage2.getPassword('admin123')
        loginPage2.clickLoginBtn()
    
    it('Add user test', () => {
        //Add User
        cy.get('div#app li:nth-child(1) > a').click()
        cy.get('div#app div.orangehrm-header-container > button[type="button"]').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').select("Admin").should('have.value', 'Admin')
    }) 
    
})
