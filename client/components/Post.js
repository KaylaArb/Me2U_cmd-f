import styles from "../styles/Post.module.css";


export default function Hero({ data }) {

    let min = Math.ceil(1);
    let max = Math.floor(4);
    let random = Math.round((Math.random() * (max - min) + min) * 1)

    var iconImage;
    if (data.user_id === 1) {
        iconImage = "/photoId1.svg";
    } else if (data.user_id === 2) {
        iconImage = "/photoId2.svg";
    } else {
        iconImage = "/roadmapPhoto.svg"
    }
    return (
        <article className={styles.block}>
            <div className={styles.body}>
                <p className={styles.title}>{data.message}</p>
            </div>
            <div className={styles.footer}>
                <img if src={iconImage} className={styles.photo} />
                <div className={styles.footerText}>
                <p className={styles.title1}>{data.name}</p>
                <p className={styles.title2}>{data.topic}</p>
                </div>
       
            </div>
        </article>

    )
}