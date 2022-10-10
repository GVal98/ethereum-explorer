import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { BlockInfo } from '../../components/BlockInfo'

const Home: NextPage = () => {
  const router = useRouter()
  const { number: blockNumber } = router.query

  if (!blockNumber) return <>404</>
  return (
    <div>
      <Head>
        <title>Block {blockNumber}</title>
      </Head>

      <main>
        <BlockInfo blockNumber={+blockNumber}/>
      </main>

    </div>
  )
}

export default Home