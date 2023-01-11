import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'WWC',
    lpAddresses: {
      97: '',
      56: '0x219Bff72Cc73F266B4AEBcd6011358d2E612646b',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '',
      56: '0x219Bff72Cc73F266B4AEBcd6011358d2E612646b',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 1,
    lpSymbol: 'WWC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70845276625F0621FFb288d38E665caB9654100F',   // lp address token-bnb
    },
    tokenSymbol: 'WWC',
    tokenAddresses: {
      97: '',
      56: '0x219Bff72Cc73F266B4AEBcd6011358d2E612646b', // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
    {
    pid: 2,
    lpSymbol: 'WNNW-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x47Bc2fE36f0e2370CD87d59aDbB57Df59826a948',   // lp address token-bnb
    },
    tokenSymbol: 'WNNW',
    tokenAddresses: {
      97: '',
      56: '0xa1578dAf3EEB1ACCC3767C687cd5A0d9Df8B20Cb', // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

]

export default farms
