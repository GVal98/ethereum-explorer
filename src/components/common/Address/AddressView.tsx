import { Badge } from '@mantine/core'

interface AddressViewProps {
  address: string,
  ethBalance: number | null
}

function AddressView(props: AddressViewProps) {
  return (
    <>
      {props.address}
      <Badge ml="xs" variant="outline">
        {props.ethBalance ? `${props.ethBalance} ETH` : 'Loading' }
      </Badge>

    </>
  )
}

export { AddressView }
