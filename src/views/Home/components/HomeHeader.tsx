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
          <span>Structured Products</span>
          <span>Options</span>
          <span>Active Strategies</span>
          <span>Liquidity Mining</span>
          </TextLoop>{" "}
        </AuvText>
        <br/>
        for DeFi. Brought to you by a partner you can trust.
      </HomeTitle>
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
  color: #03c75e;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`

const HomeHeaderCTA = styled(NavLink)`
  color: white;
  background-color: #03c75e;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  :hover {
    cursor: pointer;
    background-color: #02bf5a;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export default Home
