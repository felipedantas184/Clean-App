import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout/Layout.js'
import Store from '../components/Store/index.js'

export default function Loja() {
  return (
    <Layout>
      <Store />
    </Layout>
  )
}
