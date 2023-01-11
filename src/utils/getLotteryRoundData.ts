export type DataResponse = {
  lotteryNumber: number
  lotteryDate: string
  lotteryNumbers: number[]
  poolSize: number
  burned: number
  contractLink: string
  jackpotTicket: number
  match1Ticket: number | null
  match2Ticket: number
  match3Ticket: number
  match4Ticket: number
  poolJackpot: number
  poolMatch3: number
  poolMatch2: number
  poolMatch1: number | null

  // TODO: Fill in the error type
  error: any
}

/**
 * Get data for a specific lottery
 */
const getLotteryRoundData = async (lotteryNumber: number): Promise<DataResponse> => {
  try {
    const response = await fetch(`https://api.pancakeswap.com/api/singleLottery?lotteryNumber=${lotteryNumber}`)
    const data = await response.json()
    const someData = {
      lotteryNumber: "0",
      lotteryDate: "2021-05-12T08:00:00.000Z",
      lotteryNumbers: [
      5,
      5,
      10,
      5
      ],
      poolSize: 0,
      burned: 0,
      contractLink: "https://bscscan.com/address/0xfdFaC8252EF02897925F882B397d29C7fEF3D347",
      jackpotTicket: 0,
      match3Ticket: 0,
      match2Ticket: 0,
      match1Ticket: null,
      poolJackpot: 0,
      poolMatch3: 0,
      poolMatch2: 0,
      poolMatch1: null
      };
    
    console.log("the data is ", data)
    console.log("the data2 is ", someData)

    // @ts-ignore
    return someData
  } catch (error) {
    throw new Error(error)
  }
}

export default getLotteryRoundData
