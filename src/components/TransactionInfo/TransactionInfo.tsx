import { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Loader } from '@common/Loader'
import { ConvertWei } from 'utils/convertWei'
import { Web3Context } from '../../api/Web3Provider'
import { TransactionInfoView } from './TransactionInfoView'

interface TransactionInfoProps {
  transactionHash: string
}

function TransactionInfo(props: TransactionInfoProps) {
  const web3 = useContext(Web3Context)
  const { data } = useQuery(
    ['transaction', props.transactionHash],
    () => web3.eth.getTransaction(props.transactionHash),
  )

  if (!data) return <Loader />
  return (
    <TransactionInfoView
      transactionHash={props.transactionHash}
      blockNumber={data.blockNumber}
      sender={data.from}
      receiver={data.to}
      ethSent={ConvertWei(data.value)}
    />
  )
}

export { TransactionInfo }
