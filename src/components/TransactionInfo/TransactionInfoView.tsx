import Link from 'next/link'
import { Table, Button } from '@mantine/core'

interface TransactionInfoViewProps {
  transactionHash: string,
  blockNumber: number | null,
  sender: string,
  receiver: string | null,
  ethSent: number
}

function TransactionInfoView(props: TransactionInfoViewProps) {
  return (
    <Table>
      <tbody>
        <tr>
          <td>Transaction hash</td>
          <td>{props.transactionHash}</td>
        </tr>
        <tr>
          <td>Block number</td>
          <td>
            <Link href={`/blocks/${props.blockNumber}`}>
              <Button compact variant="light">{props.blockNumber}</Button>
            </Link>
          </td>
        </tr>
        <tr>
          <td>Sender</td>
          <td>{props.sender}</td>
        </tr>
        <tr>
          <td>Receiver</td>
          <td>{props.receiver}</td>
        </tr>
        <tr>
          <td>Value sent</td>
          <td>{props.ethSent} ETH</td>
        </tr>
      </tbody>
    </Table>
  )
}

export { TransactionInfoView }