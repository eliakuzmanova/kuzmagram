import { Link } from "react-router-dom"
import styles from "./suggestion.module.css";

export default function Suggestion() {
    return (
        <div className={styles["suggestion-profile-container"]}>
            <div className={styles["suggestion-profile-info-container"]}>
                <img className={styles["suggestion-photo"]} src={require("./../../../../../images/couple.jpg")} alt="profile" />
                <p className={styles["suggestion-username"]}>username</p>
            </div>
            <Link className={styles["suggestion-follow"]}>Follow</Link>
        </div>
    )
}