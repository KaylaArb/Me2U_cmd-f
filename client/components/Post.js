import styles from "../styles/Post.module.css";


export default function Post({ data }) {

    let min = Math.ceil(1);
    let max = Math.floor(5);
    let random = Math.round((Math.random() * (max - min) + min) * 1)

    var iconImage;

    if (random === 1) {
        iconImage = "/icon1.png";
    } else if (random === 2) {
        iconImage = "/icon2.png";
    } else if (random === 3) {
        iconImage = "/icon3.png";
    } else {
        iconImage = "/icon4.png"
    }

    return (
        <article className={styles.block}>
            <div className={styles.body}>
                <img src={data.photo} className={`${styles.photo1} ${!data.photo ? '' : styles.active}`} />
                <p className={styles.title}>{data.message}</p>
            </div>
            <div className={styles.footer}>
                <img src={iconImage} className={styles.photo} />
                <div className={styles.footerText}>
                <p className={styles.title1}>{data.name}</p>
                <p className={styles.title2}>{data.topic}</p>
                </div>
            </div>
        </article>

    )
}

// className={`${styles.photo1} ${!data.photo ? '' : styles.active}`}

