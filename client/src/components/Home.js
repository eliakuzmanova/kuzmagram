import Footer from "./Footer";
import { Link } from "react-router-dom"
import styles from "../styles/home.module.css";

export default function Home() {
    return (
        <div className={styles["container-home"]}>
            <header>
                <nav className={styles["navbar"]}>
                    <ul >
                        <span className={styles["logo"]}>Kuzmagram</span>
                        <li>
                            <Link className={styles["link"]} to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link className={styles["link"]} to={"/notifications"}>Notification</Link>
                        </li>
                        <li>
                            <Link className={styles["link"]} to={"/messages"}>Messages</Link>
                        </li>
                        <li>
                            <Link className={styles["link"]} to={"/search"}>Search</Link>
                        </li>
                        <li>
                            <Link className={styles["link"]} to={"/:username"}>Profile</Link>
                        </li>
                        <li>
                            <Link className={`${styles["link"]} ${styles["logout"]}`} to={"/logout"}>Logout</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <p>Main Paragraph</p>
            </main>
            <aside>
                Aside section
            </aside>
            <Footer />
        </div>
    )
}