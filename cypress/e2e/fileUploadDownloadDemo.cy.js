/// <reference types ="cypress"/>
/// <reference types ="cypress-downloadfile"/>

it('Cypress File Upload Test', function(){
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('example.json')
})



it('File Downnload Test', function(){
    cy.downloadFile('https://www.recycleit4u.co.uk/wp-content/uploads/2015/03/26109541_m.jpg', 
    'mydownloads',
    'm.jpg')
})
