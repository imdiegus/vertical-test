// <reference types="cypress">

describe('login', () => {
  it('open page', () => {
    cy.visit('http://localhost:5173')
    cy.get('#email').type('diego@test.test')
    cy.get('#password').type('Ab123.456')
    cy.get('.buttonGradient').click()
    cy.wait(1000)
    cy.get('button.capitalize').click()
  })
})
