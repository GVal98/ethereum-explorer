import {
  useContext, useState, useRef, useEffect,
} from 'react'
import { useQuery } from '@tanstack/react-query'
import {
  Center, Divider, Loader,
} from '@mantine/core'
import { useIntersection } from '@mantine/hooks'
import { Web3Context } from '../../api/Web3Provider'
import { BlockRow } from './BlockRow'
import { BlocksTableView } from './BlocksTableView'

const defaultBlocksCount = 15

function BlocksTable() {
  const [blocksCount, setBlocksCount] = useState(defaultBlocksCount)

  const web3 = useContext(Web3Context)
  const { data: latestBlockNumber } = useQuery(['latestBlockNumber'], () => web3.eth.getBlockNumber())

  const containerRef = useRef()
  const { ref, entry } = useIntersection({
    root: containerRef.current,
  })

  useEffect(() => {
    if (entry?.isIntersecting) setBlocksCount(blocksCount + defaultBlocksCount)
  }, [entry?.isIntersecting, blocksCount])

  if (!latestBlockNumber) return <Center><Loader /></Center>

  const blockNumbers = new Array(blocksCount).fill(0).map((_, i) => latestBlockNumber - i)
  const blockRows = blockNumbers.map((blockNumber) => (
    <BlockRow key={blockNumber} blockNumber={blockNumber} />
  ))

  return (
    <div ref={containerRef.current}>
      <BlocksTableView blockRows={blockRows} />
      <Divider ref={ref} />
    </div>
  )
}

export { BlocksTable }
