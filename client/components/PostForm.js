import styles from "../styles/PostForm.module.css";
import Head from "next/head";
import { useState } from 'react';
import { useRouter } from "next/router"
import Router from "next/router";

export default function PostForm() {
    const [isSort, setIsSort] = useState(null);

    function submitPost() {
        let namePost = document.getElementById("name").value;
        let topicPost = isSort;
        let messagePost = document.getElementById("messageBox").value;
        const requestOptions = {
            method: 'POST',
            // mode: 'no-cors',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ name: namePost, topic: topicPost, message: messagePost })
        };
        fetch('https://cmdf-backend.herokuapp.com/api/add', requestOptions)
            .then(response => response.json())
        Router.reload(window.location.pathname)
        window.scrollTo({
            top: 1915,   
            behavior: 'smooth'
        })
    }

    return (
        <div className={styles.postContainer}>
            <h2>Create Your First Post</h2>
            <div className={styles.postContent}>
                <div className={styles.image}>
                    <img src="/circle.png"  className={styles.circleImage} />
                    <img src="/productImage1.png"  className={styles.postImage} />
                </div>
                <div className={styles.form}>
                    <div className={styles.formContainer}>
                        <p className={styles.formTitle}>Share your story.</p>
                        <h3>Name</h3>
                        <input type="text" id="name" required className={styles.inputBox} />
                        <h3>Category</h3>
                        <div className={styles.formatButtons}>
                            <button type="button" onClick={() => setIsSort('Mental Health')} className={styles.topicButton}> Mental Health </button>
                            <button type="button" onClick={() => setIsSort('Education')} className={styles.topicButton}> Education </button>
                            <button type="button" onClick={() => setIsSort('Work')} className={styles.topicButton}> Work </button>
                            <button type="button" onClick={() => setIsSort('Social')} className={styles.topicButton}> Social </button>
                        </div>
                        <h3>What would you like to share?</h3>
                        <textarea type="text" id="messageBox" required className={styles.messageBox} />
                        <button type="button" onClick={submitPost} className={styles.submitButton}> Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )

}