import Footer from "./Footer";
import { Link } from "react-router-dom"
import styles from "../styles/home.module.css";

export default function Home() {
    return (
        <>
            <header>
                <nav>
                    <span>Kuzmagram</span>
                    <ul><li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/notifications"}>Notification</Link>
                    </li>
                    <li>
                        <Link to={"/messages"}>Messages</Link>
                    </li>
                    <li>
                        <Link to={"/search"}>Search</Link>
                    </li>
                    <li>
                        <Link to={"/:username"}>Profile</Link>
                    </li>
                    <li>
                        <Link to={"/logout"}>Logout</Link>
                    </li></ul>
                </nav>
            </header>
            <main>
                <p>Main Paragraph</p>
            </main>
            <aside>
                Aside secion
            </aside>
            <Footer />
        </>
    )
}