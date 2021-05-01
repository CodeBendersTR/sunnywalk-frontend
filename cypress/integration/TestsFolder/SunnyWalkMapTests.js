/// <reference types="cypress" />

context('Starting', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('When logged in and go to my map be able to record the sunny walk you are going to take.', () => {
        cy.contains('Login').click()
        cy.get('[id=loginEmail]').type('ci.cu5@gmail.com')
        cy.get('[id=loginPassword]').type('codebenders')
        cy.contains('LogIn').click()
        cy.contains('My Map').click()
        cy.get('.MuiTypography-h5').contains('Record your sunny walk')
      })
      it('check if pressing the the center of the map places a marker with your location and show where that is in text form.', () => {
        cy.contains('Login').click()
        cy.get('[id=loginEmail]').type('ci.cu5@gmail.com')
        cy.get('[id=loginPassword]').type('codebenders')
        cy.contains('LogIn').click()
        cy.contains('My Map').click()
        cy.wait(500)
        cy.get('.gm-style').click('center')
        cy.get('.MuiInputBase-input').eq(1).should('have.value','Walthamstow (51.586981,-0.015762)')
    
      })
      it('check if add walk adds a walk to be used later.', () => {
        cy.contains('Login').click()
        cy.get('[id=loginEmail]').type('ci.cu5@gmail.com')
        cy.get('[id=loginPassword]').type('codebenders')
        cy.contains('LogIn').click()
        cy.contains('My Map').click()
        cy.wait(500)
        cy.get('.gm-style').click('center')
        cy.get('.MuiRating-label').eq(4).click()
        cy.get('.MuiButton-label').eq(2).click()
        cy.get('.MuiBox-root-44').contains('Walk added successfully')
    
      })
      it('check if add walk dont add a walk if rating has been unselected.', () => {
        cy.contains('Login').click()
        cy.get('[id=loginEmail]').type('ci.cu5@gmail.com')
        cy.get('[id=loginPassword]').type('codebenders')
        cy.contains('LogIn').click()
        cy.contains('My Map').click()
        cy.wait(500)
        cy.get('.gm-style').click('center')
        cy.get('.MuiRating-label').eq(4).click()
        cy.get('.MuiRating-label').eq(4).click()
        cy.get('.MuiButton-label').eq(2).click()
        cy.get('.MuiBox-root-44').contains('Could not add walk')
    
      })
})