import styles from "../styles/Header.module.css";
import Link from 'next/link'

export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.content}>
                <div className={styles.header__title}>
                    <img src="/Me2U.jpg" alt="logo" className={styles.logo} />
                </div>

                <div className={styles.navLinks}>
                    <Link href="/">
                        <a className={styles.linksUser}>
                            About
                            </a>
                    </Link>
                    <Link href="/explore">
                        <a className={styles.linksUser}>
                            Features
                                </a>
                    </Link>
                    <Link href="/create">
                        <a className={styles.linksUser}>
                            Create
                                </a>
                    </Link>
                    <Link href="/timeline">
                        <a className={styles.linksUser}>
                            Feed
                                </a>
                    </Link></div>

            </div>

        </div>


    )
}