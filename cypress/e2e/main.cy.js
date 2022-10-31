/// <reference types="cypress" />

describe('All pages', () => {
  before(() => {
    cy.visit('/')
  })

  it('displays 15 blocks', () => {
    cy.get('tbody tr').should('have.length', 15)
    cy.get('tbody tr').first().contains(/\d/)
  })

  it('navigates and displays block info', () => {
    cy.get('tbody tr').first().click()
    cy.get('tbody tr').first().contains(/\d/)
  })

  it('navigates and displays transaction info', () => {
    cy.get('tbody button').first().click()
    cy.get('ul li').first().click()
    cy.get('tbody tr').last().contains(/\d/)
  })
})
