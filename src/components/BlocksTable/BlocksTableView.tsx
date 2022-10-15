import { ReactNode } from 'react'
import { Table, Title } from '@mantine/core'

interface BlocksTableViewProps {
  blockRows: ReactNode[]
}

function BlocksTableView(props: BlocksTableViewProps) {
  return (
    <>
      <Title order={2} size="h4">Latest blocks</Title>
      <Table verticalSpacing="md" horizontalSpacing="xs" highlightOnHover>
        <thead>
          <tr>
            <th>Block number</th>
            <th>Transactions count</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>{props.blockRows}</tbody>
      </Table>
    </>
  )
}

export { BlocksTableView }
