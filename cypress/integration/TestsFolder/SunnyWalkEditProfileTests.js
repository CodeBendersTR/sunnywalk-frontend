/// <reference types="cypress" />

context('Tests around the profile page and editing', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
//test that the typing in editing profile page works.
 it('Check the text boxes in the profile button works.', () => {
    cy.contains('Login').click()
    cy.get('[id=loginEmail]').type('ci.cu5@gmail.com')
    cy.get('[id=loginPassword]').type('codebenders')
    cy.contains('LogIn').click()
    cy.contains('Profile').click()
    cy.get('.MuiInputBase-input').eq(0).type('FakePassword').should('have.value', 'FakePassword')
    cy.get('.MuiInputBase-input').eq(1).type('FakePassword').should('have.value', 'FakePassword')
    cy.get('.MuiInputBase-input').eq(2).type('Walthamstow').should('have.value', 'Walthamstow')
  })
  //Next three tests check the values that are in the select boxes within the the edit profile page.
  it('Check the select button for walker types have values assigned to them.', () => {
    cy.contains('Login').click()
    cy.get('[id=loginEmail]').type('ci.cu5@gmail.com')
    cy.get('[id=loginPassword]').type('codebenders')
    cy.contains('LogIn').click()
    cy.contains('Profile').click()
    cy.get('.MuiSelect-select').eq(0).click()
    cy.get('.MuiListItem-root').eq(6).contains('Active wheelchair')
    cy.get('.MuiListItem-root').eq(7).contains('Electronic wheelchair')
    cy.get('.MuiListItem-root').eq(8).contains('Pram')
    cy.get('.MuiListItem-root').eq(9).contains('Push walker')
    cy.get('.MuiListItem-root').eq(10).contains('Scooter')
    cy.get('.MuiListItem-root').eq(11).contains('Skater/Rollerblades')

  })
  it('Check the select button for Notification settings have values assigned to them.', () => {
    cy.contains('Login').click()
    cy.get('[id=loginEmail]').type('ci.cu5@gmail.com')
    cy.get('[id=loginPassword]').type('codebenders')
    cy.contains('LogIn').click()
    cy.contains('Profile').click()
    cy.get('.MuiSelect-select').eq(1).click()
    cy.get('.MuiListItem-root').eq(6).contains('Email')
    cy.get('.MuiListItem-root').eq(7).contains('Web Notification')
  })

  it('Check the select button for weather preferences have values assigned to them.', () => {
    cy.contains('Login').click()
    cy.get('[id=loginEmail]').type('ci.cu5@gmail.com')
    cy.get('[id=loginPassword]').type('codebenders')
    cy.contains('LogIn').click()
    cy.contains('Profile').click()
    cy.get('.MuiSelect-select').eq(2).click()
    cy.get('.MuiListItem-root').eq(6).contains('Sunny')
    cy.get('.MuiListItem-root').eq(7).contains('Partly Sunny')
    cy.get('.MuiListItem-root').eq(8).contains('Cloudy')
    cy.get('.MuiListItem-root').eq(9).contains('Raining')
    cy.get('.MuiListItem-root').eq(10).contains('Snow')
    cy.get('.MuiListItem-root').eq(11).contains('Windy')

  })
})


