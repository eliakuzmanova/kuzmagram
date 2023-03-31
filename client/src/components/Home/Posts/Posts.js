import Post from "./Post/Post"
import styles from "./posts.module.css";
import { useAuthContext } from '../../../contexts/AuthContext';
import * as userService from "../../../services/userService";
import { useEffect, useState } from "react";
import { IoIosImage } from "react-icons/io";

export default function Posts() {

    const { userId } = useAuthContext()
    const [posts, setPosts] = useState("")

    useEffect(() => {
        const fetchPosts = async () => {

            const fetchedPost = await userService.getFollowsPosts(userId)

            setPosts(fetchedPost)
        }
        fetchPosts()

    }, [userId])

    return (

        <main className={styles["main"]}>
            {posts
                ? posts.map(p => <Post key={p._id} post={p} />)
                : <div className={styles["no-posts-container"]}>
                    <h1 className={styles["no-posts-h1"]}>There are no posts yet...</h1>
                    <p className={styles["no-posts-p"]}>Follow your friends to see their posts here!</p>

                </div>
            }
        </main>
    )
}