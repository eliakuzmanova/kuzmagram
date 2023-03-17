
import styles from "./register.module.css";

import { Link } from "react-router-dom"
import Footer from "../Footer/Footer";

export default function Register() {

    return (
        <div className={styles["top-container"]}>
            <main className={styles["main"]}>
                <div className={styles["register-wrapper"]}>
                    <div className={styles["div-logo"]}>
                        <h1 className={styles["logo"]}>Kuzmagram</h1>
                        <p className={styles["text"]}>Sign up to see your friends' photos and videos, or just to chat with them.</p>
                    </div>
                    <div className={styles["line"]}></div>
                    <form className={styles["form"]} action="/register" method="POST">

                        <label className={styles["label"]} htmlFor="username">Username</label>
                        <input className={styles["input"]} type="text" name="username" id="username" placeholder="example7" />

                        <label className={styles["label"]} htmlFor="email">Email</label>
                        <input className={styles["input"]} type="text" name="email" id="email" placeholder="example@gmail.com" />

                        <label className={styles["label"]} htmlFor="password">Password</label>
                        <input className={styles["input"]} type="password" name="password" id="password" placeholder="********" />
                            
                            <div className={styles["container-btn"]}>
                            <button className={styles["btn"]} type="button">Register</button>
                            </div>
                        <div className={styles["container-sign-in"]}>
                        <p className={styles["paragraph-account"]}>You have an account?</p>
                        <Link className={styles["sign-in"]} to="/login">Sign in</Link>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    )
}