import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { DehydratedState } from '@tanstack/react-query'
import Web3 from 'web3'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { Layout } from 'components/Layout'
import { Web3Provider } from 'web3/Web3Provider'

const web3NodeAddress = process.env.NEXT_PUBLIC_WEB3_NODE_ADDRESS as string

function MyApp({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  const [queryClient] = useState(() => new QueryClient())
  const [web3] = useState(() => new Web3(web3NodeAddress))

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme, loader: 'dots' }}>
        <Web3Provider web3Instance={web3}>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Hydrate>
          </QueryClientProvider>
        </Web3Provider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default MyApp
