import React, { useCallback, useMemo, useState } from 'react'
import { ThemeProvider } from 'react-neu'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ToastContainer, Slide } from 'react-toastify'
import { ApolloProvider } from '@apollo/client'
import styled from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

import MobileMenu from 'components/MobileMenu'
import TopBar from 'components/TopBar'

import { BalancesProvider } from 'contexts/Balances'
import { AirdropProvider } from 'contexts/Airdrop'
import { ExternalAirdropProvider } from 'contexts/ExternalAirdrop'
import { FarmingProvider } from 'contexts/Farming'
import { PricesProvider } from 'contexts/Prices'
import { WalletProvider } from 'contexts/Wallet'
import { BuySellProvider } from 'contexts/BuySell'
import { DpiTokenMarketDataProvider } from 'contexts/DpiTokenMarketData'
import { DpiIndexComponentsProvider } from 'contexts/DpiIndexComponents'
import { IndexTokenMarketDataProvider } from 'contexts/IndexTokenMarketData'
import { SnapshotProposalsProvider } from 'contexts/SnapshotProposals'
import { TransactionWatcherProvider } from 'contexts/TransactionWatcher'

import useLocalStorage from 'hooks/useLocalStorage'

import About from 'views/About'
import Indices from 'views/Indices'
import Strategies from 'views/Strategies'

import Farm from 'views/Farm'
import Home from 'views/Home'
import DPI from 'views/DPI'
import Token from 'views/Token'
import Education from 'views/Education'

import createTheme from 'utils/createCustomTheme'
import graphqlClient from 'utils/graphql'

const App: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const handleDismissMobileMenu = useCallback(() => {
    setMobileMenu(false)
  }, [setMobileMenu])

  const handlePresentMobileMenu = useCallback(() => {
    setMobileMenu(true)
  }, [setMobileMenu])

  return (
    <Router>
      <Providers>
        <StyledBackgroundDiv>
          <TopBar onPresentMobileMenu={handlePresentMobileMenu} />
          <MobileMenu
            onDismiss={handleDismissMobileMenu}
            visible={mobileMenu}
          />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/indices'>
              <Indices />
            </Route>
            <Route exact path='/strategies'>
            <Strategies />
            </Route>
            <Route exact path='/token'>
            <Token />
            </Route>
            <Route exact path='/dpi'>
            <DPI />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/farm'>
              <Farm />
            </Route>
            <Route path='/education'>
              <Education />
            </Route>
          </Switch>
        </StyledBackgroundDiv>
      </Providers>
    </Router>
  )
}

const Providers: React.FC = ({ children }) => {
  const [darkModeSetting] = useLocalStorage('darkMode', true)
  const { dark: darkTheme, light: lightTheme } = useMemo(() => {
    return createTheme()
  }, [])

  return (
    <ThemeProvider
      darkModeEnabled={darkModeSetting}
      darkTheme={darkTheme}
      lightTheme={lightTheme}
    >
      <TransactionWatcherProvider>
        <WalletProvider>
          <ApolloProvider client={graphqlClient}>
            <AirdropProvider>
              <ExternalAirdropProvider>
                <PricesProvider>
                  <BalancesProvider>
                    <FarmingProvider>
                      <BuySellProvider>
                        <DpiTokenMarketDataProvider>
                          <DpiIndexComponentsProvider>
                            <IndexTokenMarketDataProvider>
                              <SnapshotProposalsProvider>
                                {children}
                              </SnapshotProposalsProvider>
                            </IndexTokenMarketDataProvider>
                          </DpiIndexComponentsProvider>
                        </DpiTokenMarketDataProvider>
                      </BuySellProvider>
                    </FarmingProvider>
                  </BalancesProvider>
                </PricesProvider>
              </ExternalAirdropProvider>
            </AirdropProvider>
          </ApolloProvider>
        </WalletProvider>
      </TransactionWatcherProvider>
      <ToastContainer transition={Slide} position='bottom-left' />
    </ThemeProvider>
  )
}

const StyledBackgroundDiv = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
`

export default App
