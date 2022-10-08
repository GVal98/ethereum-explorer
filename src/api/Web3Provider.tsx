import { createContext, ReactNode } from "react"
import Web3 from 'web3'

const Web3Context = createContext(new Web3("https://cloudflare-eth.com"))

interface Web3ProviderProps {
  web3Instance: Web3,
  children: ReactNode
}

function Web3Provider({ web3Instance, children } : Web3ProviderProps) {
  return (
    <Web3Context.Provider value={web3Instance}>
      {children}
    </Web3Context.Provider>
  )
}


export {Web3Context, Web3Provider}