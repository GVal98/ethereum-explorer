import Link from 'next/link'
import { ReactNode } from 'react'
import style from './BlockRow.module.css'

interface BlockRowViewProps {
  blockNumber: number | ReactNode,
  transactionCount: number | ReactNode,
  dateTime: string | ReactNode
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
