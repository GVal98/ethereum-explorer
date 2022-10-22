import { Skeleton } from '@mantine/core'
import { formatTime } from 'utils/formatTime'
import { useBlock } from 'web3/hooks'
import { BlockRowView } from './BlockRowView'

interface BlockRowProps {
  blockNumber: number
}

function BlockRow(props: BlockRowProps) {
  const { data } = useBlock(props.blockNumber)

  if (!data) {
    return (
      <BlockRowView
        blockNumber={props.blockNumber}
        transactionCount={<Skeleton height={8} width={25} />}
        dateTime={<Skeleton height={8} width={130} />}
      />
    )
  }

  return (
    <BlockRowView
      blockNumber={data?.number}
      transactionCount={data?.transactions.length}
      dateTime={formatTime(data?.timestamp)}
    />
  )
}

export { BlockRow }
