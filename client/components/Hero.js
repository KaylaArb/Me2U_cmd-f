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
                        <button className={styles.buttonS} onClick={() => window.scrollTo({
                            top: 2700,
                            behavior: 'smooth'
                        })}>Share now</button>
                    </div>
                    <img src="/hero.png" className={styles.mainImage}></img>
                    <img src="/circle.png" className={styles.circleImage} />
                </div>
                <div className={styles.heroPart2}>
                    <div>
                        <img  src="vec1.jpg" className={styles.imageDesign}/>
                    </div>
                    <div >
                        <img src="/iconmap.png" alt="iconmap" className={styles.icon}/>
                        <h1 className={styles.titleCards}>Anywhere</h1>
                        <p>You can join from any part of the world.We are happy to see everyone here.</p>
                    </div>
                    <div>
                        <img  src="/vec2.jpg" className={styles.imageDesign}/>
                    </div>
                    <div >
                        <img src="/iconheart.png" alt="iconheart" className={styles.icon}/>
                        <h1 className={styles.titleCards}>100% Care</h1>
                        <p>We care about you don't be afraid to ask about help</p>
                    </div>
                    <div>
                        <img src="vec3.jpg" className={styles.imageDesign}/></div>
                    <div>
                        <img src="/iconmsg.png" alt="iconhelp" className={styles.icon}/>
                        <h1 className={styles.titleCards}>24/7 Support</h1>
                        <p>Our qualified mentors will guide you with any question you have</p>
                    </div>
                    <div>
                        <img src="/vec4.jpg" className={styles.imageDesign}/>
                    </div>
                </div>
            </div>

        </div >

    )
}