import styles from "./like.module.css"

import { Link } from "react-router-dom"

export default function Like({profile}) {
    return(
        // <div className={styles["user-container"]}>
            <div className={styles["user-info-container"]}>
                <img className={styles["image"]} src={profile.image ? `http://localhost:7070/${profile.image}` : require("../../../images/user-profile-image.png")} alt="profile" />
                <Link to={`/profile/${profile.username}`} className={styles["username"]}>{profile.username}</Link>
            </div>
        // </div>
    )
}