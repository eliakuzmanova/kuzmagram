import { Link } from "react-router-dom"
import styles from "./aside.module.css";
import Suggestions from "./Suggestions/Suggestions";

export default function AsideHome() {
    return (
        <aside className={styles["aside-home"]}>
            <div className={styles["profile-container"]}>
                <img className={styles["user-photo"]} src={require("../../../images/girl.jpg")} alt="profile" />
                <Link className={styles["user-username"]}>username</Link>
            </div>
            <Suggestions />
        </aside>
    )
}