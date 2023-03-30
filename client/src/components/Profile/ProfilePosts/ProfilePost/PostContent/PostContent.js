import styles from "./post-content.module.css"
import ModalComments from "./ModalComments/ModalComments"
import { Link } from "react-router-dom"
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import { useContext, useEffect, useState } from "react"
import { ProfileContext } from "../../../../../contexts/ProfileContext"
import { useAuthContext } from '../../../../..//contexts/AuthContext';
import * as postService from "../../../../../services/postService"
import Likes from "../../../../Likes/Likes";


export default function PostContent({
    onModalClose,
    post
}) {

    const { userId } = useAuthContext()

    const user = useContext(ProfileContext)

    const [heartClicked, setHeartClicked] = useState(false)
    const [postLikes, setPostLikes] = useState(post.likes)

    const [onLikesClicked, setOnLikesClicked] = useState(false)
    const [postWithRelatedLikes, setPostWithRelatedLikes] = useState("")


    useEffect(() => {

        if (postLikes.includes(userId)) {

            setHeartClicked(true)
        } else {

            setHeartClicked(false)
        }
    }, [userId, postLikes])


    async function onLike() {

        let updatedPost;
        if (!heartClicked) {

            updatedPost = await postService.likePost(post._id, userId)
            setPostLikes(state => ([...state, userId]))
            setHeartClicked(true)
        } else {

            updatedPost = await postService.dislikePost(post._id, userId)

            setPostLikes(state => state.filter(state => state != userId))
            setHeartClicked(false)
        }

    }

    async function onLikes() {
       
       const postWithLikes = await postService.getOneWithLikes(post._id)
       setOnLikesClicked(true)
       setPostWithRelatedLikes(postWithLikes)
    }
    function onModalCloseLikes() {
        setOnLikesClicked(false)
    }

    return (
        <>
        <div className={styles["modal"]}>
            <HiOutlineXMark className={styles["close-btn"]} onClick={onModalClose} />
            <div className={styles["modal-content"]}>

                <article className={styles["post"]}>
                    <section className={styles["image-section"]}>
                        <img className={styles["image"]} src={`http://localhost:7070/${post.image}`} alt="post" />
                    </section>

                    <section className={styles["post-information-side"]}>
                        <section className={styles["user-section"]}>
                            <div className={styles["user-container"]}>
                                <img className={styles["user-photo"]} src={user.image ? `http://localhost:7070/${user.image}` : require("../../../../../images/user-profile-image.png")} alt="" />
                                <Link className={styles["username"]}>{user.username}</Link>
                            </div>
                            <HiEllipsisHorizontal className={styles["user-section-icon"]} />
                        </section>
                        <div className={styles["description-container"]}>
                            <div className={styles["description-user-image-container"]}>
                                <img className={styles["description-user-image"]} src={user.image ? `http://localhost:7070/${user.image}` : require("../../../../../images/user-profile-image.png")} alt="user" />
                            </div>
                            {post.description && <p className={styles["description"]}> <Link className={styles["username-description"]}>{user.username}</Link> {post.description} </p>}
                        </div>
                        <ModalComments post={post} />


                        <section className={styles["icons-section"]}>
                            <div className={styles["actions-container"]}>

                                <HiOutlineHeart className={heartClicked ? styles["icon-heart-clicked"] : styles["icon-heart"]} onClick={onLike} />

                                <HiOutlineChatBubbleOvalLeft className={styles["icon-message"]} />

                            </div>

                        </section>
                        <section className={styles["comments-area-section"]}>
                            <div className={styles["text-likes-container"]}>
                                <p className={styles["text-likes"]}><Link className={styles["link-people-likes"]} onClick={onLikes}>{postLikes.length}</Link> people like that</p>
                            </div>

                            <div className={styles["textarea-container"]}>
                                <textarea className={styles["textarea"]} name="comment-area" id="comment-area" maxLength="50" placeholder="Comment..."></textarea>
                                <Link className={styles["comment-btn"]}>Comment</Link>
                            </div>
                        </section>
                    </section>
                </article>
            </div>
        </div>
        {onLikesClicked && <Likes onModalClose={onModalCloseLikes} post={postWithRelatedLikes}/>}
        </>
    )
}