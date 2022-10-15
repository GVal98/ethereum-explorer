import { ReactNode } from 'react'
import {
  AppShell, Header, Group, ActionIcon, useMantineColorScheme, Title, Container,
} from '@mantine/core'
import Link from 'next/link'
import styles from './Layout.module.css'
import { Search } from './Search'

interface LayoutProps {
  children: ReactNode
}
// todo: replace linkstyle with adding inside link
function Layout(props: LayoutProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <AppShell
      padding="md"
      header={(
        <Header height={60}>
          <Group sx={{ height: '100%' }} px={20} position="apart">
            <Link href="/">
              <Title className={styles.link} order={1} size="h3">ETH Explorer</Title>
            </Link>
            <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
              {colorScheme === 'dark' ? '☀️' : '🌚' }
            </ActionIcon>
          </Group>
        </Header>
      )}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
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
