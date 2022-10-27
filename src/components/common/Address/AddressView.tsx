import { Badge, Text } from '@mantine/core'

interface AddressViewProps {
  address: string,
  ethBalance: number | null
}

function AddressView(props: AddressViewProps) {
  return (
    <>
      <Text span mr="xs" sx={{ wordBreak: 'break-all' }}>{props.address}</Text>
      <Badge variant="outline">
        {props.ethBalance ? `${props.ethBalance} ETH` : 'Loading' }
      </Badge>
    </>
  )
}

export { AddressView }
