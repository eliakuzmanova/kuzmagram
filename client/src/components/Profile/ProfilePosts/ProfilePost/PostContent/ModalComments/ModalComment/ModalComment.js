import styles from "./modal-comment.module.css";
import { HiOutlineHeart } from "react-icons/hi2";
import { Link } from "react-router-dom"

export default function ModalComment() {
    return (
        <>
            <div className={styles["comment-container"]}>
                <div className={styles["comment-user-container"]}>
                <img className={styles["comment-user-image"]} src={require("../../../../../../../images/dog.jpg")} alt="user" />
                <p className={styles["comment"]}><Link className={styles["comment-username"]}>username</Link> Comment</p>
                </div>
                
                <HiOutlineHeart className={styles["comment-like-icon"]} />
            </div>

            <div className={styles["comment-container"]}>
                <div className={styles["comment-user-container"]}>
                <div className={styles["comment-user-image-container"]}>
                <img className={styles["comment-user-image"]} src={require("../../../../../../../images/dog.jpg")} alt="user" />
                </div>
                <p className={styles["comment"]}><Link className={styles["comment-username"]}>username</Link> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, culpa nam, at ipsa sed recusandae tempora assumenda nesciunt maiores numquam, dolorum totam ea modi? Similique cupiditate accusamus officia non provident?</p>
                </div>
                
                <HiOutlineHeart className={styles["comment-like-icon"]} />
            </div>
             <div className={styles["comment-container"]}>
                <div className={styles["comment-user-container"]}>
                <img className={styles["comment-user-image"]} src={require("../../../../../../../images/dog.jpg")} alt="user" />
                <p className={styles["comment"]}><Link className={styles["comment-username"]}>username</Link> Comment</p>
                </div>
                
                <HiOutlineHeart className={styles["comment-like-icon"]} />
            </div>
        </>
    )
}