context('Starting', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
    it('Check if all links under embrace the power of the sun go to the right places.', () => {
      cy.get('a').eq(3).should('have.attr','href','https://www.webmd.com/balance/ss/slideshow-health-benefits-nature')
      cy.get('a').eq(4).should('have.attr','href','https://www.webmd.com/balance/ss/slideshow-health-benefits-nature')
      cy.get('a').eq(5).should('have.attr','href','https://www.webmd.com/food-recipes/features/vitamin-d-vital-role-in-your-health')
    })
})  