interface BlockRowViewProps {
  blockNumber: number,
  transactionCount: number,
  dateTime: string
}

function BlockRowView(props: BlockRowViewProps) {
  return (
    <tr>
      <td>{props.blockNumber}</td>
      <td>{props.transactionCount}</td>
      <td>{props.dateTime}</td>
    </tr>
  )
}

export { BlockRowView }