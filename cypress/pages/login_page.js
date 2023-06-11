//page object model
export class LoginPage {

    LoginPage_username = '#uname'
    LoginPage_password = '#pwd'
    LoginPage_loginButton = '[type="submit"]'

    navigate (url){
        cy.visit(url)
    }

    enterUsername(username){
        cy.get(this.LoginPage_username).clear().type(username)
    
    }

    enterPassword(password){
        cy.get(this.LoginPage_password).clear().type(password)

    }

    clickLoginBtn(){
        cy.get(this.LoginPage_loginButton).click()  
    }

}