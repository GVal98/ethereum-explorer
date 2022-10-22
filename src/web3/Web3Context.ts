import { createContext } from 'react'
import Web3 from 'web3'

const Web3Context = createContext(new Web3('https://cloudflare-eth.com'))

export { Web3Context }
