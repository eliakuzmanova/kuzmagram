import styles from "./followers.module.css"
import { HiOutlineXMark } from "react-icons/hi2";

import Follower from "./Follower/Follower";

export default function Followers({
    onModalClose,
    text,
    user
}) {
   
    return (
        <div className={styles["modal"]}>
            <div className={styles["modal-content"]}>
                <div className={styles["followers-container"]}>
                    <div className={styles["header-container"]}>
                        <div className={styles["text-container"]}>
                            <p className={styles["text"]}>{text}</p>
                        </div>
                        <div className={styles["close-btn-container"]}>
                            < HiOutlineXMark className={styles["close-btn"]} onClick={onModalClose} />
                        </div>
                    </div>

                    <div className={styles["profiles-container"]}>
                        {text == "Followers"
                        ? user.followers.map(f => <Follower key={f._id} profile={f} onModalClose={onModalClose}/>)
                        : user.follow.map(f => <Follower key={f._id} profile={f} onModalClose={onModalClose}/>)
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}