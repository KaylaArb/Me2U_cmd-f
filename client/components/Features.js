import styles from "../styles/Features.module.css";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


export default function Features() {
    return (
        <div className={styles.featureContainer}>
            <div className={styles.featureContent}>
                <h2>Awesome Features</h2>
                <Carousel infinite slidesPerPage={3} animationSpeed={3600000}
                    autoPlay={0} className={styles.photoCara}>
                    <img src='/rec1.png' className={styles.caraPhoto}/>
                    <img src='/recdemo.svg' className={styles.caraPhoto}/>
                    <img src='/rec42.jpg' className={styles.caraPhoto}/>
                    <img src='/rec2.png' className={styles.caraPhoto}/>
                    <img src='/rec41.png' className={styles.caraPhoto}/>
                    <img src='/rec3.png' className={styles.caraPhoto}/>
                    <img src='/rec40.png' className={styles.caraPhoto}/>
                </Carousel>
               

            </div>
        </div>

    )
}
