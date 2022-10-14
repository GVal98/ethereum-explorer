import { ReactNode } from 'react'
import { Table } from '@mantine/core'

interface BlocksTableViewProps {
  blockRows: ReactNode[]
}

function BlocksTableView(props: BlocksTableViewProps) {
  return (
    <Table highlightOnHover>
      <thead>
        <tr>
          <th>Block number</th>
          <th>Transactions count</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>{props.blockRows}</tbody>
    </Table>
  )
}

export { BlocksTableView }
