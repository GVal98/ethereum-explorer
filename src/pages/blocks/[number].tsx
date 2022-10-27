import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { BlockInfo } from 'components/BlockInfo'

const BlockPage: NextPage = () => {
  const router = useRouter()
  const { number: blockNumber } = router.query

  if (!blockNumber) return <></>
  return (
    <>
      <Head>
        <title>Block {blockNumber}</title>
      </Head>
      <BlockInfo blockNumber={+blockNumber} />
    </>
  )
}

export default BlockPage
