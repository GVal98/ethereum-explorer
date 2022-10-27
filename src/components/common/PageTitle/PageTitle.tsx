import { ReactNode } from 'react'
import { Title } from '@mantine/core'

function PageTitle({ children } : {children: ReactNode}) {
  return (
    <Title order={2} size="h4" sx={{ overflowWrap: 'anywhere' }}>
      {children}
    </Title>
  )
}

export { PageTitle }
