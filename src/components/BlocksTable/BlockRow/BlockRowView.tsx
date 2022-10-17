import { Anchor } from '@mantine/core'
import Link from 'next/link'
import { ReactNode } from 'react'
import style from './BlockRow.module.css'

interface BlockRowViewProps {
  blockNumber: number | ReactNode,
  transactionCount: number | ReactNode,
  dateTime: string | ReactNode
}

function BlockRowView(props: BlockRowViewProps) {
  const path = `/blocks/${props.blockNumber}`
  return (
    <Link href={path}>
      <tr className={style.row}>
        <td>
          <Link href={path} passHref>
            <Anchor variant="text">{props.blockNumber}</Anchor>
          </Link>
        </td>
        <td>{props.transactionCount}</td>
        <td>{props.dateTime}</td>
      </tr>
    </Link>
  )
}

export { BlockRowView }
