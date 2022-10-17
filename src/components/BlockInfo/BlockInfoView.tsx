import { useState } from 'react'
import Link from 'next/link'
import { Button, Collapse, Table, List, Box, Title } from '@mantine/core'
import { TdTitle } from '@common/TdTitle'
import { Address } from '@common/Address'

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

  const toggleTransactionsButton = (
    <Button
      compact
      variant="light"
      ml="xs"
      onClick={() => setIsTransactionsOpened((isOpened) => !isOpened)}
    >
      {isTransactionsOpened ? 'Hide' : 'Show'}
    </Button>
  )

  const transactionsList = props.transactions.map((transaction) => (
    <Link key={transaction} href={`/transactions/${transaction}`} passHref>
      <a>
        <Box>
          <Button compact variant="subtle">
            <List.Item>{transaction}</List.Item>
          </Button>
        </Box>
      </a>

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
              {props.transactions.length > 0 && toggleTransactionsButton}
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
