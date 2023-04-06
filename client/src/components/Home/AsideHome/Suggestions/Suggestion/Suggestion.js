import styles from "./suggestion.module.css";

import { Link } from "react-router-dom"

export default function Suggestion({
    user
}) {
    return (
        <div className={styles["suggestion-profile-container"]}>
            <div className={styles["suggestion-profile-info-container"]}>
                <img className={styles["suggestion-photo"]} src={user.image ? `https://kuzmagram-api.onrender.com/${user.image}` : require("../../../../../images/user-profile-image.png")} alt="profile" />
                <Link to={`/profile/${user.username}`} className={styles["suggestion-username"]}>{user.username}</Link>
            </div>
         
        </div>
    )
}