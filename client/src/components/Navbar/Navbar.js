import { Link } from "react-router-dom"
import styles from "./navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles["navbar"]}>
            <ul className={styles["ul-nav"]}>
                <span className={styles["logo"]}>Kuzmagram</span>
                <li className={styles["li-nav"]}>
                    <Link className={styles["link"]} to={"/"}>Home</Link>
                </li>
                <li className={styles["li-nav"]}>
                    <Link className={styles["link"]} to={"/notifications"}>Notification</Link>
                </li>
                <li className={styles["li-nav"]}>
                    <Link className={styles["link"]} to={"/messages"}>Messages</Link>
                </li>
                <li className={styles["li-nav"]}>
                    <Link className={styles["link"]} to={"/search"}>Search</Link>
                </li>
                <li className={styles["li-nav"]}>
                    <Link className={styles["link"]} to={"/profile/:username"}>Profile</Link>
                </li>
                <li className={styles["li-nav"]}>
                    <Link className={`${styles["link"]} ${styles["logout"]}`} to={"/logout"}>Logout</Link>
                </li>
            </ul>
        </nav>
    )
}