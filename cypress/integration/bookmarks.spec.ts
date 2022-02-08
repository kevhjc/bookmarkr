describe('Bookmark API testing', () => {
  context('GET /api/bookmark', () => {
    it('fetches bookmarks feed - GET', () => {
      cy.request({
        method: 'GET',
        url: 'https://www.bookmarkr.link/api/bookmark',
      }).should((response) => {
        cy.log(JSON.stringify(response.body))
      })
    })
  })
})
