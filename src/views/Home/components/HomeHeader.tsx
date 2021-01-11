import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import TextLoop from "react-text-loop";

import useDpiTokenMarketData from 'hooks/useDpiTokenMarketData'

const Home: React.FC = () => {
  const { latestMarketCap } = useDpiTokenMarketData()

  return (
    <div>
      <HomeTitle>
        <AuvText>
          <TextLoop interval={1500} springConfig={{ stiffness: 180, damping: 16 }}>
          <span>Indices</span>
          <span>Options</span>
          <span>Active Strategies</span>
          <span>Liquidity Mining</span>
          <span>Structured Products</span>
          <span>Smart Beta</span>
          </TextLoop>{" "}
        </AuvText>
        <br/>
        for DeFi. Brought to you by a partner you can trust.
      </HomeTitle>
      <HomeHeaderCTA to='/indices'>View Products</HomeHeaderCTA>
    </div>
  )
}

const HomeTitle = styled.p`
  font-size: 72px;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`

const AuvText = styled.span`
  font-size: 72px;
  line-height: 1;
  color: #ffea1d;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`

const HomeHeaderCTA = styled(NavLink)`
  color: #202124;
  background-color: #FFEA1D;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  :hover {
    cursor: pointer;
    background-color: #202124;
    color: white;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export default Home
