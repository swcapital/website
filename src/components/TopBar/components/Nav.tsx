import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import MoreDropdown from './MoreDropdown'
import IndexFundsDropdown from './IndexFundsDropdown'
import InvestmentStrategiesDropdown from './InvestmentStrategiesDropdown'
import SunCoinDropdown from './SunCoinDropdown'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink exact activeClassName='active' to='/indices'>
      Indices
      </StyledLink>
      <StyledLink exact activeClassName='active' to='/strategies'>
      Strategies
      </StyledLink>
      <StyledLink exact activeClassName='active' to='/token'>
      Token
      </StyledLink>
      <StyledLink exact activeClassName='active' to='/about'>
      About
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.grey[300]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.grey[600]};
  }
  &.active {
    color: ${(props) => props.theme.colors.highlightColor};
  }
`

const StyledLinkAlt = styled(NavLink)`
color: ${(props) => props.theme.colors.grey[300]};
font-weight: 700;
padding-left: ${(props) => props.theme.spacing[3]}px;
padding-right: ${(props) => props.theme.spacing[3]}px;
text-decoration: none;
&:hover {
  color: ${(props) => props.theme.colors.grey[600]};
}
&.active {
  color: ${(props) => props.theme.colors.highlightColor};
}
`

export default Nav
