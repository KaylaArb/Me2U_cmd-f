import styles from "../styles/Features.module.css";
import { SpringGrid } from 'react-stonecutter';

export default function Features() {

    return (
        <div className={styles.featureContainer}>
            <div className={styles.featureContent}>
                <h2>Awesome Features</h2>
                <div className={styles.grid}>
                    <SpringGrid
                        columns={3}
                        columnWidth={225}
                        gutterWidth={250}
                        gutterHeight={10}
                        itemHeight={400}
                        springConfig={{ stiffness: 170, damping: 26 }}
                    >
                        <div className={styles.card}><img src='/rec1.png' className={styles.caraPhoto} /></div>
                        <div className={styles.card}><img src='/recdemo.svg' className={styles.caraPhoto} /></div>
                        <div className={styles.card}><img src='/rec42.jpg' className={styles.caraPhoto} /></div>
                        <div className={styles.card}><img src='/rec2.png' className={styles.caraPhoto} /></div>
                        <div className={styles.card}><img src='/rec41.png' className={styles.caraPhoto} /></div>
                        <div className={styles.card}><img src='/rec3.png' className={styles.caraPhoto} /></div>
                    </SpringGrid>
                </div>

            </div>
        </div>

    )
}
