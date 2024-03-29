import 'raf/polyfill'
import '../styles.css'

const fixReanimatedIssue = () => {
  // FIXME remove this once this reanimated fix gets released
  // https://github.com/software-mansion/react-native-reanimated/issues/3355
  if (process.browser) {
    // @ts-ignore
    window._frameTimestamp = null
  }
}

fixReanimatedIssue()

import { Provider as ComponentsProvider } from '@deriv-air/components/provider'
import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Deriv Air</title>
        <meta name="description" content="Deriv Air" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ComponentsProvider>
        <Component {...pageProps} />
      </ComponentsProvider>
    </>
  )
}

export default MyApp
