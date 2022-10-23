import { Address } from '@common/Address'
import { useBalance, useLatestBlockNumber, useTransaction } from 'web3/hooks'

function useSuggestion(input: string) {
  const { data: latestBlockNumber } = useLatestBlockNumber()
  const { data: transaction } = useTransaction(input, input.length === 66)
  const { data: balance } = useBalance(input, input.length === 42)

  let suggestion = ''
  let link = ''
  let Item = <></>

  if (latestBlockNumber && +input <= latestBlockNumber && +input > 0) {
    suggestion = input
    link = `/blocks/${input}`
    Item = <>Block {input}</>
  }
  if (transaction) {
    suggestion = input
    link = `/transactions/${input}`
    Item = <>Transaction {input}</>
  }
  if (balance) {
    suggestion = input
    Item = <Address address={input} />
  }

  return suggestion ? [{ value: suggestion, link, Item }] : []
}

export { useSuggestion }
