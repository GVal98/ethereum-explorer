import type { NextPage } from 'next'
import Head from 'next/head'
import { BlocksTable } from '@components/BlocksTable'

const Home: NextPage = () => (
  <>
    <Head>
      <title>ETH Explorer</title>
    </Head>
    <BlocksTable />
  </>
)

export default Home
