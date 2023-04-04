import styles from "./aside.module.css";

import { Link } from "react-router-dom"

import { useAuthContext } from '../../../contexts/AuthContext';
import Suggestions from "./Suggestions/Suggestions";

export default function AsideHome() {
    const {userUsername,userImage, userId} = useAuthContext()
   
    return (
        <aside className={styles["aside-home"]}>
            <div className={styles["profile-container"]}>
                <img className={styles["user-photo"]} src={userImage} alt="profile" />
                <Link to={`/profile/${userUsername}`} className={styles["user-username"]}>{userUsername}</Link>
            </div>
            
            <Suggestions userId={userId} />
        </aside>
    )
}