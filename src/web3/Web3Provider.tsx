import { ReactNode } from 'react'
import Web3 from 'web3'
import { Web3Context } from './Web3Context'

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

export { Web3Provider }
