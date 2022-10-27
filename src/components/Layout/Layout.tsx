import { ReactNode } from 'react'
import { AppShell, Container } from '@mantine/core'
import { Search } from './Search'
import { Header } from './Header'

interface LayoutProps {
  children: ReactNode
}

function Layout(props: LayoutProps) {
  return (
    <AppShell
      padding="md"
      header={<Header />}
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      <Container size="xl">
        <Search />
        {props.children}
      </Container>
    </AppShell>
  )
}

export { Layout }
