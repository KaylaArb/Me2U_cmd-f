import styles from "../styles/Hero.module.css";
import Head from "next/head";
import Footer from "./Footer";
export default function Hero() {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroLeft}>
            <h1 className={styles.heading}>WE ARE HERE TO SUPPORT EACH OTHER</h1>
           <h3 className={styles.paragragh}>Share your experience. Share your story </h3>
           <button className={styles.buttonS}>Share now</button>
            </div>
           <img src="/main.png"></img>
        </div>
    )
}