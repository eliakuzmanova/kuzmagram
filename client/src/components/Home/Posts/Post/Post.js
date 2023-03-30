
import { HiOutlineBookmark } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import  Comments  from "./../../../Comments/Comments";
import { Link } from "react-router-dom"
import styles from "./post.module.css";


export default function Post({post}) {
    return (

        <article className={styles["post"]}>
            <section className={styles["user-section"]}>
                <div className={styles["user-container"]}>
                    <img className={styles["user-image"]} src={post.owner.image ? `http://localhost:7070/${post.owner.image}` : require("../../../../images/user-profile-image.png")} alt="user" />
                    <Link className={styles["user-username"]}>{post.owner.username}</Link>
                </div>

            </section>
            <section className={styles["post-image-section"]}>
                <img className={styles["post-image"]} src={`http://localhost:7070/${post.image}`} alt="post" />
            </section>
            <section className={styles["icons-section"]}>
                <div className={styles["actions-container"]}>

                    <HiOutlineHeart className={styles["icon"]} />

                    <HiOutlineChatBubbleOvalLeft className={`${styles["icon"]} ${styles["icon-message"]}`} />

                </div>
                <div className={styles["last-icon-container"]}>
                    <HiOutlineBookmark className={styles["icon"]} />
                </div>
            </section>
            <section className={styles["comments-section"]}>
                <div className={styles["text-likes-container"]}>
                    <p className={styles["text-likes"]}>Some <b>{post.likes.length}</b> like that</p>
                </div>
                <div className={styles["description-container"]}>
                    
                    <p className={styles["description"]}> <Link className={styles["username-description"]}>{post.owner.username} </Link>{post.description}</p>
                </div>
                
               <Comments />
                <div className={styles["textarea-container"]}>
                    <textarea className={styles["textarea"]} name="comment-area" id="comment-area" maxLength="50" placeholder="Comment..."></textarea>
                    <Link className={styles["comment-btn"]}>Comment</Link>
                </div>
            </section>

        </article>
    )
}