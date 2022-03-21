// import { ThemeStore } from 'context/theme'
import dynamic from 'next/dynamic'
import { Layout } from 'layout/AppLayout'
import 'styles/globals.css'
import 'styles/navBar.css'
import 'styles/profile.css'
import "components/Iphone/iphone.css"
import { SWRConfig } from 'swr'
import { ApolloStore, client, querys } from 'apollo'

const ThemeStore = dynamic(() => import('context/theme').then(({ ThemeStore }) => ThemeStore), { ssr: false })
// const Layout = dynamic(() => import('layout/AppLayout').then(({ Layout }) => Layout))

function MyApp({ Component, pageProps, dataUser }) {
  return <>
    <ApolloStore>
      <SWRConfig >
        <ThemeStore>
          <Layout {...{ dataUser }}>
            <Component {...pageProps} />
          </Layout >
        </ThemeStore>
      </SWRConfig>
    </ApolloStore>
  </>
}
MyApp.getInitialProps = async ctx => {
 
  const dataUser = (await client.query({ query: querys.USER_PROFILE })).data.user
  return { dataUser }
}

export default MyApp
