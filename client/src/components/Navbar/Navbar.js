import { Link } from "react-router-dom"
import styles from "./navbar.module.css";

// import { HiOutlineHome } from "react-icons/hi2";
// import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
// import { HiOutlineHeart } from "react-icons/hi2";
// import { IoPaperPlaneOutline } from "react-icons/io5";
// import { IoAddCircleOutline } from "react-icons/io5";

import { SlHeart } from "react-icons/sl";
import { SlHome } from "react-icons/sl";
import { SlMagnifier } from "react-icons/sl";
import { SlPaperPlane } from "react-icons/sl";
import { SlPlus } from "react-icons/sl";

export default function Navbar({setCreateClicked}) {
   

    function onClickCreate(e) {
        setCreateClicked(true)
       
        // navigate("/post/:postId")
        //add more logic
    }

    return (
        <nav className={styles["navbar"]}>
            <span className={styles["logo"]}>Kuzmagram</span>
            <ul className={styles["ul-nav"]}>

                <li className={styles["li-nav"]}>
                    <SlHome className={styles["nav-icon"]}/>
                    <Link className={styles["link"]} to={"/"}>Home</Link>
                </li>
                <li className={styles["li-nav"]}>
                    <SlHeart className={styles["nav-icon"]}/>
                    <Link className={styles["link"]} to={"/notifications"}>Notification</Link>
                </li>
                <li className={styles["li-nav"]}>
                <SlPaperPlane className={styles["nav-icon"]}/>
                    <Link className={styles["link"]} to={"/messages"}>Messages</Link>
                </li>
                <li className={styles["li-nav"]}>
                    <SlMagnifier className={styles["nav-icon"]}/>
                    <Link className={styles["link"]} to={"/search"}>Search</Link>
                </li>
                <li className={styles["li-nav"]}>
                    <SlPlus className={styles["nav-icon"]}/>
                    <Link className={styles["link"]} onClick={onClickCreate}>Create</Link>
                </li>
                <li className={styles["li-nav"]}>
                    <img className={styles["nav-image"]} src={require("./../../images/profil.jpg")} alt="profile" />
                    <Link className={styles["link"]} to={"/profile/:username"}>Profile</Link>
                </li>

            </ul>
           
                <Link className={`${styles["link"]} ${styles["logout"]}`} to={"/logout"}>Logout</Link>
            
        </nav>
    )
}