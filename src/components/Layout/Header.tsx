import {
  Header as MantineHeader,
  Group,
  ActionIcon,
  useMantineColorScheme,
  Title,
  Anchor,
} from '@mantine/core'
import Link from 'next/link'

function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <MantineHeader height={60}>
      <Group sx={{ height: '100%' }} px={20} position="apart">
        <Link href="/" passHref>
          <Anchor variant="text">
            <Title order={1} size="h3">ETH Explorer</Title>
          </Anchor>
        </Link>
        <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
          {colorScheme === 'dark' ? '☀️' : '🌚' }
        </ActionIcon>
      </Group>
    </MantineHeader>
  )
}

export { Header }
