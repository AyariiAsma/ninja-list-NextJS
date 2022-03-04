import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
     <h1 className={styles.title}>Home page</h1>
     <p className={styles.text}>Si nous partons de la définition de la nature dans le dictionnaire nous trouvons que cest lensemble des éléments dans le monde physique qui ne sont pas transformés par lêtre humain. Alors elle a une beauté originale qui nest pas salie par lhomme.</p>
     <p className={styles.text}>Si nous partons de la définition de la nature dans le dictionnaire nous trouvons que cest lensemble des éléments dans le monde physique qui ne sont pas transformés par lêtre humain. Alors elle a une beauté originale qui nest pas salie par lhomme.</p>
      <Link href="/ninjas">
       <a className={styles.btn}> See ninja listing</a>
      </Link>
    </div>
    </>
  )
}
