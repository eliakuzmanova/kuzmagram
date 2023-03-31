import { Link } from "react-router-dom"
import styles from "./aside.module.css";
import Suggestions from "./Suggestions/Suggestions";
import { useAuthContext } from '../../../contexts/AuthContext';


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