import Link from 'next/link'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.buttonConainer}>
        <Link href="/indywidualny" className={styles.button}>
          Indywidualny
        </Link>
        <Link href="/private-banking" className={styles.button}>
          private-banking
        </Link>
      </div>
    </main>
  )
}
