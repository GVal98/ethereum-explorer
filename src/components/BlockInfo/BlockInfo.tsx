import { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Loader } from '@common/Loader'
import { formatTime } from 'utils/formatTime'
import { Web3Context } from '../../api/Web3Provider'
import { BlockInfoView } from './BlockInfoView'

interface BlockInfoProps {
  blockNumber: number
}

function BlockInfo(props: BlockInfoProps) {
  const web3 = useContext(Web3Context)
  const { data } = useQuery(
    ['block', props.blockNumber],
    () => web3.eth.getBlock(props.blockNumber),
  )

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
