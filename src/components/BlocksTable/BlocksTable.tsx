import { useContext, ReactNode } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Web3Context } from '../../api/Web3Provider'
import { BlockRow } from './BlockRow'
import { BlocksTableView } from './BlocksTableView'

function BlocksTable() {
  const web3 = useContext(Web3Context)
  const { data: latestBlockNumber } = useQuery(['latestBlockNumber'], () => web3.eth.getBlockNumber())

  if (!latestBlockNumber) return <>loading</>

  let blockNumbers = new Array(10).fill(0).map((_, i) => latestBlockNumber - i)
  let blockRows = blockNumbers.map(blockNumber => <BlockRow key={blockNumber} blockNumber={blockNumber}/>)

  return <BlocksTableView blockRows={blockRows}/>
}

export { BlocksTable }