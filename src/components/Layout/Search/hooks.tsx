import { Address } from '@common/Address'
import { useBalance, useLatestBlockNumber, useTransaction } from 'web3/hooks'

function useResult(input: string) {
  const { data: latestBlockNumber } = useLatestBlockNumber()
  const { data: transaction } = useTransaction(input, input.length === 66)
  const { data: balance } = useBalance(input, input.length === 42)

  let result = ''
  let link = ''
  let Item = <></>

  if (latestBlockNumber && +input <= latestBlockNumber && +input > 0) {
    result = input
    link = `/blocks/${input}`
    Item = <>Block {input}</>
  }
  if (transaction) {
    result = input
    link = `/transactions/${input}`
    Item = <>Transaction {input}</>
  }
  if (balance) {
    result = input
    Item = <Address address={input} />
  }

  return result ? [{ value: result, link, Item }] : []
}

export { useResult }
