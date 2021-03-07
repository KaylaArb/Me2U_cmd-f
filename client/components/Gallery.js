import styles from "../styles/Gallery.module.css";
import { useState } from 'react';
import { useRouter } from "next/router"
import Post from "../components/Post.js"
import Router from "next/router";



export default function Gallery({ data }) {
    const [theData, setData] = useState(data);

    function handleSort(value) {
        if (value === 'All') {
            fetch('https://cmdf-backend.herokuapp.com/api/all')
            .then((response) => response.json())
            .then(response => {
                setData(response);  
            })
        } else {
            fetch("https://cmdf-backend.herokuapp.com/api/search/" + value)
            .then((response) => response.json())
            .then(response => {
                setData(response);
            })
        }
    }

    return (
        <div className={styles.galleryContainer}>
            <h2>Feed</h2>
            <div className={styles.galleryContent}>
                <div className="sortingColumn">
                    <div className={styles.dropdown}>
                        <select id='sort' className={styles.dropbtn} onChange={() => handleSort(sort.value)}>
                            <option key='All' value='All'>All
                            </option>
                            <option key='Mental' value='Mental Health'>Mental Health
                            </option>
                            <option key='Work' value='Work'>Work
                            </option>
                            <option key='Education' value='Education'>Education
                            </option>
                            <option key='Social' value='Social'>Social
                            </option>
                        </select>
                    </div>
                </div>
                <div className={styles.masonry}>
                    {theData.reverse().map((posts) => (
                        <div className={styles.item} key={posts.id}><Post data={posts} /> </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
