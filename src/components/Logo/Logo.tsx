import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import coinbaseWalletLogo from 'assets/logo-200.png'

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <StyledEmoji src={coinbaseWalletLogo} alt="SW Capital" />
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 50px;
  min-width: 177px;
  padding: 0;
  text-decoration: none;
`

const StyledEmoji = styled.img`
  height: 50px;
  text-align: center;
  width: 177px;
`

export default Logo