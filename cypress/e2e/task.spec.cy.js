describe('Task HTML', () => {
  it('should load the task.html file', () => {
    cy.visit('/task.html')
    cy.contains('Practice Page');
  })
})