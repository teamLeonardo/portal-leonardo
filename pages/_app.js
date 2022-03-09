// import { ThemeStore } from 'context/theme'
import dynamic from 'next/dynamic'
import { Layout } from 'layout/AppLayout'
import 'styles/globals.css'
import 'styles/navBar.css'
import 'styles/profile.css'
import "components/Iphone/iphone.css"
import { SWRConfig } from 'swr'

const ThemeStore = dynamic(() => import('context/theme').then(({ ThemeStore }) => ThemeStore), { ssr: false })
// const Layout = dynamic(() => import('layout/AppLayout').then(({ Layout }) => Layout))

function MyApp({ Component, pageProps }) {
  return <>
    <SWRConfig >
      <ThemeStore>
        <Layout>
          <Component {...pageProps} />
        </Layout >
      </ThemeStore>
    </SWRConfig>
  </>
}

export default MyApp
