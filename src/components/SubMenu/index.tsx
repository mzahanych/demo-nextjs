import Link from 'next/link'
import styles from './SubMenu.module.scss'

interface Menu {
  id: number
  url: string
  label: string
}

interface SubMenuProps {
  menu: Menu[]
}

export default function SubMenu({ menu }: SubMenuProps) {
  return (
    <ul className={styles.submenu}>
      {menu.map((item) => (
        <li key={item.id} className={styles.submenuItem}>
          <Link href={item.url} role="menuitem" className={styles.submenuLink}>
            <span dangerouslySetInnerHTML={{ __html: item.label }} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
