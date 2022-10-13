import type { NextPage } from 'next'
import Head from 'next/head'
import { BlocksTable } from '../components/BlocksTable' 
import { Search } from '../components/Search'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ETH explorer</title>
      </Head>
      <Search/>
      <BlocksTable/>
    </>
  )
}

export default Home
