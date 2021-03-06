import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Header from "../components/Header";
import PostForm from "../components/PostForm";
import Gallery from "../components/Gallery";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Me2U</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main className={styles.main}>
                <Hero/>
                <PostForm/>
                <Gallery/>
            </main>

            <Footer/>
        </div>
    )
}
