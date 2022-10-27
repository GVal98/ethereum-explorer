import { Divider } from '@mantine/core'
import { Loader } from '@common/Loader'
import { useLatestBlockNumber } from 'web3/hooks'
import { BlockRow } from './BlockRow'
import { BlocksTableView } from './BlocksTableView'
import { useInfiniteScroll } from './hooks'

function BlocksTable() {
  const { blocksCount, targetRef, containerRef } = useInfiniteScroll(15)
  const { data: latestBlockNumber } = useLatestBlockNumber()

  if (!latestBlockNumber) return <Loader />

  const blockNumbers = new Array(blocksCount).fill(0).map((_, i) => latestBlockNumber - i)
  const blockRows = blockNumbers.map((blockNumber) => (
    <BlockRow key={blockNumber} blockNumber={blockNumber} />
  ))

  return (
    <div ref={containerRef}>
      <BlocksTableView blockRows={blockRows} />
      <Divider ref={targetRef} />
    </div>
  )
}

export { BlocksTable }
