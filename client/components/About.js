import styles from "../styles/About.module.css";


export default function About() {

    return (
        <div className={styles.postContainer}>
            <h2>About</h2>
            <div className={styles.postContent}>
                <div className={styles.image}>
                    <img src="/postImage.jpg" className={styles.postImage} />
                </div>
                <div className={styles.form}>
                    <div className={styles.formContainer}>
                        <h3>About this App</h3>
                        <p className={styles.para}>
                            Me2U is  a an encouraging environment that uplifts
                            anyone that identifies as a women through sharing
                            and helping women through a multitude of
                            experiences
                        </p>
                        <ul className={styles.listDot}>
                            <li className={styles.listText}>Install the app</li>
                            <li className={styles.listText}>Set up your profile</li>
                            <li className={styles.listText}>Share your story. Get support.</li>
                        </ul>
                        <button type="button" className={styles.submitButton}> Learn More </button>
                    </div>
                </div>
            </div>
        </div>
    )

}