import Link from 'next/link'
import styles from './MenuActions.module.scss'
import Image from 'next/image'
import SearchIcon from '../../../../public/search-2.svg'

interface MenuActionsProps {
  isPrivateBanking: boolean
}

export default function MenuActions({ isPrivateBanking }: MenuActionsProps) {
  return (
    <ul className={styles.actions}>
      <li>
        <Link href="#" aria-label="Ukraina" data-txt="Ukraina" id={styles.ua}>
          <div className={styles.uaFlag} />
        </Link>
      </li>
      <li>
        <div id={styles.searchengine}>
          <Image src={SearchIcon} width={30} height={25} alt="Search icon" />
        </div>
      </li>
      <li>
        <Link
          href="#"
          aria-label="Kontakt"
          data-txt="Kontakt"
          id={styles.contact}
        >
          &nbsp;
        </Link>
      </li>
      <li>
        <Link
          href="#"
          aria-label="Placówki, bankomaty i wpłatomaty"
          data-txt="Placówki, bankomaty i wpłatomaty"
          id={styles.agencies}
        >
          &nbsp;
        </Link>
      </li>
      <li>
        <Link href="#" className={`buttonRed ${styles.hideOnMobile}`}>
          {isPrivateBanking ? 'Zamów rozmowę' : 'Załóż konto osobiste'}
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className={styles.login}
          aria-label="Logowanie - oferta indywidualna"
        >
          Zaloguj
        </Link>
      </li>
    </ul>
  )
}
