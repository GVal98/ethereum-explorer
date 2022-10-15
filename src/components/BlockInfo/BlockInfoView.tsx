import { ReactNode, useState } from 'react'
import Link from 'next/link'
import {
  Button, Collapse, Table, List, Box, Title, Text,
} from '@mantine/core'
import { Address } from '../common/Address'

interface BlockInfoViewProps {
  blockNumber: number,
  transactions: string[],
  dateTime: string,
  miner: string,
  bytesSize: number,
  gasUsed: number,
  gasLimit: number
}

const TdTitle = ({ children } : {children: ReactNode}) => <Text component="td" weight={700}>{children}</Text>

function BlockInfoView(props: BlockInfoViewProps) {
  const [isTransactionsOpened, setIsTransactionsOpened] = useState(false)

  const transactionsList = props.transactions.map((transaction) => (
    <Link key={transaction} href={`/transactions/${transaction}`}>
      <Box>
        <Button compact variant="subtle">
          <List.Item>{transaction}</List.Item>
        </Button>
      </Box>
    </Link>
  ))

  return (
    <>
      <Title order={2} size="h4">Block {props.blockNumber}</Title>
      <Table verticalSpacing="md" horizontalSpacing="xs">
        <tbody>
          <tr>
            <TdTitle>Block number</TdTitle>
            <td>{props.blockNumber}</td>
          </tr>
          <tr>
            <TdTitle>Transactions</TdTitle>
            <td>
              {props.transactions.length} transactions
              {props.transactions.length > 0
                && <Button ml="xs" compact variant="light" onClick={() => setIsTransactionsOpened((o) => !o)}>{isTransactionsOpened ? 'Hide' : 'Show'}</Button>}
              <Collapse in={isTransactionsOpened}>
                <List>{transactionsList}</List>
              </Collapse>
            </td>
          </tr>
          <tr>
            <TdTitle>Block time</TdTitle>
            <td>{props.dateTime}</td>
          </tr>
          <tr>
            <TdTitle>Miner</TdTitle>
            <td><Address address={props.miner} /></td>
          </tr>
          <tr>
            <TdTitle>Size</TdTitle>
            <td>{props.bytesSize} bytes</td>
          </tr>
          <tr>
            <TdTitle>Gas used</TdTitle>
            <td>{props.gasUsed}</td>
          </tr>
          <tr>
            <TdTitle>Gas limit</TdTitle>
            <td>{props.gasLimit}</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export { BlockInfoView }
