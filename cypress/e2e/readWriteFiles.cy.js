/// <reference types ="cypress"/>

before(function (){
    cy.fixture('example.json').as('test_data')
})

it('Read files using fixtures', function() {
    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.body)
    })

    cy.log(this.test_data.name)
})

it('Read file using readFile()', function(){
    cy.readFile('./cypress/fixtures/example.json').then((data)=> {
        cy.log(data.name)
    })
})

it('Write file writeFile()', function(){
    cy.writeFile('example.json','Hello, I am Abraham!') 
    cy.writeFile('./cypress/fixtures/example.txt','Hello, I am Abraham!') 
})

