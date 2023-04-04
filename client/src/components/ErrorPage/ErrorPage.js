import styles from "./error-page.module.css";

import { Link } from "react-router-dom";

export default function ErrorPage() {
 return(
    <div className={styles["error-page-container"]}>
        <div className={styles["error-404-container"]}>
        <h1 className={styles["error-404"]}>404</h1>
        </div>
       <div className={styles["error-text-container"]}>
        <p className={styles["error-text"]}>The page you were looking for does nox exist...</p>
        </div>
        <div className={styles["error-btn-container"]}>
            <Link to={"/"}className={styles["error-btn"]} >Go Home</Link>
        </div>
    </div>
 )
}