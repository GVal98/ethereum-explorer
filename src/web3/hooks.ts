import { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Web3Context } from 'web3/Web3Context'

function useLatestBlockNumber() {
  const web3 = useContext(Web3Context)
  return useQuery(
    ['latestBlockNumber'],
    () => web3.eth.getBlockNumber(),
  )
}

function useBlock(blockNumber: number) {
  const web3 = useContext(Web3Context)
  return useQuery(
    ['block', blockNumber],
    () => web3.eth.getBlock(blockNumber),
  )
}

function useBalance(address: string, enabled?: boolean) {
  const web3 = useContext(Web3Context)
  return useQuery(
    ['address', address],
    () => web3.eth.getBalance(address),
    { enabled },
  )
}

function useTransaction(transactionHash: string, enabled?: boolean) {
  const web3 = useContext(Web3Context)
  return useQuery(
    ['transaction', transactionHash],
    () => web3.eth.getTransaction(transactionHash),
    { enabled },
  )
}

export { useLatestBlockNumber, useBlock, useBalance, useTransaction }
