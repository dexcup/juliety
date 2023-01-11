import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getBalanceNumber } from 'utils/formatBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import {usePriceCakeBusd} from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  // const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null
  const cakePrice = usePriceCakeBusd();
  const cakeInt = new BigNumber(cakePrice);
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const burnedInt = new BigNumber(burnedBalance)
  const total = cakeInt.multipliedBy(burnedInt).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          {TranslateString(762, 'Total Burned Balance')}
        </Heading>
          <>
            <Heading size="xl">${`${total}`}</Heading>
            <Text color="textSubtle">
            <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
            <a href="https://bscscan.com/address/0x000000000000000000000000000000000000dEaD" target="_blank" rel="noreferrer">View on Blockchain</a>
            </Text>
          </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
