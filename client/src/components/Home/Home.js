import FooterHome from "./FooterHome/FooterHome";
import styles from "./home.module.css";
import Navbar from "../Navbar/Navbar";
import Post from "./Post/Post";
import AsideHome from "./AsideHome/AsideHome"

export default function Home() {
    return (
        <div className={styles["container-home"]}>
            <header className={styles["header"]}>
                <Navbar />
            </header>
            <div className={styles["container-main-aside"]}>
           
            <main className={styles["main"]}>
                <Post />
            </main>
            <article className={styles["aside-article-home"]}>
                    <AsideHome />
                <FooterHome />
            </article>
            
            </div>
        </div>
    )
}