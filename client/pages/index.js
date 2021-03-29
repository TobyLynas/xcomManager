import Head from 'next/head'
import styles from '../styles/Home.module.css'
import UnitForm from '../components/unitForm.js'
import UnitDisplay from '../components/unitDisplay.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img className={styles.backImg} src='insigGlobe.png'/>
        <UnitForm className={styles.index}/>
        <UnitDisplay className={styles.index}/>
      </main>

      <footer>
      </footer>
    </div>
  )
}
