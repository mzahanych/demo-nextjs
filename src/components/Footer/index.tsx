'use client'

import styles from './Footer.module.scss'
import DodatkowyProduktBlack from '../../../public/dodatkowy-produkt-black-s.svg'
import informacje from '../../../public/informacje-s.svg'
import news from '../../../public/news-s.svg'
import kursyWalut from '../../../public/kursy-walut-s.svg'
import inwestycje from '../../../public/inwestycje-s.svg'
import dokument from '../../../public/dokument-zbierz-dokumenty-footer.svg'
import footer24 from '../../../public/24-footer.png'
import Image from 'next/image'
import { useState } from 'react'

const footerFirst = [
  {
    id: 741,
    name: 'Kontakt z mbankiem',
    links: [
      {
        id: 40,
        label: 'Centrum kontaktu',
        url: '/kontakt/oferta-indywidualna/',
      },
      {
        id: 41,
        label: 'Placówki, bankomaty i wpłatomaty',
        url: '/placowki-bankomaty/#indywidualni-i-firmy_placowki',
      },
      {
        id: 42,
        label: 'Obsługa osób niepełnosprawnych',
        url: '/pomoc/dostep-zdalny/osoby-niepelnosprawne/',
      },
      {
        id: 43,
        label: 'Problem ze spłatą',
        url: '/pomoc/trudnosci-ze-splata/tutaj-zacznij/',
      },
      { id: 44, label: 'Reklamacje', url: '/pomoc/reklamacje/' },
      { id: 45, label: 'Biuro prasowe', url: 'https://pl.media.mbank.pl/' },
      {
        id: 46,
        label: 'Zajęcie egzekucyjne',
        url: '/zajecia-egzekucyjne/informacje/',
      },
    ],
  },
  {
    id: 742,
    name: 'Pomoc',
    links: [
      {
        id: 50,
        label: 'Godziny sesji przelewów',
        url: '/indywidualny/uslugi/pytania-i-odpowiedzi/przelewy/sesje-przelewow-w-mbanku/',
      },
      {
        id: 51,
        label: 'Zastrzeganie kart',
        url: '/indywidualny/aplikacja-i-serwis/produkty/zablokowanie-karty/',
      },
      {
        id: 52,
        label: 'Opłaty i prowizje',
        url: '/pomoc/oplaty/interaktywna/ind/?kampania=cennik_stopka',
      },
      {
        id: 53,
        label: 'Oprocentowanie',
        url: '/pomoc/oprocentowanie/oferta-indywidualna/',
      },
      {
        id: 54,
        label: 'Regulaminy i dokumenty',
        url: '/pomoc/dokumenty/oferta-indywidualna/konta/konta/',
      },
    ],
  },
  {
    id: 743,
    name: 'Bezpieczeństwo i prawo',
    links: [
      {
        id: 60,
        label: 'Samoobrona w sieci',
        url: '/lp2/2023/w1/samoobronawsieci/',
      },
      { id: 61, label: 'Bezpieczeństwo', url: '/bezpieczenstwo/' },
      {
        id: 62,
        label: 'Polityka cookie',
        url: '/o-nas/o-mbanku/polityka-prywatnosci.html',
      },
      { id: 63, label: 'Ustawienia cookie', url: '#' },
      {
        id: 64,
        label: 'Gwarancje depozytów',
        url: '/pomoc/info/bankowy-fundusz-gwarancyjny.html',
      },
      {
        id: 65,
        label: 'Akty prawne (RODO, PSD2, MIFID, EMIR, FATCA, CRS, MDR, BMR)',
        url: '/pomoc/akty-prawne/',
      },
      {
        id: 66,
        label: 'Informacje prawne',
        url: '/o-nas/informacje-wymagane-przepisami-prawa/',
      },
    ],
  },
]

const footerSecond = [
  {
    id: 744,
    name: 'o nas',
    links: [
      { id: 70, label: 'O mBanku', url: '/o-nas/o-mbanku/' },
      { id: 71, label: 'Relacje inwestorskie', url: '/relacje-inwestorskie/' },
      {
        id: 72,
        label: 'Notowania i kursy walut',
        url: '/serwis-ekonomiczny/notowania-funduszy/',
      },
      {
        id: 73,
        label: 'Serwis ekonomiczny',
        url: 'https://makroekonomia.mbank.pl/',
      },
      { id: 74, label: 'Grupa mBanku', url: '/o-nas/grupa/' },
      { id: 75, label: 'Kariera w mBanku', url: '/kariera/' },
      { id: 76, label: 'mFundacja', url: '/mfundacja/strona-glowna/' },
      {
        id: 77,
        label: 'Fundusz m jak malarstwo',
        url: 'https://www.mjakmalarstwo.pl',
      },
      {
        id: 78,
        label: 'Odpowiedzialny bank',
        url: '/o-nas/odpowiedzialnosc-spoleczna/strona-glowna/',
      },
    ],
  },
  {
    id: 745,
    name: 'Przydatne linki',
    links: [
      {
        id: 80,
        label: 'Aplikacja mobilna',
        url: '/indywidualny/aplikacja-i-serwis/strona-glowna/',
      },
      {
        id: 81,
        label: 'Program partnerski',
        url: 'https://mbank.net.pl/portal/',
      },
      {
        id: 82,
        label: 'Zostań pośrednikiem',
        url: '/pomoc/zostan-posrednikiem/',
      },
      {
        id: 83,
        label: 'PolecamBank',
        url: '/indywidualny/programy/polecambank/',
      },
      {
        id: 84,
        label: 'mOkazje',
        url: '/indywidualny/uslugi/mokazje/mokazje/',
      },
      { id: 85, label: 'English version', url: '/en/' },
      { id: 86, label: 'Kompakt Finanse', url: '/kompakt-finanse/' },
      {
        id: 87,
        label: 'Wskaźniki referencyjne',
        url: '/pomoc/akty-prawne/wskazniki/',
      },
    ],
  },
  {
    id: 746,
    name: 'Produkty',
    links: [
      {
        id: 90,
        label: 'Konta osobiste',
        url: '/indywidualny/konta/konta-osobiste/',
      },
      {
        id: 91,
        label: 'Konta firmowe',
        url: '/firmy/konta-firmowe/konto-podstawowe/',
      },
      {
        id: 92,
        label: 'Konta oszczędnościowe',
        url: '/indywidualny/oszczednosci/ekonto-oszczednosciowe/',
      },
      {
        id: 93,
        label: 'Fundusze inwestycyjne',
        url: '/indywidualny/inwestycje/fundusze/',
      },
      {
        id: 94,
        label: 'Kredyty hipoteczne',
        url: '/indywidualny/kredyty/kredyty-hipoteczne/',
      },
      {
        id: 95,
        label: 'Kredyty gotówkowe',
        url: '/indywidualny/kredyty/kredyty-gotowkowe/',
      },
      {
        id: 96,
        label: 'Karty kredytowe',
        url: '/indywidualny/karty/karty-kredytowe/',
      },
    ],
  },
]

export default function Footer() {
  const [dropdown, setDropdown] = useState<number | null>(null)

  const clickHandler = (index: number) => {
    setDropdown((prev) => {
      return prev === index ? null : index
    })
  }

  return (
    <footer className={styles.pageFooter}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <p>Kod BIC/SWIFT:</p>
          <p>
            <strong>Klienci indywidualni, firmowi i private banking</strong>:
            BREXPLPWMBK
            <br />
            <strong>Klienci MSP i korporacje</strong>: BREXPLPWXXX
          </p>
          <p>
            <strong>
              <a
                href="/indywidualny/serwis-transakcyjny-ib/pytania-i-odpowiedzi/przelewy-zagraniczne/"
                style={{ color: '#ff0000', textDecoration: 'underline' }}
              >
                więcej o przelewach zagranicznych
              </a>
            </strong>
          </p>
          <p>&nbsp;</p>
          <table>
            <tbody>
              {/* First part */}
              <tr>
                {footerFirst.map((item) => (
                  <td
                    onClick={() => clickHandler(item.id)}
                    key={item.id}
                    className={`${styles.toggle} ${
                      dropdown === item.id ? styles.toggleActive : ''
                    }`}
                  >
                    <p className={styles.heading}>{item.name}</p>
                    <ul
                      className={
                        dropdown === item.id ? '' : styles.hiddenDropdown
                      }
                    >
                      {item.links.map((link) => (
                        <li key={link.id}>
                          <a href={link.url}>{link.label}</a>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
                <td className={styles.footerBoxTd}>
                  <div className={styles.footerBox}>
                    <ul>
                      <li>
                        <a href="/indywidualny/konta/konta-osobiste/ekonto-osobiste/?ref=stopka">
                          <Image
                            className={styles.icon}
                            src={DodatkowyProduktBlack}
                            alt="footer icon"
                          />
                          Otwórz konto osobiste
                        </a>
                      </li>
                      <li>
                        <a href="/informacje-dla-klienta/indywidualny/">
                          <Image
                            className={styles.icon}
                            src={informacje}
                            alt="footer icon"
                          />
                          Komunikaty
                        </a>
                      </li>
                      <li>
                        <a href="/mbank-news/wszystkie/">
                          <Image
                            className={styles.icon}
                            src={news}
                            alt="footer icon"
                          />
                          mBank news
                        </a>
                      </li>
                      <li>
                        <a href="/serwis-ekonomiczny/kursy-walut/">
                          <Image
                            className={styles.icon}
                            src={kursyWalut}
                            alt="footer icon"
                          />
                          Kursy walut
                        </a>
                      </li>
                      <li>
                        <a href="/serwis-ekonomiczny/notowania-funduszy/">
                          <Image
                            className={styles.icon}
                            src={inwestycje}
                            alt="footer icon"
                          />
                          Notowania funduszy
                        </a>
                      </li>
                      <li>
                        <a href="/pomoc/oplaty/interaktywna/ind/?kampania=cennik_kafel">
                          <Image
                            className={styles.icon}
                            src={dokument}
                            alt="footer icon"
                          />
                          Cennik
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              {/* Second part */}
              <tr>
                {footerSecond.map((item) => (
                  <td
                    onClick={() => clickHandler(item.id)}
                    key={item.id}
                    className={`${styles.toggle} ${
                      dropdown === item.id ? styles.toggleActive : ''
                    }`}
                  >
                    <p className={styles.heading}>{item.name}</p>
                    <ul
                      className={
                        dropdown === item.id ? '' : styles.hiddenDropdown
                      }
                    >
                      {item.links.map((link) => (
                        <li key={link.id}>
                          <a href={link.url}>{link.label}</a>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
                <td colSpan={2} className={styles.footerBoxTd}>
                  <div id={styles.appBox} className={styles.footerBox}>
                    <a href="/indywidualny/aplikacja-mobilna/" target="_blank">
                      <Image src={footer24} alt="footer 24 image" />
                    </a>
                    <div>
                      <p style={{ fontSize: 17 }}>
                        <b>
                          Pobierz aplikację <br /> mobilną mBanku
                        </b>
                      </p>
                      <br />
                      <p>
                        {' '}
                        <a href="/aplikacja-mobilna/" className="buttonRed">
                          Szczegóły
                        </a>
                      </p>
                      <p>&nbsp;</p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.rowUnderFooter}>
          <div className={styles.container}>
            <p>©2022 mBank S.A.</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
