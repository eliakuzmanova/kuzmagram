import FooterHome from "./FooterHome/FooterHome";
import styles from "./home.module.css";
import Navbar from "../Navbar/Navbar";
import Posts from "./Posts/Posts";
import AsideHome from "./AsideHome/AsideHome"
import Create from "../Create/Create";
import { useState } from "react";

export default function Home() {
    const [createClicked, setCreateClicked] = useState(false)
    const [image, setImage] = useState("")
  
    function onModalClose() {
        setCreateClicked(false)
        setImage("")
       

    }
    return (
        <>
            <div className={styles["container-home"]}>
                <header className={styles["header"]}>
                    <Navbar setCreateClicked={setCreateClicked} />
                </header>
                <div className={styles["container-main-aside"]}>

                    <Posts />
                    <article className={styles["aside-article-home"]}>
                        <AsideHome />
                        <FooterHome />
                    </article>

                </div>
            </div>
            {createClicked &&
                <Create
                    onModalClose={onModalClose}
                    image={image}
                    setImage={setImage}
            />}
        </>
    )
}