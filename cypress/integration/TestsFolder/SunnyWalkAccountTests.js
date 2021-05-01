/// <reference types="cypress" />

context('Tests for logging in and creating an account', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
    it('check for something trying to log in with wrong credentials.',() =>{
        cy.contains('Login').click()
        cy.get('[id=loginEmail]').type('ci.cu5@gmail.com')
        cy.get('[id=loginPassword]').type('codefenders')
        cy.contains('LogIn').click()
        cy.get('.MuiBox-root').contains('Login failed')
      })
      //as we already have a user with this email it wont allow the user to create another account.
      it('Check if a user is already register does it show the failed message.', () => {
        cy.contains('Register').click()
        cy.get('[id=registerFirstName]').type('ci.cu5@gmail.com')
        cy.get('[id=registerLastName]').type('codefenders')
        cy.get('[id=registerCity]').type('London')
        cy.get('[id=registerEmail]').type('ci.cu5@gmail.com')
        cy.get('[id=registerPassword]').type('codefenders')
        cy.get('.MuiButton-label').eq(4).click()
        cy.get('.MuiBox-root').contains('Registration failed')
      })
      //this account has his preferences set to london, what we are checking here is that it shows that he is getting the weather updates from london when he has done logging in.
      it('When Check that the preferences are working and showing the weather from where it was set.', () => {
        cy.contains('Login').click()
        cy.get('[id=loginEmail]').type('ci.cu5@gmail.com')
        cy.get('[id=loginPassword]').type('codebenders')
        cy.contains('LogIn').click()
        cy.get('strong').contains('London')
      })
})