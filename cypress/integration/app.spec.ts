describe('App', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  it('should render page', () => {
    cy.get('div').should('contain', 'Bookmarkr')
  })
})
