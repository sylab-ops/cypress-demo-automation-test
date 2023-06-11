/// <reference types="cypress" />

import {LoginPage} from "../pages/login_page"
let loginPage = new LoginPage()

it('login test', () => {
    loginPage.navigate('https://trytestingthis.netlify.app/')
    loginPage.enterUsername()
    loginPage.enterPassword()
    loginPage.clickLoginBtn()
    
})