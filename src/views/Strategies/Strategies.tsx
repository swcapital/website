import React from 'react'
import { Container, Spacer } from 'react-neu'

import Page from 'components/Page'
import Products from './components/Products'

const Strategies: React.FC = () => {
  return (
    <Page>
      <Container size='lg'>
        <Products />
      </Container>
    </Page>
  )
}

export default Strategies
