import { ConvertWei } from 'utils/convertWei'
import { useBalance } from 'web3/hooks'
import { AddressView } from './AddressView'

interface AddressProps {
  address: string
}

function Address(props: AddressProps) {
  const { data: balance } = useBalance(props.address)

  return (
    <AddressView
      address={props.address}
      ethBalance={balance ? ConvertWei(balance) : null}
    />
  )
}

export { Address }
