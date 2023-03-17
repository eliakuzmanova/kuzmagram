import { Link } from "react-router-dom"
import styles from "./aside.module.css";

export default function AsideHome() {
    return (
        <aside className={styles["aside-home"]}>
            <div className={styles["profile-container"]}>
                <img className={styles["user-photo"]} src={require("../../../images/girl.jpg")} alt="profile" />
                <Link className={styles["user-username"]}>username</Link>
            </div>
            <div className={styles["suggestion-text-container"]}>
                <p className={styles["suggestion-text"]}>Suggestions for you</p>
            </div>
            <div className={styles["suggestion-container"]}>
                <div className={styles["suggestion-profile-container"]}>
                    <div className={styles["suggestion-profile-info-container"]}>
                        <img className={styles["suggestion-photo"]} src={require("../../../images/couple.jpg")} alt="profile" />
                        <p className={styles["suggestion-username"]}>username</p>
                    </div>
                    <Link className={styles["suggestion-follow"]}>Follow</Link>
                </div>
            </div>
        </aside>
    )
}