import { Badge } from '@mantine/core'

interface AddressViewProps {
  address: string,
  ethBalance: number | null
}

function AddressView(props: AddressViewProps) {
  if (props.ethBalance !== null) return <>{props.address}<Badge ml="xs" variant="outline">{props.ethBalance} ETH</Badge></>
  return <>{props.address}<Badge ml="xs" variant="outline">Loading</Badge></>
}

export { AddressView }
