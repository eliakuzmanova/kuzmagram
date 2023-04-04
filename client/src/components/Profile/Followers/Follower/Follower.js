import styles from "./follower.module.css"

import { Link } from "react-router-dom"

export default function Follower({
    profile,
    onModalClose
}) {

    function onClickFollower(e) {
        e?.preventDefault()
        onModalClose(e,profile.username)
    }
    return(
        // <div className={styles["user-container"]}>
            <div className={styles["user-info-container"]}>
                <img className={styles["image"]} src={profile.image ? `http://localhost:7070/${profile.image}` : require("../../../../images/user-profile-image.png")} alt="profile" />
                <Link onClick={onClickFollower} className={styles["username"]}>{profile.username}</Link>
            </div>
        // </div>
    )
}