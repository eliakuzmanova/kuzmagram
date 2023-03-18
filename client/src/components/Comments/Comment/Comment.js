import styles from "./comment.module.css";
import { HiOutlineHeart } from "react-icons/hi2";
import { Link } from "react-router-dom"

export default function Comment() {
    return (
        <>
            <div className={styles["comment-container"]}>
                <p className={styles["comment"]}><Link className={styles["comment-username"]}>username</Link> Comment</p>
                <HiOutlineHeart className={styles["comment-like-icon"]} />
            </div>

        </>
    )
}