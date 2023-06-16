export class LoginPage2 {

    LoginPage_username = 'input[name="username"]'
    LoginPage_password = 'input[name="password'
    LoginPage_loginButton = 'div#app button[type="submit"]'

    navigate(url){
        cy.visit(url)
    }

    getUsername(username){
        cy.get(this.LoginPage_username).clear().type(username)
    }

    getPassword(password){
        cy.get(this.LoginPage_password).clear().type(password)
    }

    clickLoginBtn(){
        cy.get(this.LoginPage_loginButton).click()
    }
}
    