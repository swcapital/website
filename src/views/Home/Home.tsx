import React from 'react'
import { Container, Spacer } from 'react-neu'

import Page from 'components/Page'
import Explanation from 'components/Explanation'
import HomeHeader from './components/HomeHeader'
import MarketData from './components/MarketData'
import Products from './components/Products'

const Home: React.FC = () => {
  return (
    <Page>
      <Container size='lg'>
        <HomeHeader />
        <Spacer size='lg' />
        <Products />
        <Explanation />
        <Spacer size='lg' />
        <MarketData />
    
      </Container>
    </Page>
  )
}

export default Home