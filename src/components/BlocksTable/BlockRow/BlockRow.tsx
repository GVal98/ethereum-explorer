import { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Web3Context } from '../../../api/Web3Provider'
import { BlockRowView } from './BlockRowView'

interface BlockRowProps {
  blockNumber: number
}

function BlockRow(props: BlockRowProps) {
  const web3 = useContext(Web3Context)
  const { data } = useQuery(['block', props.blockNumber], () => web3.eth.getBlock(props.blockNumber))

  if (!data) return <tr><td>loading</td></tr>
  return (
    <BlockRowView
      blockNumber={data?.number}
      transactionCount={data?.transactions.length}
      dateTime={(new Date(+(data?.timestamp || 0) * 1000)).toLocaleString()}
    />
  )
}

export { BlockRow }
