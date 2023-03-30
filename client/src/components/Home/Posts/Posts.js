import Post from "./Post/Post"
import styles from "./posts.module.css";
import { useAuthContext } from '../../../contexts/AuthContext';
import * as userService from "../../../services/userService";
import { useEffect, useState } from "react";

export default function Posts(){

    const { userId } = useAuthContext()
    const [posts, setPosts] = useState("")

    useEffect(()=>{
        const fetchPosts = async() => {
         const fetchedPost = await userService.getFollowsPosts(userId)
         setPosts(fetchedPost)
        }
        fetchPosts()
    
    },[userId])
    
    return(
        <h1>Hi</h1>
        // <main className={styles["main"]}>
        //      {photos.map(x => <Post key={i++} photo={x}/>)} 
        //     </main>
    )
}