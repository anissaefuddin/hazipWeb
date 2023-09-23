'use client'

/* Core */
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* Instruments */
import styles from '../styles/layout.module.css'

export const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
        href="/"
      >
        Study Data
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === '/verify' ? styles.active : ''
        }`}
        href="/verify"
      >
        Hazard Type
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === '/TestMenu' ? styles.active : ''
        }`}
        href="/testMenu"
      >
        Guide Word
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === '/TestMenu' ? styles.active : ''
        }`}
        href="/testMenu"
      >
        Lopa Workshee
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === '/TestMenu' ? styles.active : ''
        }`}
        href="/testMenu"
      >
        Recommendati
      </Link>
    </nav>
  )
}
