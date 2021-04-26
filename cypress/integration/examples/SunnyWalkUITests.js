/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('Check if login button goes to login page.', () => {
    // https://on.cypress.io/type
    cy.contains('Login').click()
    cy.url().should('include', '/Login')
  })
  it('Check if Register button goes to register page.', () => {
    // https://on.cypress.io/type
    cy.contains('Register').click()
    cy.url().should('include', '/Register')
  })
  it('Check if Main button brings user back to main page.', () => {
    // https://on.cypress.io/type
    cy.contains('Login').click()
    cy.contains('Main').click()
    cy.url().should('include', '/localhost')
  })
  
  it('When logged in send user to their home page.', () => {
    // https://on.cypress.io/type
    cy.contains('Login').click()
    cy.contains('LogIn').click()
    cy.url().should('include', '/home')
  })
  
  it('When logged in and click logout send user back to main page.', () => {
    // https://on.cypress.io/type
    cy.contains('Login').click()
    cy.contains('LogIn').click()
    cy.contains('Logout').click()
    cy.url().should('include', '/localhost')
  })
  
  it('When logged in and click logout check if user can log back in.', () => {
    // https://on.cypress.io/type
    cy.contains('Login').click()
    cy.contains('LogIn').click()
    cy.contains('Logout').click()
    cy.contains('Login').should('be.visible')
  })
  it('Check i can go from logging in to register page if i realise i do not have a account.', () => {
    // https://on.cypress.io/type
    cy.contains('Login').click()
    cy.contains('No account yet? Register').click()
    cy.url().should('include', '/Register')
  })
  it('Check i can go from register page to login page if i realise i do have a account.', () => {
    // https://on.cypress.io/type
    cy.contains('Register').click()
    cy.contains('Already have an account? Login').click()
    cy.url().should('include', '/Login')
  })
  it('If i click the sunny walk logo and text i should go into the development github.', () => {
    // https://on.cypress.io/type
    cy.get('a').should('have.attr','href', 'https://github.com/CodeBendersTR')
  })
})
