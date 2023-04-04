import styles from "./comments.module.css";

import { useState } from "react";

import PostContent from "../Profile/ProfilePosts/ProfilePost/PostContent/PostContent";

export default function Comments({post, showComments, setShowComments}) {
    
    const [btnClicked, setBtnClicked] = useState(false)

   async function onSeeComments(e) {
        e.preventDefault()
        setBtnClicked(true)

    }

    function onModalClose() {
        setBtnClicked(false)
        setShowComments(false)
    }
    return(
        <>
        <div className={styles["comments-container"]}>
            <p className={styles["see-comments"]} onClick={onSeeComments}>See all comments...</p>      
        </div>
    {(btnClicked || showComments) &&  <PostContent onModalClose={onModalClose} clickedPost={post}/>}
   
    </>
    )
}