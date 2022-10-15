import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { TransactionInfo } from '../../components/TransactionInfo'

const TransactionPage: NextPage = () => {
  const router = useRouter()
  const { hash: transactionHash } = router.query

  if (!transactionHash) return <></>
  return (
    <div>
      <Head>
        <title>Transaction {transactionHash}</title>
      </Head>

      <main>
        <TransactionInfo transactionHash={transactionHash.toString()} />
      </main>

    </div>
  )
}

export default TransactionPage
