/// <reference types="cypress" />
//This is what happens before any test. as we are testing a local build of the site we first visit localhost:3000
context('Starting', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  
  //The following 8 tests are testing that links work with the buttons.
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
  
  it('Check that the map is rendering in the map page.', () => {
    cy.contains('Login').click()
    cy.get('[id=loginEmail]').type('ci.cu5@gmail.com')
    cy.get('[id=loginPassword]').type('codebenders')
    cy.contains('LogIn').click()
    cy.contains('My Map').click()
    cy.get('div').should('have.class', 'map')
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
  //check that a button is visible if if the user has been logged out.
  it('When logged in and click logout check if user can log back in.', () => {
    cy.contains('Login').click()
    cy.get('[id=loginEmail]').type('ci.cu5@gmail.com')
    cy.get('[id=loginPassword]').type('codebenders')
    cy.contains('LogIn').click()
    cy.contains('Logout').click()
    cy.contains('Login').should('be.visible')
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
  //check the link to the github page works. unfortuntly cypress doesnt allow for testing for websites that use other url ie going from google to facebook is not allowed all testing needs to be done in one space.
  it('If i click the sunny walk logo and text i should go back to the main page.', () => {
    cy.contains('Login').click()
    cy.get('img').eq(1).click()
    cy.url().should('include', '/localhost')
  })
  it('Check if all links under embrace the power of the sun go to the right places.', () => {
    cy.get('a').eq(3).should('have.attr','href','https://www.webmd.com/balance/ss/slideshow-health-benefits-nature')
    cy.get('a').eq(4).should('have.attr','href','https://www.webmd.com/balance/ss/slideshow-health-benefits-nature')
    cy.get('a').eq(5).should('have.attr','href','https://www.webmd.com/food-recipes/features/vitamin-d-vital-role-in-your-health')
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
//this only checks if one image is colorblind friendly as other images on the front page are ImageLoad and therefor hides its accessibility.
  it('Check the images are colorblind friendly.', () => {
    cy.get('img').eq(1).should('have.attr','accessibility', 'colorblind')
  })
  // Check for a unsuccessful login.
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
