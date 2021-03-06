import React from 'react'
import { Surface, Spacer } from 'react-neu'
import styled from 'styled-components'

const Products: React.FC = () => (
  <div>
    <StyledTitle>
    Strategies
    </StyledTitle>
    
    

    <StyledContainer>
      <StyledTypeText>Actively Managed</StyledTypeText>
      <StyledCardRow>
      
    
    
        <StyledCardContainer>
          <Surface fill>
            <StyledCardContent>
              <StyledCardIcon src='https://index-dao.s3.amazonaws.com/owl.png' />
              <StyledCardTitle>BTC Long-Only Alpha</StyledCardTitle>
              <StyledCardDescription>
                Earn INDEX tokens be staking Uniswap ETH/DPI LP tokens.
              </StyledCardDescription>

              <StyledOutboundLink href='/dpi'>
                View Product
              </StyledOutboundLink>
            </StyledCardContent>
          </Surface>
        </StyledCardContainer>

        <Spacer />

        <StyledCardContainer>
          <Surface fill>
            <StyledCardContent>
              <StyledCardIcon src='https://index-dao.s3.amazonaws.com/alphafinance.png' />
              <StyledCardTitle>ETH Long-Only Alpha</StyledCardTitle>
              <StyledCardDescription>
                Earn leveraged yield in the ETH/DPI Pool by Alpha Homora.
              </StyledCardDescription>

              <StyledOutboundLink
                href='/dpi'
              >
                View Product
              </StyledOutboundLink>
            </StyledCardContent>
          </Surface>
        </StyledCardContainer>

        <Spacer />
        
        <StyledCardContainer>
        <Surface fill>
          <StyledCardContent>
            <StyledCardIcon src='https://index-dao.s3.amazonaws.com/owl.png' />
            <StyledCardTitle>ETH/BTC Long-Only Alpha</StyledCardTitle>
            <StyledCardDescription>
              Earn INDEX tokens be staking Uniswap ETH/DPI LP tokens.
            </StyledCardDescription>
  
            <StyledOutboundLink href='/dpi'>
              View Product
            </StyledOutboundLink>
          </StyledCardContent>
        </Surface>
      </StyledCardContainer>
  
      <Spacer />
        
        <StyledCardContainer>
        <Surface fill>
          <StyledCardContent>
            <StyledCardIcon src='https://index-dao.s3.amazonaws.com/alphafinance.png' />
            <StyledCardTitle>LINK/ETH Long-Only Alpha</StyledCardTitle>
            <StyledCardDescription>
              Earn leveraged yield in the ETH/DPI Pool by Alpha Homora.
            </StyledCardDescription>

            <StyledOutboundLink
              href='/dpi'
            >
              View Product
            </StyledOutboundLink>
          </StyledCardContent>
        </Surface>
      </StyledCardContainer>  
      
      <Spacer />    
      
      <StyledCardContainer>
      <Surface fill>
        <StyledCardContent>
          <StyledCardIcon src='https://index-dao.s3.amazonaws.com/moonswap.png' />
          <StyledCardTitle>BTC On-Chain Beta</StyledCardTitle>
          <StyledCardDescription>
            Provides long exposure to Bitcoin volatility.
          </StyledCardDescription>

          <StyledOutboundLink
            href='/dpi'
          >
            View Product
          </StyledOutboundLink>
        </StyledCardContent>
      </Surface>
    </StyledCardContainer>
      
    <Spacer />
    <Spacer />
        
      </StyledCardRow>

      <Spacer />



      <Spacer />
      
      <StyledTypeText>Yield Enhancement</StyledTypeText>

      <StyledCardRow>
      <StyledCardContainer>
      <Surface fill>
        <StyledCardContent>
          <StyledCardIcon src='https://index-dao.s3.amazonaws.com/moonswap.png' />
          <StyledCardTitle>USD High Yield Alpha</StyledCardTitle>
          <StyledCardDescription>
            Provides long exposure to Bitcoin volatility.
          </StyledCardDescription>

          <StyledOutboundLink
            href='/dpi'
          >
            View Product
          </StyledOutboundLink>
        </StyledCardContent>
      </Surface>
    </StyledCardContainer>
    <Spacer />
    
       
    
    
      </StyledCardRow>      
      
      
      
      

    </StyledContainer>
  </div>
)

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledTitle = styled.h2`
  font-size: 32px;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary.grey};
  padding-bottom: 30px;
  margin-bottom: 30px;
`

const StyledCardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const StyledCardContainer = styled.div`
  width: 30%;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledFixedCardContainer = styled.div`
  height: 300px;
  width: 30%;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 60px;
  }
`

const StyledCardContent = styled.div`
  padding: 30px;
`

const StyledTypeText = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-top: 0;
`

const StyledCardTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`
const StyledCardIcon = styled.img`
  margin-bottom: 20px;
  width: 50px;
  border-radius: 50%;
`

const StyledCardDescription = styled.p`
  font-size: 18px;
  line-height: 1.5;
`

const StyledOutboundLink = styled.a`
  display: block;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.primary.light};
  font-weight: 700;
  text-decoration: none;
`

export default Products
