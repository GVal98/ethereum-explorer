import { ReactNode } from 'react'
import { Text } from '@mantine/core'

function TdTitle({ children } : {children: ReactNode}) {
  return (
    <Text component="td" weight={700}>
      {children}
    </Text>
  )
}

export { TdTitle }
