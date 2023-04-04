import styles from "./confirm.module.css"
import { HiOutlineXMark } from "react-icons/hi2";

import { useNavigate } from "react-router-dom";

import * as userService from "../../services/userService";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Confirm({
    onModalClose,
}) {
    const { onLogout, userId } = useAuthContext()

    const navigate = useNavigate()
    
    async function onDelete(e) {
        e.preventDefault();
    
        try {
            await userService.deleteUser(userId)
         
            onLogout()
          
            navigate("/register")
        } catch (error) {
            console.log(error);
        }
    }
    return (

        <div className={styles["modal"]}>
            <div className={styles["modal-content"]}>
                <div className={styles["confirm-container"]}>
                    <div className={styles["close-btn-container"]}>
                        < HiOutlineXMark className={styles["close-btn"]} onClick={onModalClose} />
                    </div>
                    <div className={styles["text-container"]}>
                        <p className={styles["text"]}>Are you sure you want to delete your profile?</p>
                    </div>
                    <div className={styles["btns-container"]}>
                        <button className={styles["delete-btn"]} type="button" onClick={onDelete}>Delete</button>
                        <button className={styles["cancel-btn"]} type="button" onClick={onModalClose}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}