import Head from 'next/head'
import styles from '../styles/Home.module.css'
import UnitForm from '../components/unitForm.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <UnitForm />
      </main>

      <footer>
      </footer>
    </div>
  )
}
