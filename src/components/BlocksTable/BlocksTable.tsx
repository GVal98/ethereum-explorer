import { useContext, ReactNode, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Web3Context } from '../../api/Web3Provider'
import { BlockRow } from './BlockRow'
import { BlocksTableView } from './BlocksTableView'
import { Button } from '@mantine/core'

const defaultBlocksCount = 10

function BlocksTable() {
  const [blocksCount, setBlocksCount] = useState(defaultBlocksCount)

  const web3 = useContext(Web3Context)
  const { data: latestBlockNumber } = useQuery(['latestBlockNumber'], () => web3.eth.getBlockNumber())

  if (!latestBlockNumber) return <>loading</>

  let blockNumbers = new Array(blocksCount).fill(0).map((_, i) => latestBlockNumber - i)
  let blockRows = blockNumbers.map(blockNumber => <BlockRow key={blockNumber} blockNumber={blockNumber}/>)

  return (
    <>
      <BlocksTableView blockRows={blockRows}/>
      <Button onClick={() => (setBlocksCount(blocksCount + defaultBlocksCount))}>Load more</Button>
    </>
  )
}

export { BlocksTable }