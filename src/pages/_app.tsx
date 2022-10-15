import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { DehydratedState } from '@tanstack/react-query'
import Web3 from 'web3'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { Web3Provider } from '../api/Web3Provider'
import { Layout } from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  const [queryClient] = useState(() => new QueryClient())
  const [web3] = useState(() => new Web3('https://cloudflare-eth.com'))

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
