import styles from "./modal-comment.module.css";
import { Link } from "react-router-dom"

export default function ModalComment({comment}) {

    return (
        <>
            <div className={styles["comment-container"]}>
                <div className={styles["comment-user-container"]}>
                <img className={styles["comment-user-image"]} src={comment.user.image ? `http://localhost:7070/${comment.user.image}` : require("../../../../../../../images/user-profile-image.png")} alt="user" />
                <p className={styles["comment"]}><Link className={styles["comment-username"]}>{comment.user.username}</Link> {comment.comment}</p>
                </div>
            </div>
        </>
    )
}