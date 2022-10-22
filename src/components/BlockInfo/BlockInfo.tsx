import { Loader } from '@common/Loader'
import { formatTime } from 'utils/formatTime'
import { useBlock } from 'web3/hooks'
import { BlockInfoView } from './BlockInfoView'

interface BlockInfoProps {
  blockNumber: number
}

function BlockInfo(props: BlockInfoProps) {
  const { data } = useBlock(props.blockNumber)

  if (!data) return <Loader />
  return (
    <BlockInfoView
      blockNumber={props.blockNumber}
      transactions={data?.transactions}
      dateTime={formatTime(data?.timestamp)}
      miner={data.miner}
      bytesSize={data.size}
      gasUsed={data.gasUsed}
      gasLimit={data.gasLimit}
    />
  )
}

export { BlockInfo }
