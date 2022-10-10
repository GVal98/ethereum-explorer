import { Table } from '@mantine/core'

interface BlockInfoViewProps {
  blockNumber: number,
  transactionsCount: number,
  dateTime: string,
  miner: string,
  bytesSize: number,
  gasUsed: number,
  gasLimit: number
}

function BlockInfoView(props: BlockInfoViewProps) {
  return (
    <Table>
      <tbody>
        <tr>
          <td>Block number</td>
          <td>{props.blockNumber}</td>
        </tr>
        <tr>
          <td>Transactions count</td>
          <td>{props.transactionsCount}</td>
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