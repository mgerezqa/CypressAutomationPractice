describe('template spec', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://www.automationpractice.pl/index.php')
  })
  it('El titulo de la url tiene que ser My Shop', () => {
    cy.title().should('equals',"My Shop")
  })

  it('Tienen que haber cuatro categorias disponibles', () => {
    cy.get('.sf-menu > *').should('have.length',4)
  })

  it('Se debe mostrar el logo de la marca en la home page', () => {
    cy.get('.logo').should('be.visible')
  })
  
  it('El texto del carro de compras debe decir Cart', () => {
    cy.get('[title="View my shopping cart"]').should('contain.text','Cart')
  })

  it('Se debe poder clickear en el boton de busqueda', () => {
    cy.get('#search_query_top')
    .should('be.visible')
    .should('be.enabled')
    .click
  })
  
  it('Se debe poder clickear en el boton de cart', () => {
    cy.get('a[title="View my shopping cart"]')
    .should('be.visible')
    .click
  })
  
  })



