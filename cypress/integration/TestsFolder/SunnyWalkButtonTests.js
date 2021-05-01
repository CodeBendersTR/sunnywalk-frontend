/// <reference types="cypress" />

context('Starting', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  //The following tests are testing that links work with the buttons.
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
    cy.get('[id=loginEmail]').type('ci.cu5@gmail.com')
    cy.get('[id=loginPassword]').type('codebenders')
    cy.contains('LogIn').click()
    cy.url().should('include', '/home')
  })
  it('When logged in i should be able to access the map page with the myMap button.', () => {
    cy.contains('Login').click()
    cy.get('[id=loginEmail]').type('ci.cu5@gmail.com')
    cy.get('[id=loginPassword]').type('codebenders')
    cy.contains('LogIn').click()
    cy.contains('My Map').click()
    cy.url().should('include', '/mymap')
  })
  
  it('When logged in and click logout send user back to main page.', () => {
    cy.contains('Login').click()
    cy.get('[id=loginEmail]').type('ci.cu5@gmail.com')
    cy.get('[id=loginPassword]').type('codebenders')
    cy.contains('LogIn').click()
    cy.contains('Logout').click()
    cy.url().should('include', '/localhost')
  })
  
  it('When logged in click profile page to go to editing profile.', () => {
    cy.contains('Login').click()
    cy.get('[id=loginEmail]').type('ci.cu5@gmail.com')
    cy.get('[id=loginPassword]').type('codebenders')
    cy.contains('LogIn').click()
    cy.contains('Profile').click()
    cy.url().should('include', '/Profile')
  })
   //these two tests are checking the accessability of going from the login page to the rester page for the forgetful.
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
  it('If i click the sunny walk logo and text i should go back to the main page.', () => {
    cy.contains('Login').click()
    cy.get('img').eq(1).click()
    cy.url().should('include', '/localhost')
  })
})