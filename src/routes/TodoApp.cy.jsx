import React from 'react'
import TodoApp from './TodoApp'

describe('<TodoApp />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TodoApp />)
  })
})