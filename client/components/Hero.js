import styles from "../styles/Hero.module.css";
import Head from "next/head";
import Footer from "./Footer";
export default function Hero() {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <div className={styles.heroPart1}>
                    <div className={styles.heroLeft}>
                        <h1 className={styles.heading}>WE ARE HERE TO SUPPORT EACH OTHER</h1>
                        <h3 className={styles.paragragh}>Share your experience. Share your story </h3>
                        <button className={styles.buttonS}>Share now</button>
                    </div>
                    <img src="/main.png"></img>
                </div>
                <div className={styles.heroPart2}>
                    <div className={styles.subpart}>
                        <img alt="vector" src="vector1.png" />
                    </div>
                    <div >
                        <img src="/iconmap.png" alt="iconmap" />
                        <h1>Anywhere</h1>
                        <p>You can join from any part of the world.We are happy to see everyone here.</p>
                    </div>
                    <div className={styles.subpart}>
                        <img alt="vector" src="/vector4.png" />
                    </div>
                    <div >
                        <img src="/iconheart.png" alt="iconheart" />
                        <h1>100% Care</h1>
                        <p>We care about you don't be afraid to ask about help</p>
                    </div>
                    <div className={styles.subpart}>
                        <img src="vector2.png" /></div>
                    <div>
                        <img src="/iconmsg.png" alt="iconhelp" />
                        <h1>24/7 Support</h1>
                        <p>Our qualified mentors will guide you with any question you have</p>
                    </div>
                    <div className={styles.subpart}>
                    <img alt="vector" src="/vector5.png"/>
                </div>
                </div>
            </div>

        </div >

    )
}