import styles from "../styles/Header.module.css";
import { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    const listenScrollEvent = e => {
        if (window.scrollY > 0) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false);
        }
      }

      useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
      })
    return (
        <div className={`${styles.headerContainer} ${isScrolled ? styles.active : ''}`}>
            <div className={styles.content}>
                <div className={styles.header__title}>
                    <img src="/Me2U.jpg" alt="logo" className={styles.logo} onClick={() => window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })}></img>
                </div>

                <div className={styles.navLinks}>
                    <a className={styles.linksUser} onClick={() => window.scrollTo({
                        top: 900,
                        behavior: 'smooth'
                    })}>
                        About
                            </a>
                    <a className={styles.linksUser} onClick={() => window.scrollTo({
                        top: 1600,
                        behavior: 'smooth'
                    })}>
                        Features
                                </a>
                    <a className={styles.linksUser} onClick={() => window.scrollTo({
                        top: 2250,
                        behavior: 'smooth'
                    })}>
                        Create
                                </a>
                    <a className={styles.linksUser} onClick={() => window.scrollTo({
                        top: 3200,
                        behavior: 'smooth'
                    })}>
                        Feed
                                </a>
                </div>

            </div>

        </div>


    )
}