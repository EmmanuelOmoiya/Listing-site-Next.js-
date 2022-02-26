import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rem quos ex iure, possimus rerum enim? Aliquid commodi suscipit ratione ipsa quae explicabo officia ullam laborum? Cum nisi rem dolorum.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolores cumque quo dolore, enim aut at eligendi amet. Ducimus laboriosam officia nisi accusantium facilis obcaecati eligendi labore molestias. Alias, similique!</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
