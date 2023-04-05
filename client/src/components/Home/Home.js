import styles from "./home.module.css";

import { useEffect, useState } from "react";

import { useAuthContext } from '../../contexts/AuthContext';
import * as userService from "../../services/userService";
import FooterHome from "./FooterHome/FooterHome";
import Navbar from "../Navbar/Navbar";
import Posts from "./Posts/Posts";
import AsideHome from "./AsideHome/AsideHome"

export default function Home({ createdPost, setCreatedPost }) {

    const { userId } = useAuthContext()
    const [posts, setPosts] = useState("")

    useEffect(() => {

        const fetchPosts = async () => {
            try {
                const fetchedPosts = await userService.getFollowsPosts(userId)

                setPosts(fetchedPosts)
            } catch (error) {
                console.log(error);
            }

        }
        fetchPosts()
    }, [userId])

    if (createdPost) {
        getNewData()
    }
    async function getNewData() {
        try {
            const fetchedPosts = await userService.getFollowsPosts(userId)
            setPosts(fetchedPosts)
            setCreatedPost(false)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className={styles["container-home"]}>
                <header className={styles["header"]}>
                    <Navbar />
                </header>
                <div className={styles["container-main-aside"]}>

                    <Posts posts={posts} getNewData={getNewData} />
                    <article className={styles["aside-article-home"]}>
                        <AsideHome />
                        <FooterHome />
                    </article>

                </div>
            </div>

        </>
    )
}