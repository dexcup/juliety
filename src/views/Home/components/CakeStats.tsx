import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import { usePriceCakeBusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const marketCap = new BigNumber(cakeSupply).multipliedBy(usePriceCakeBusd()).toNumber()
  const numberSupply = totalSupply ? getBalanceNumber(totalSupply) : 0;

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'WonniwCoin Stats')}
        </Heading> 
        {marketCap.toString() !== '0' && marketCap.toString() !== 'NaN' ?         <Row>
          <Text fontSize="14px">{TranslateString(540, 'Market Cap ($)')}</Text>
                     <CardValue fontSize="14px" decimals={2} value={marketCap} />
        </Row> : null }
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'Total Minted')}</Text>
          <CardValue fontSize="14px" decimals={2} value={numberSupply} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'Total Burned')}</Text>
          <CardValue fontSize="14px" decimals={2} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'Circulating Supply')}</Text>
          <CardValue fontSize="14px" decimals={2} value={cakeSupply} />
        </Row>
        {/* <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total FSTX Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} />}
        </Row> */}
        {/* <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total FSTX Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row> */}
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New WonniwCoin/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={500} />
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
