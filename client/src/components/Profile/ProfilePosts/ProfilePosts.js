import styles from "./profile-posts.module.css"
import ProfilePost from "./ProfilePost/ProfilePost"
import { useState } from "react"
import PostContent from "./ProfilePost/PostContent/PostContent"
import * as postService from "../../../services/postService"

export default function ProfilePosts({
    posts
}) {
    const [btnClicked, setBtnClicked] = useState(false)
    const [clickedPost, setClickedPost] = useState("")
    console.log("Hello from Profile posts");
   async function onClickPhoto(e, post) {
        e.preventDefault()
     
        const result = await postService.getOne(post._id)
        setBtnClicked(true)
        setClickedPost(result)
        console.log("Hello from Profile posts ionClick");
    }

    function onModalClose() {
        setBtnClicked(false)
        setClickedPost("")
        
    }


    return (
        <>
            <div className={styles["profile-posts-container"]}>
           
                {posts.map(x => <ProfilePost key={x._id} post={x} onClickPhoto={onClickPhoto} />)} 
                
            </div>
            <>
                {btnClicked && <PostContent onModalClose={onModalClose} post={clickedPost} />}
            </>
        </>
    )
}