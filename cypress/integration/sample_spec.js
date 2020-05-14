// passing test
describe('My First Test', () => {
  it('test users endpoint', () => {
    cy.request('http://localhost:3000/users')
      .then((response) => {
        console.log(response.body)
        expect(response.body).to.have.property('users')
      })
  })
})