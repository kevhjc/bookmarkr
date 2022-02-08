describe('App', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  it('should render navbar', () => {
    cy.contains('Bookmarkr')
  })
})
