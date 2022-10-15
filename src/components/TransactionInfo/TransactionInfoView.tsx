import Link from 'next/link'
import {
  Table, Button, Text, Title,
} from '@mantine/core'
import { ReactNode } from 'react'
import { Address } from '../common/Address'

interface TransactionInfoViewProps {
  transactionHash: string,
  blockNumber: number | null,
  sender: string,
  receiver: string | null,
  ethSent: number
}

const TdTitle = ({ children } : {children: ReactNode}) => <Text component="td" weight={700}>{children}</Text>

function TransactionInfoView(props: TransactionInfoViewProps) {
  return (
    <>
      <Title order={2} size="h4">Transaction {props.transactionHash}</Title>
      <Table verticalSpacing="md" horizontalSpacing="xs">
        <tbody>
          <tr>
            <TdTitle>Transaction hash</TdTitle>
            <td>{props.transactionHash}</td>
          </tr>
          <tr>
            <TdTitle>Block number</TdTitle>
            <td>
              <Link href={`/blocks/${props.blockNumber}`}>
                <Button compact variant="light">{props.blockNumber}</Button>
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
