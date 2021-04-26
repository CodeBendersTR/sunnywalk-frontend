/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('Check if login button goes to login page.', () => {
    cy.contains('Login').click()
    cy.url().should('include', '/Login')
  })
  it('Check if Register button goes to register page.', () => {
    cy.contains('Register').click()
    cy.url().should('include', '/Register')
  })
  it('Check if Main button brings user back to main page.', () => {
    cy.contains('Login').click()
    cy.contains('Main').click()
    cy.url().should('include', '/localhost')
  })
  
  it('When logged in send user to their home page.', () => {
    cy.contains('Login').click()
    cy.contains('LogIn').click()
    cy.url().should('include', '/home')
  })
  it('When logged in i should be able to access the map page with the myMap button.', () => {
    cy.contains('Login').click()
    cy.contains('LogIn').click()
    cy.contains('My Map').click()
    cy.url().should('include', '/mymap')
  })
  
  it('Check that the map is rendering in the map page.', () => {
    cy.contains('Login').click()
    cy.contains('LogIn').click()
    cy.contains('My Map').click()
    cy.get('div').should('have.class', 'map')
  })
  it('When logged in and click logout send user back to main page.', () => {
    cy.contains('Login').click()
    cy.contains('LogIn').click()
    cy.contains('Logout').click()
    cy.url().should('include', '/localhost')
  })
  
  it('When logged in click profile page to go to editing profile.', () => {
    cy.contains('Login').click()
    cy.contains('LogIn').click()
    cy.contains('Profile').click()
    cy.url().should('include', '/Profile')
  })
  it('When logged in and click logout check if user can log back in.', () => {
    cy.contains('Login').click()
    cy.contains('LogIn').click()
    cy.contains('Logout').click()
    cy.contains('Login').should('be.visible')
  })
  it('Check i can go from logging in to register page if i realise i do not have a account.', () => {
    cy.contains('Login').click()
    cy.contains('No account yet? Register').click()
    cy.url().should('include', '/Register')
  })
  it('Check i can go from register page to login page if i realise i do have a account.', () => {
    cy.contains('Register').click()
    cy.contains('Already have an account? Login').click()
    cy.url().should('include', '/Login')
  })
  it('If i click the sunny walk logo and text i should go into the development github.', () => {
    cy.get('a').should('have.attr','href', 'https://github.com/CodeBendersTR')
  })
  it('Check the text boxes in the profile button works.', () => {
    cy.contains('Login').click()
    cy.contains('LogIn').click()
    cy.contains('Profile').click()
    cy.get('.MuiInputBase-input').eq(0).type('FakePassword').should('have.value', 'FakePassword')
    cy.get('.MuiInputBase-input').eq(1).type('FakePassword').should('have.value', 'FakePassword')
    cy.get('.MuiInputBase-input').eq(2).type('Walthamstow').should('have.value', 'Walthamstow')
  })
})
