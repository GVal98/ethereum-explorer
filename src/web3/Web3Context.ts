import { createContext } from 'react'
import Web3 from 'web3'

const web3NodeAddress = process.env.NEXT_PUBLIC_WEB3_NODE_ADDRESS as string
const Web3Context = createContext(new Web3(web3NodeAddress))

export { Web3Context }
