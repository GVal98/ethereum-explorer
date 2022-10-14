interface AddressViewProps {
  address: string,
  ethBalance: number | null
}

function AddressView(props: AddressViewProps) {
  if (props.ethBalance !== null) return <>{props.address} : {props.ethBalance} ETH</>
  return <>{props.address}</>
}

export { AddressView }
