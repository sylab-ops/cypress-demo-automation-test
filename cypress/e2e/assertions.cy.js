/// <reference types="cypress" />


it('learning implicit assertions', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()

    //implicit assertions
    cy.get('#query-btn',{timeout:6000})
        .should('contain', 'Button') 
        .should('have.class','btn-primary')
        .should('be.visible')
        .should('be.enabled')
        
    cy.get('#query-btn').invoke('attr','id')
        .should('equal','query-btn')
       
    //chaining
    cy.get('#query-btn')
        .should('contain', 'Button') 
        .and('have.class','query-btn')

    //explicit assertions
    expect(true).to.be.true

    let name ='Abraham'
    expect(name).to.be.equal('Abraham')
      
    
    //assert command
    assert.equal(4,4, 'Not Equal')

    assert.strictEqual(4,4, 'Not Strictly Equal')

    assert.isNumber(5, 'Is a number')

})

