import '../styles/globals.css'
import 'simply-ui/dist/css/simply.min.css'
import Layout from './components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
