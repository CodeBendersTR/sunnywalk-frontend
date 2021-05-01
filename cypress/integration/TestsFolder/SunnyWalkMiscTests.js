/// <reference types="cypress" />
//This is what happens before any test. as we are testing a local build of the site we first visit localhost:3000
context('Starting', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  
  it('Check that the map is rendering in the map page.', () => {
    cy.contains('Login').click()
    cy.get('[id=loginEmail]').type('ci.cu5@gmail.com')
    cy.get('[id=loginPassword]').type('codebenders')
    cy.contains('LogIn').click()
    cy.contains('My Map').click()
    cy.get('div').should('have.class', 'map')
  })
  //check that a button is visible if if the user has been logged out.
  it('When logged in and click logout check if user can log back in.', () => {
    cy.contains('Login').click()
    cy.get('[id=loginEmail]').type('ci.cu5@gmail.com')
    cy.get('[id=loginPassword]').type('codebenders')
    cy.contains('LogIn').click()
    cy.contains('Logout').click()
    cy.contains('Login').should('be.visible')
  })
 
  
  })
 
//this only checks if one image is colorblind friendly as other images on the front page are ImageLoad and therefor hides its accessibility.
  it('Check the images are colorblind friendly.', () => {
    cy.get('img').eq(1).should('have.attr','accessibility', 'colorblind')
  })
  // Check for a unsuccessful login.
  
})
