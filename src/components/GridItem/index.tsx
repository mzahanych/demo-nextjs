import styles from './GridItem.module.scss'

interface GridItemProps {
  link: string
  title: string
  text: string
}

export default function GridItem({ link, title, text }: GridItemProps) {
  return (
    <div className={styles.infoGridItem}>
      <a href={link} aria-label={title}>
        <div className={styles.textBox}>
          <p className={styles.headline}>{title}</p>
          <p className={styles.text}>{text}</p>
        </div>
      </a>
    </div>
  )
}
