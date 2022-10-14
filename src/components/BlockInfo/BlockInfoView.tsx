import { useState } from 'react'
import Link from 'next/link'
import {
  Button, Collapse, Table, List, Box,
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
    <Table>
      <tbody>
        <tr>
          <td>Block number</td>
          <td>{props.blockNumber}</td>
        </tr>
        <tr>
          <td>Transactions</td>
          <td>
            {props.transactions.length} transactions
            <Button ml="xs" compact variant="light" onClick={() => setIsTransactionsOpened((o) => !o)}>Show</Button>
            <Collapse in={isTransactionsOpened}>
              <List>{transactionsList}</List>
            </Collapse>
          </td>
        </tr>
        <tr>
          <td>Block time</td>
          <td>{props.dateTime}</td>
        </tr>
        <tr>
          <td>Miner</td>
          <td><Address address={props.miner} /></td>
        </tr>
        <tr>
          <td>Size</td>
          <td>{props.bytesSize} bytes</td>
        </tr>
        <tr>
          <td>Gas used</td>
          <td>{props.gasUsed}</td>
        </tr>
        <tr>
          <td>Gas limit</td>
          <td>{props.gasLimit}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export { BlockInfoView }
