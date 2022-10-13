import type { NextPage } from 'next'
import Head from 'next/head'
import { BlocksTable } from '../components/BlocksTable' 

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ETH explorer</title>
      </Head>
      <BlocksTable/>
    </>
  )
}

export default Home
