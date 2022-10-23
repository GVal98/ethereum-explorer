import Link from 'next/link'
import { Table, Button, Title, Text } from '@mantine/core'
import { TdTitle } from '@common/TdTitle'
import { Address } from '@common/Address'

interface TransactionInfoViewProps {
  transactionHash: string,
  blockNumber: number | null,
  sender: string,
  receiver: string | null,
  ethSent: number
}

function TransactionInfoView(props: TransactionInfoViewProps) {
  return (
    <>
      <Title order={2} size="h4" sx={{ overflowWrap: 'anywhere' }}>
        Transaction {props.transactionHash}
      </Title>
      <Table verticalSpacing="md" horizontalSpacing="xs">
        <tbody>
          <tr>
            <TdTitle>Transaction hash</TdTitle>
            <td>
              <Text span sx={{ overflowWrap: 'anywhere' }}>{props.transactionHash}</Text>
            </td>
          </tr>
          <tr>
            <TdTitle>Block number</TdTitle>
            <td>
              <Link href={`/blocks/${props.blockNumber}`}>
                <a>
                  <Button compact variant="light">{props.blockNumber}</Button>
                </a>
              </Link>
            </td>
          </tr>
          <tr>
            <TdTitle>Sender</TdTitle>
            <td><Address address={props.sender} /></td>
          </tr>
          <tr>
            <TdTitle>Receiver</TdTitle>
            <td>{props.receiver && <Address address={props.receiver} />}</td>
          </tr>
          <tr>
            <TdTitle>Value sent</TdTitle>
            <td>{props.ethSent} ETH</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export { TransactionInfoView }
