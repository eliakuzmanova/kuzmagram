

import { HiOutlineHeart } from "react-icons/hi2";
import Comments from "./../../../Comments/Comments";
import { Link } from "react-router-dom"
import styles from "./post.module.css";
import { useEffect, useState } from "react";

import { useAuthContext } from '../../../../contexts/AuthContext';
import * as postService from "../../../../services/postService"
import * as userService from "../../../../services/userService"
import Likes from "../../../Likes/Likes";

export default function Post({ clickedPost }) {

    const { userId } = useAuthContext()
    const [user, setUser] = useState("")
    const [comment, setComment] = useState("")
    const [heartClicked, setHeartClicked] = useState(false)
    const [postLikes, setPostLikes] = useState(clickedPost.likes)
    const [post, setPost] = useState(clickedPost)
    const [onLikesClicked, setOnLikesClicked] = useState(false)
    const [postWithRelatedLikes, setPostWithRelatedLikes] = useState("")
    const [showComments, setShowComments] = useState(false)

    useEffect(() => {
        const fetchComments = async () => {

            const fetchedPost = await postService.getPostWithComments(clickedPost._id)
            const userInfo = await userService.getOneById(fetchedPost.owner.toString())
            setUser(state => ({ ...state, ...userInfo }))
            setPost(state => ({ ...state, ...fetchedPost }))
        }
        fetchComments()
    }, [userId, postLikes, clickedPost._id])

    function onChangeComment(e) {
        e.preventDefault()
        setComment(e.target.value)

    }

    async function onClickComment(e) {
        e.preventDefault()

        const commentedPost = await postService.postComment(comment, userId, post._id)

        setPost(state => ({ ...state, ...commentedPost }))
        setShowComments(true)
        setComment("")
    }

    async function onLike() {

        if (!heartClicked) {

            await postService.likePost(post._id, userId)
            setPostLikes(state => ([...state, userId]))
            setHeartClicked(true)
        } else {

            await postService.dislikePost(post._id, userId)
            setPostLikes(state => state.filter(state => state != userId))
            setHeartClicked(false)
        }

    }

    async function onLikes() {

        if (postLikes.length) {
            const postWithLikes = await postService.getOneWithLikes(post._id)
            setOnLikesClicked(true)
            setPostWithRelatedLikes(postWithLikes)
        } else {
            return
        }
    }
    function onModalCloseLikes() {
        setOnLikesClicked(false)
    }

    return (
        <>
            <article className={styles["post"]}>
                <section className={styles["user-section"]}>
                    <div className={styles["user-container"]}>
                        <img className={styles["user-image"]} src={user.image ? `http://localhost:7070/${user.image}` : require("../../../../images/user-profile-image.png")} alt="user" />
                        <Link to={`/profile/${user.username}`} className={styles["user-username"]}>{user.username}</Link>
                    </div>

                </section>
                <section className={styles["post-image-section"]}>
                    <img className={styles["post-image"]} src={`http://localhost:7070/${post.image}`} alt="post" />
                </section>
                <section className={styles["icons-section"]}>
                    <div className={styles["actions-container"]}>

                        <HiOutlineHeart className={heartClicked ? styles["icon-heart-clicked"] : styles["icon"]} onClick={onLike} />

                    </div>

                </section>
                <section className={styles["comments-section"]}>
                    <div className={`${postLikes.length ? styles["text-likes-container"] : styles["text-no-likes-container"]}`}>
                        <p className={styles["text-likes"]} onClick={onLikes}><b>{postLikes.length}</b> people like that</p>
                    </div>
                    <div className={styles["description-container"]}>
                        {post.description && <p className={styles["description"]}> <Link to={`/profile/${user.username}`} className={styles["username-description"]}>{user.username}</Link> {post.description} </p>}
                    </div>
                    {post.comments.length? <Comments post={post} showComments={showComments} setShowComments={setShowComments} /> : ""}

                    <div className={styles["textarea-container"]}>
                        <textarea className={styles["textarea"]} name="comment-area" id="comment-area" maxLength="50" placeholder="Comment..." value={comment} onChange={onChangeComment}></textarea>
                        <Link className={styles["comment-btn"]} onClick={onClickComment}>Comment</Link>
                    </div>
                </section>

            </article>
            {onLikesClicked && <Likes onModalClose={onModalCloseLikes} post={postWithRelatedLikes} />}
        </>
    )
}