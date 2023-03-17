import FooterHome from "./FooterHome/FooterHome";
import styles from "./home.module.css";
import Navbar from "../Navbar/Navbar";
import Posts from "./Posts/Posts";
import AsideHome from "./AsideHome/AsideHome"

export default function Home() {
    return (
        <div className={styles["container-home"]}>
            <header className={styles["header"]}>
                <Navbar />
            </header>
            <div className={styles["container-main-aside"]}>
           
                <Posts />  
            <article className={styles["aside-article-home"]}>
                    <AsideHome />
                <FooterHome />
            </article>
            
            </div>
        </div>
    )
}