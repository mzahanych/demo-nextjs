'use client'

import Link from 'next/link'
import styles from './Header.module.scss'
import Image from 'next/image'
import imgInd from '../../../public/mbank-logo-ind.gif'
import imgPriv from '../../../public/mbank-logo-priv.gif'
import MainMenuItem from './MainMenuItem'
import MenuActions from './MenuActions'
import { useSelectedLayoutSegment } from 'next/navigation'

const menu = [
  { id: 1, url: '/indywidualny', label: 'Klienci indywidualni' },
  { id: 2, url: '/private-banking', label: 'Private banking' },
  { id: 3, url: '/firmy', label: 'Firmy' },
  { id: 4, url: '/msp-korporacje', label: 'MSP i korporacje' },
]

export default function Header() {
  const segment = useSelectedLayoutSegment()
  const isPrivateBanking = segment === 'private-banking'

  if (segment === null) return null;

  return (
    <header className="pageWrapper">
      <div className={isPrivateBanking ? styles.topBorderPriv : styles.topBorderInd} />
      <div className="container">
        <div id="head" className={styles.head}>
          <Link href="/indywidualny" className={styles.logotype}>
            <Image
              src={isPrivateBanking ? imgPriv : imgInd}
              width={130}
              height={50}
              alt="main logo"
            />
          </Link>
          <div className={styles.burgerMenuIconWrapper}>
            <div className={styles.burgerMenuIcon} />
            <div className={styles.burgerMenuIcon} />
            <div className={styles.burgerMenuIcon} />
          </div>
          <ul
            className={styles.menu}
            data-event="click"
            role="menubar"
            aria-label="Menu główne"
            aria-orientation="horizontal"
            data-loaded="true"
          >
            {menu.map((item) => (
              <MainMenuItem
                key={item.id}
                label={item.label}
                url={item.url}
                id={item.id}
              />
            ))}
          </ul>

          <MenuActions isPrivateBanking={isPrivateBanking} />
        </div>
      </div>
    </header>
  )
}
