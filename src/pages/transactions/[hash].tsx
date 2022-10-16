import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { TransactionInfo } from '@components/TransactionInfo'

const TransactionPage: NextPage = () => {
  const router = useRouter()
  const { hash: transactionHash } = router.query

  if (!transactionHash) return <></>
  return (
    <>
      <Head>
        <title>Transaction {transactionHash}</title>
      </Head>
      <TransactionInfo transactionHash={transactionHash.toString()} />
    </>
  )
}

export default TransactionPage
