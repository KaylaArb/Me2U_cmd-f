import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Header from "../components/Header";
import PostForm from "../components/PostForm";
import Gallery from "../components/Gallery";

export default function Home({data}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Me2U</title>
                <link rel="icon" href="/favicon.ico"/>
                <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Istok+Web" />
                <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            </Head>
            <Header/>
            <main className={styles.main}>
                <div className={styles.mainChild}>
                <Hero/>
                </div>
                <div className={styles.mainChild}>
                <PostForm/>
                </div>
               
                <Gallery data={data}/>
                
            </main>

            <Footer/>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://cmdf-backend.herokuapp.com/api/all')
    const data = await res.json()
    console.log("worked here")
    console.log(data)

    return {
        props: {data},
    }
}
