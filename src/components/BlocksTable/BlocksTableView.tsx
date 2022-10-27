import { ReactNode } from 'react'
import { Table } from '@mantine/core'
import { PageTitle } from '@common/PageTitle'

interface BlocksTableViewProps {
  blockRows: ReactNode[]
}

function BlocksTableView(props: BlocksTableViewProps) {
  return (
    <>
      <PageTitle>Latest blocks</PageTitle>
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
