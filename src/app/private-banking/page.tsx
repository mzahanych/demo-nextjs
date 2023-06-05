import SubMenu from '@/components/SubMenu'
import styles from './page.module.scss'
import img from '../../../public/pb_personal_account.svg'
import Image from 'next/image'
import GridItem from '@/components/GridItem'

const submenu = [
  {
    id: 111,
    url: '/private-banking/bankowosc-codzienna/',
    label: 'bankowość<br/>codzienna',
  },
  {
    id: 122,
    url: '/private-banking/zarzadzanie-majatkiem/',
    label: 'zarządzanie<br/>majątkiem',
  },
  {
    id: 133,
    url: '/private-banking/planowanie-majatku-i-sukcesji/',
    label: 'Planowanie majątku<br/>i sukcesji',
  },
  {
    id: 144,
    url: '/private-banking/finansowanie/',
    label: 'Finansowanie',
  },
  {
    id: 155,
    url: '/private-banking/co-nas-wyroznia/',
    label: 'co nas<br/>wyróżnia',
  },
  { id: 166, url: '/kontakt/private-banking/', label: 'skontaktuj<br/>się z nami' },
  {
    id: 177,
    url: '/bezpieczenstwo/',
    label: 'bezpieczeństwo',
  },
]

const gridItemsOne = [
  {
    id: '234',
    link: '/private-banking/zarzadzanie-majatkiem/asset-managment/',
    title: 'Zarządzanie majątkiem',
    text: 'Wybierz rozwiązania inwestycyjne dostosowane do Twoich realnych potrzeb.',
  },
  {
    id: '452',
    link: '/private-banking/finansowanie/o-finansowaniu/',
    title: 'Finansowanie',
    text: 'Sprawdź, który produkt jest dla Ciebie najlepszy.',
  },
  {
    id: '333',
    link: '/private-banking/planowanie-majatku-i-sukcesji/sukcesja/',
    title: 'Sukcesja',
    text: 'Zadbaj o interesy członków najbliższej rodziny, zabezpiecz majątek firmowy i prowadź działalności firmy przez pokolenia.',
  },
]

const gridItemsTwo = [
  {
    id: '864',
    link: '/private-banking/25-lat-private-banking/os-czasu/',
    title: 'Ponad 25 lat doświadczenia private banking mBanku',
    text: 'Jestemy pionierami bankowości prywatnej w Polsce.',
  },
  {
    id: '995',
    link: '/private-banking/co-nas-wyroznia/zasady-inwestycyjne/',
    title: 'Zasady inwestycyjne',
    text: 'Przejrzystość, płynność i przewidywalność – to podstawa zarządzania majątkiem.',
  },
  {
    id: '994',
    link: '/private-banking/bankowosc-codzienna/aplikacja-i-serwis/',
    title: 'Nowoczesność',
    text: 'Jesteśmy najbardziej innowacyjnym bankiem w Polsce. Dzięki temu Twoja codzienna bankowość może być całkowicie mobilna.',
  },
]

export default function PrivateBanking() {
  return (
    <div className="pageWrapper">
      <div className="container">
        <SubMenu menu={submenu} />
      </div>

      <main>
        <div id={styles.topBanner}>
          <section>
            <ul className={styles.slides}>
              <li>
                <a
                  href="/private-banking/bankowosc-codzienna/konta/konto-private-banking/"
                  className={styles.slide}
                >
                  <div className={`${styles.col} ${styles.colLeft}`}>
                    <div className={styles.inner}>
                      <p className={styles.heading}>
                        Konto osobiste private banking
                      </p>
                    </div>
                    <div className={styles.inner}>
                      <p className={styles.subheading}>
                        otwórz rachunek wygodnie, bez wychodzenia z domu i
                        korzystaj z wiedzy naszych ekspertów
                      </p>
                      <div className={`buttonRed ${styles.cta}`}>
                        sprawdź szczegóły
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.col} ${styles.colRight}`}>
                    <Image src={img} alt="Personal account logo" />
                  </div>
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div id={styles.main}>
          <section className={styles.placeholder} />

          <section className={styles.infoboxGrid}>
            <div className={styles.container}>
              {gridItemsOne.map((grid) => (
                <GridItem
                  key={grid.id}
                  link={grid.link}
                  title={grid.title}
                  text={grid.text}
                />
              ))}
            </div>
          </section>

          <section className={styles.lifting}>
            <div className={styles.liftingInner}>
              <div className={styles.headline}>
                <h2>Poznaj private banking mBanku</h2>
              </div>
            </div>
          </section>

          <section className={styles.infoboxGrid}>
            <div className={styles.container}>
              {gridItemsTwo.map((grid) => (
                <GridItem
                  key={grid.id}
                  link={grid.link}
                  title={grid.title}
                  text={grid.text}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
