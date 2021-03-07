import styles from "../styles/Features.module.css";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default function Features() {
    return (
        <div className={styles.featureContainer}>
            <div className={styles.featureContent}>
                <h2>Awesome Features</h2>
                <Carousel infinite slidesPerPage={3} animationSpeed={4000000}
                    autoPlay={0} stopAutoPlayOnHover className={styles.photoCara}>
                    <img src='/rectangle29.png' />
                    <img src='/rec42.jpg' />
                    <img src='/rec31.png' />
                    <img src='/rec41.png' />
                    <img src='/rec32.png' />
                    <img src='/rec40.png' />
                    <img src='/rectangle27.png' />
                </Carousel>
            </div>
        </div>

    )
}