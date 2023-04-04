import styles from "./likes.module.css"
import { HiOutlineXMark } from "react-icons/hi2";

import Like from "./Like/Like";

export default function Likes({
    onModalClose,
    post
}) {

    return (
        <div className={styles["modal"]}>
            <div className={styles["modal-content"]}>
                <div className={styles["likes-container"]}>
                    <div className={styles["header-container"]}>
                        <div className={styles["text-container"]}>
                            <p className={styles["text"]}>Likes</p>
                        </div>
                        <div className={styles["close-btn-container"]}>
                            < HiOutlineXMark className={styles["close-btn"]} onClick={onModalClose} />
                        </div>
                    </div>

                    <div className={styles["profiles-container"]}>
                         {post.likes.map(l => <Like key={l._id} profile={l}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}