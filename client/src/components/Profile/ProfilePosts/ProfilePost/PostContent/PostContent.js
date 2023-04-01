import styles from "./post-content.module.css"
import ModalComments from "./ModalComments/ModalComments"
import { Link , useNavigate} from "react-router-dom"
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import { useEffect, useState} from "react"
import EditPost from "../../../../EditPost/EditPost"
import { useAuthContext } from '../../../../..//contexts/AuthContext';
import * as postService from "../../../../../services/postService"
import * as userService from "../../../../../services/userService"
import Likes from "../../../../Likes/Likes";

export default function PostContent({
    onModalClose,
    clickedPost
}) {

    const { userId, userUsername} = useAuthContext()
  
    const [user, setUser] = useState("")
    const [comment, setComment] = useState("")
    const [heartClicked, setHeartClicked] = useState(false)
    const [postLikes, setPostLikes] = useState(clickedPost.likes)
    const [post, setPost] = useState(clickedPost)
    const [onLikesClicked, setOnLikesClicked] = useState(false)
    const [onEditClicked, setOnEditClicked] = useState(false)
    const [postWithRelatedLikes, setPostWithRelatedLikes] = useState("")
    const navigate = useNavigate()

    useEffect(() => {

        const fetchComments = async () => {
         
           const fetchedPost = await postService.getPostWithComments(clickedPost._id)
           const userInfo = await userService.getOneById(fetchedPost.owner.toString())
           setUser(state => ({ ...state, ...userInfo }))
           setPost(state => ({...state,...fetchedPost }))
        }
        fetchComments()
        if (postLikes.includes(userId)) {

            setHeartClicked(true)
        } else {

            setHeartClicked(false)
        }
    }, [userId, postLikes, clickedPost._id])

    const isOwner = user._id === userId
    function onChangeComment(e) {
        e.preventDefault()
        setComment(e.target.value)

    }

    async function onClickComment(e) {
        e.preventDefault()
 
     const commentedPost = await postService.postComment(comment, userId, post._id)

      setPost(state => ({...state,...commentedPost }))
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
       if(postLikes.length) {
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

    function onEditClick(){
        setOnEditClicked(true)
    }

    function onCloseModalEdit(e,descr, isDelete){
        setOnEditClicked(false)

        if(descr){
            setPost(state => ({...state,description:descr }))
        }
        if(isDelete){
            navigate(`/`)
            onModalClose()
 
        }
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
                                <img className={styles["user-photo"]} src={user.image ? `http://localhost:7070/${user.image}` : require("../../../../../images/user-profile-image.png")} alt="owner" />
                                <Link className={styles["username"]}>{user.username}</Link>
                            </div>
                            {isOwner && <HiEllipsisHorizontal className={styles["user-section-icon"]} onClick={onEditClick} />}
                        </section>
                        {post.description &&
                        <div className={styles["description-container"]}>
                            <div className={styles["description-user-image-container"]}>
                                <img className={styles["description-user-image"]} src={user.image ? `http://localhost:7070/${user.image}` : require("../../../../../images/user-profile-image.png")} alt="user" />
                            </div>
                             <p className={styles["description"]}> <Link className={styles["username-description"]}>{user.username}</Link> {post.description} </p>
                        </div> }
                        <ModalComments post={post} />


                        <section className={styles["icons-section"]}>
                            <div className={styles["actions-container"]}>

                                <HiOutlineHeart className={heartClicked ? styles["icon-heart-clicked"] : styles["icon-heart"]} onClick={onLike} />

                            </div>

                        </section>
                        <section className={styles["comments-area-section"]}>
                        <div className={`${postLikes.length ? styles["text-likes-container"] : styles["text-no-likes-container"]}`}>
                            <p className={styles["text-likes"]} onClick={onLikes}><b>{postLikes.length}</b> people like that</p>
                            </div>

                            <div className={styles["textarea-container"]}>
                                <textarea className={styles["textarea"]} name="comment-area" id="comment-area" maxLength="150" placeholder="Comment..." value={comment} onChange={onChangeComment}></textarea>
                                <Link className={styles["comment-btn"]} onClick={onClickComment} >Comment</Link>
                            </div>
                        </section>
                    </section>
                </article>
            </div>
        </div>
        {onLikesClicked && <Likes onModalClose={onModalCloseLikes} post={postWithRelatedLikes}/>}
        {onEditClicked && <EditPost post={post} onCloseModalEdit={onCloseModalEdit}  />}
        </>
    )
}