import Link from 'next/link'
import styles from "@/styles/layout.module.css"

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul className={styles.ul}>
        <li><Link href="/about" className={styles.navLink}>About</Link></li>
        <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
        <li><Link href="/features" className={styles.navLink}>Features</Link></li>
        <li><Link href="/products" className={styles.navLink}>Products</Link></li>
      </ul>
    </nav>
  )
}

export default Header