import { GetStaticProps } from 'next'

import { stripe } from '../services/stripe'

import Head from 'next/head'

import { SubscribeButton } from '../components/SubscribeButton'

import styles from '../styles/home.module.scss'

interface HomeProps {
  product: {
    priceId: string,
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋 Olá, seja bem-vindo</span>
          <h1>Notícias sobre <br /> 
            o universo <span>Unifil</span>
          </h1>
          <p>
            Tenha acesso à todas as publicações<br />
            <span>por R{product.amount} mensais</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1K6TwiAYSKDisnRfGkGHZOjI', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }
  
  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 horas
  }
}