import { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Web3Context } from '../../../api/Web3Provider'
import { AddressView } from './AddressView'

interface AddressProps {
  address: string
}

function Address(props: AddressProps) {
  const web3 = useContext(Web3Context)
  const { data: balance } = useQuery(
    ['address', props.address],
    () => web3.eth.getBalance(props.address)
  )
  
  return (
    <AddressView 
      address={props.address}
      ethBalance={balance ? +balance / 10e17 : null}
    />
  )
}

export { Address }