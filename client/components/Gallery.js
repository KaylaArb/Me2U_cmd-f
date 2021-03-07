import styles from "../styles/Gallery.module.css";
import { useState} from 'react';
import {useRouter} from "next/router"
import Head from "next/head";



export default function Gallery({posts}) {
    const [isSort, setIsSort] = useState(null);
    const router = useRouter()

    const handleSort = (value) => {
        setIsSort(value);
        const path = router.pathname
        const query = router.query
        query.sort = isSort;
        router.push({
            pathname: path,
            query: query,
        }).then()
    };

    return (
        <div className={styles.galleryContainer}>
            <div className={styles.galleryContent}>

                <div className="sortingColumn">
                    <div className={styles.dropdown}>
                        <select id='sort' className={styles.dropbtn} onChange={() => handleSort(sort.value)}>
                            <option key='Name:ASC' value='Name:ASC'>Alphabetical
                            </option>
                            <option key='created_at:DESC' value='created_at:DESC'>Newest
                            </option>
                            <option key='created_at:ASC' value='created_at:ASC'>Oldest
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps({ query }) {
    const sort = query.sort || null
    if (sort === null) {
        const posts = await fetch(backendUr).then(r => r.json())
        return { props: { posts } }
    } else {
        const posts = await fetch(backendUrl + `/${sort}`).then(r => r.json())
        return { props: { posts } }
    }

}
