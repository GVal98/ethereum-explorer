import Link from 'next/link'
import style from './BlockRow.module.css'

interface BlockRowViewProps {
  blockNumber: number,
  transactionCount: number,
  dateTime: string
}

function BlockRowView(props: BlockRowViewProps) {
  return (
    <Link href={`/blocks/${props.blockNumber}`}>
      <tr className={style.row}>
        <td>{props.blockNumber}</td>
        <td>{props.transactionCount}</td>
        <td>{props.dateTime}</td>
      </tr>
    </Link>
  )
}

export { BlockRowView }
