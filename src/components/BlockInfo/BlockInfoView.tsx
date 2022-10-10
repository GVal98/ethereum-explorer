import { useState } from 'react'
import { Button, Collapse, Table, List } from '@mantine/core'

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

  let transactionsList = props.transactions.map(transaction => 
      <List.Item key={transaction}>{transaction}</List.Item>
  )

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
            <Button ml={'xs'} compact variant="subtle" onClick={() => setIsTransactionsOpened(o => !o)}>Show</Button>
            <Collapse in={isTransactionsOpened}>
              {transactionsList}
            </Collapse>
          </td>
        </tr>
        <tr>
          <td>Block time</td>
          <td>{props.dateTime}</td>
        </tr>
        <tr>
          <td>Miner</td>
          <td>{props.miner}</td>
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