/* eslint-disable react/display-name */
import { forwardRef, useContext, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Anchor, Autocomplete, SelectItemProps } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Address } from '../../common/Address'
import { Web3Context } from '../../../api/Web3Provider'

const ResultBlock = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ value, ...others } : SelectItemProps, ref) => (
    <Link href={`/blocks/${value}`} passHref>
      <Anchor variant="text">
        <div role="button" tabIndex={0} ref={ref} {...others} onMouseDown={() => {}}>
          Block {value}
        </div>
      </Anchor>
    </Link>
  ),
)
// to-do вынести в отдельный компонент или нет и может реф вообще убрать и
// резалт поменять в названии местами
// где-то там ещё передавать не эелементы а только нужные номера но это хз
const ResultTransaction = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ value, ...others } : SelectItemProps, ref) => (
    <Link href={`/transactions/${value}`} passHref>
      <Anchor variant="text">
        <div role="button" tabIndex={0} ref={ref} {...others} onMouseDown={() => {}}>
          Transaction {value}
        </div>
      </Anchor>
    </Link>
  ),
)

const ResultAddress = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ value, ...others } : SelectItemProps, ref) => (
    <div role="button" tabIndex={0} ref={ref} {...others} onMouseDown={() => {}}>
      {value && <Address address={value} />}
    </div>
  ),
)

function Search() {
  const router = useRouter()
  const [value, setValue] = useState('')

  const web3 = useContext(Web3Context)
  const { data: latestBlockNumber } = useQuery(
    ['latestBlockNumber'],
    () => web3.eth.getBlockNumber(),
  )
  const { data: transaction } = useQuery(
    ['transaction', value],
    () => web3.eth.getTransaction(value),
    { enabled: value.length === 66 },
  )
  const { data: balance } = useQuery(
    ['address', value],
    () => web3.eth.getBalance(value),
    { enabled: value.length === 42 },
  )

  const suggestions: any[] = []
  let ResultItem

  if (latestBlockNumber && +value <= latestBlockNumber && +value > 0) {
    suggestions.push(value)
    ResultItem = ResultBlock
  }
  if (transaction) {
    suggestions.push(value)
    ResultItem = ResultTransaction
  }
  if (balance) {
    suggestions.push(value)
    ResultItem = ResultAddress
  }

  return (
    <Autocomplete
      key={router.asPath}
      value={value}
      onChange={setValue}
      label="Search"
      placeholder="Block number, transaction hash or address"
      data={suggestions}
      itemComponent={ResultItem}
      mb="xl"
    />
  )
}

export { Search }
