import styles from "./comment.module.css";

import { Link } from "react-router-dom"

export default function Comment({comment}) {
    return (
        <>
            <div className={styles["comment-container"]}>
                <p className={styles["comment"]}><Link className={styles["comment-username"]}>{comment.owner.username}</Link> {comment.comment}</p>
              
            </div>

        </>
    )
}