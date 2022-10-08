import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { DehydratedState } from '@tanstack/react-query'
import Web3 from 'web3'
import { Web3Provider } from '../api/Web3Provider'
import { MantineProvider } from '@mantine/core'

function MyApp({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) {
  const [queryClient] = useState(() => new QueryClient())
  const [web3] = useState(() => new Web3("https://cloudflare-eth.com"))

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Web3Provider web3Instance={web3}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </Web3Provider>
    </MantineProvider>
  )
}

export default MyApp
