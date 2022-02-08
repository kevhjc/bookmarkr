describe('App', () => {
  before(() => {
    cy.visit('https://www.bookmarkr.link/')
  })

  it('should render page', () => {
    cy.get('div').should('contain', 'Bookmarkr')
  })
})
