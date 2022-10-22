import { useState, useRef, useEffect } from 'react'
import { Divider } from '@mantine/core'
import { useIntersection } from '@mantine/hooks'
import { Loader } from '@common/Loader'
import { useLatestBlockNumber } from 'web3/hooks'
import { BlockRow } from './BlockRow'
import { BlocksTableView } from './BlocksTableView'

const defaultBlocksCount = 15

function BlocksTable() {
  const [blocksCount, setBlocksCount] = useState(defaultBlocksCount)

  const { data: latestBlockNumber } = useLatestBlockNumber()

  const containerRef = useRef()
  const { ref, entry } = useIntersection({
    root: containerRef.current,
  })

  useEffect(() => {
    if (entry?.isIntersecting) setBlocksCount(blocksCount + defaultBlocksCount)
  }, [entry?.isIntersecting, blocksCount])

  if (!latestBlockNumber) return <Loader />

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
