import styles from "../styles/Gallery.module.css";
import { useState } from 'react';
import { useRouter } from "next/router"
import Post from "../components/Post.js"
import Router from "next/router";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"



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
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1600: 4 }} style={{width: "100%", display: "block"}}>
                    <Masonry  columnsCount={4} gutter="10px"> 
                        {theData.reverse().map((posts) => (
                            <div className={styles.item} key={posts.id}><Post data={posts} /> </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
    )
}
