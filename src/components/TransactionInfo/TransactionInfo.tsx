import { Loader } from '@common/Loader'
import { ConvertWei } from 'utils/convertWei'
import { useTransaction } from 'web3/hooks'
import { TransactionInfoView } from './TransactionInfoView'

interface TransactionInfoProps {
  transactionHash: string
}

function TransactionInfo(props: TransactionInfoProps) {
  const { data } = useTransaction(props.transactionHash)

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
