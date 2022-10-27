import Link from 'next/link'
import { Anchor, SelectItemProps } from '@mantine/core'
import { ReactNode } from 'react'

interface ResultProps extends SelectItemProps {
  link?: string
  Item: ReactNode
}

interface WrapperProps {
  link?: string
  children: ReactNode
}

const Wrapper = (props: WrapperProps) => {
  if (!props.link) return <>{props.children}</>
  return (
    <Link href={props.link} passHref>
      <Anchor variant="text">
        {props.children}
      </Anchor>
    </Link>
  )
}

function Result({ link, Item, ...others } : ResultProps) {
  return (
    <Wrapper link={link}>
      <div role="button" tabIndex={0} {...others} onMouseDown={() => {}}>
        {Item}
      </div>
    </Wrapper>
  )
}

export { Result }
