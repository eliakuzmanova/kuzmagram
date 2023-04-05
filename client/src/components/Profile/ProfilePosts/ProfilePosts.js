import styles from "./profile-posts.module.css"

import { useState } from "react"

import * as postService from "../../../services/postService"
import ProfilePost from "./ProfilePost/ProfilePost"
import PostContent from "./ProfilePost/PostContent/PostContent"

export default function ProfilePosts({
    posts
}) {
    const [btnClicked, setBtnClicked] = useState(false)
    const [clickedPost, setClickedPost] = useState("")


    async function onClickPhoto(e, post) {
        e.preventDefault()
        try {
            const result = await postService.getOne(post._id)
            setBtnClicked(true)
            setClickedPost(result)
        } catch (error) {
            console.log(error);
        }
    }

    function onModalClose(e) {
        e?.preventDefault()
        setBtnClicked(false)
        setClickedPost("")
    }


    return (
        <>
            <div className={styles["profile-posts-container"]}>
                {posts.map(x => <ProfilePost key={x._id} post={x} onClickPhoto={onClickPhoto} />)}
            </div>
            <>
                {btnClicked && <PostContent onModalClose={onModalClose} clickedPost={clickedPost} />}
            </>
        </>
    )
}