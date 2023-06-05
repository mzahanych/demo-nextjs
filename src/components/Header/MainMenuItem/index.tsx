'use client';

import Link from 'next/link'
import styles from './MainMenuItem.module.scss'
import { useSelectedLayoutSegment } from 'next/navigation';

interface MainMenuItemProps {
  id: number,
  label: string,
  url: string
}

export default function MainMenuItem({ id, label, url }: MainMenuItemProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <li role="none" id={`menu-item-${id}`} data-active="true" className={`/${segment}` === url ? styles.mainMenuItemActive : styles.mainMenuItem}>
      <Link href={url}>{label}</Link>
    </li>
  )
}
