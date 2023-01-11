import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'WWC',
    tokenAddress: '0x219Bff72Cc73F266B4AEBcd6011358d2E612646b',   // token address
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x219Bff72Cc73F266B4AEBcd6011358d2E612646b',  // token address
    contractAddress: {
      97: '',
      56: '0x6219604710B0467A0fca1A30908459004EF2b32b',  /// masterchef address
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  // {
  //   sousId: 64,
  //   tokenName: 'GFSH',
  //   tokenAddress: '0x735ebe3ed47877a11023b904054a0ffe44e91ab7',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: '0xCbD5d71873A4EBfc76768cD7eD369e4ca2AefB99',
  //   contractAddress: {
  //     97: '',
  //     56: '0xfcd0cab672aaf7cb699905d165e1a43801d278d0',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://dexe.network/',
  //   harvest: true,
  //   tokenPerBlock: '0.1',
  //   sortOrder: 999,
  //   isFinished: false,
  //   tokenDecimals: 18,
  // },
  // {
  //   sousId: 66,
  //   tokenName: 'GFSH',
  //   tokenAddress: '0xbfe15bcc7819f2f59e9dc9a595bff09b1c422dbc',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: '0xCbD5d71873A4EBfc76768cD7eD369e4ca2AefB99',
  //   contractAddress: {
  //     97: '',
  //     56: '0x00ed96bda66213d19ecf71e8a272c52204909f5b',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://dexe.network/',
  //   harvest: true,
  //   tokenPerBlock: '1',
  //   sortOrder: 2,
  //   isFinished: false,
  //   tokenDecimals: 8,
  // },
 
]

export default pools
