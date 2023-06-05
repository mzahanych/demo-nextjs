import SubMenu from '@/components/SubMenu'
import styles from './indywidualny.module.scss'
import Link from 'next/link'
import Banner from '../../../public/banner-1.svg'
import Image from 'next/image'

const submenu = [
  { id: 11, url: '/indywidualny/konta/', label: 'konta' },
  { id: 12, url: '/indywidualny/kredyty/', label: 'kredyty' },
  { id: 13, url: '/indywidualny/karty/', label: 'karty' },
  {
    id: 14,
    url: '/indywidualny/inwestycje-i-oszczednosci/chce-zaczac-inwestowac/',
    label: 'Inwestycje i oszczędności',
  },
  { id: 15, url: '/indywidualny/ubezpieczenia/', label: 'Ubezpieczenia' },
  { id: 16, url: '/indywidualny/uslugi/', label: 'Usługi i e-Urząd' },
  {
    id: 17,
    url: '/indywidualny/aplikacja-i-serwis/',
    label: 'Aplikacja i serwis',
  },
  { id: 18, url: '/indywidualny/dla-klienta/', label: 'Dla klienta' },
  { id: 19, url: '/bezpieczenstwo/', label: 'bezpieczeństwo' },
]

export default function Indywidualny() {
  return (
    <div className="pageWrapper">
      <div className="container">
        <SubMenu menu={submenu} />
      </div>

      <section className={styles.mainBanner}>
        <div className={styles.mainBannerContent}>
          <div className={styles.row}>
            <div className={styles.textBox}>
              <ul className={styles.text}>
                <li>
                  <p>&nbsp;</p>
                  <p>
                    <strong>
                      <span style={{ fontSize: 40 }}>
                        Otwórz konto, zgarnij <br /> do 450 zł
                      </span>
                    </strong>
                  </p>
                  <p>
                    <span style={{ fontSize: 22 }}>
                      {' '}
                      i oszczędzaj nawet na <strong>8%</strong>!
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span style={{ fontSize: 25 }}>
                      <strong>Do konta mamy dla Ciebie jeszcze</strong>:
                    </span>
                  </p>
                  <ul>
                    <li>
                      <span style={{ fontSize: 20 }}>
                        <strong>pakiet wakacyjnych korzyści</strong>, który
                        opłaci Ci się podczas podróży
                      </span>
                    </li>
                    <li>
                      <span style={{ fontSize: 20 }}>
                        <strong>premię</strong>
                        za polecenie konta znajomym
                      </span>
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>
                    <Link href="#" className={styles.buttonRed}>
                      załóż konto przez aplikację
                    </Link>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <Link
                      href="/indywidualny/konta/konta-osobiste/ekonto-osobiste/?kampania=HPnowynk"
                      className={styles.link}
                    >
                      PRZECZYTAJ WIĘCEJ
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.imageBox}>
              <Image
                src={Banner}
                width={150}
                height={150}
                alt="Retail card zero"
              />
            </div>
            <div className={styles.legalNote} role="note">
              <p className={styles.legalNoteLabel}>nota prawna</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
