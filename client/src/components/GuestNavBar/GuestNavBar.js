import styles from "./guest-nav-bar.module.css"

import { Link } from "react-router-dom"

export default function GuestNavBar() {
    return (
        <>
            <div className={styles["logo-container"]}>
                <h1 className={styles["logo"]}>Kuzmagram</h1>
            </div>
            <div className={styles["btns-container"]}>
                <Link to={"/login"} className={styles["login-btn"]}>Login</Link>
                <Link to={"/register"} className={styles["register-btn"]}>Register</Link>
            </div>
        </>
    )
}