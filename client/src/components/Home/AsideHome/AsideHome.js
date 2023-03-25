import { Link } from "react-router-dom"
import styles from "./aside.module.css";
import Suggestions from "./Suggestions/Suggestions";
import { useAuthContext } from '../../../contexts/AuthContext';

export default function AsideHome() {
    const {userUsername,userImage} = useAuthContext()
    return (
        <aside className={styles["aside-home"]}>
            <div className={styles["profile-container"]}>
                <img className={styles["user-photo"]} src={`http://localhost:7070/${userImage}`} alt="profile" />
                <Link className={styles["user-username"]}>{userUsername}</Link>
            </div>
            <Suggestions />
        </aside>
    )
}