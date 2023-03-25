import { Link } from "react-router-dom"
import styles from "./navbar.module.css";
import { useEffect } from "react";


import { SlHeart } from "react-icons/sl";
import { SlHome } from "react-icons/sl";
import { SlMagnifier } from "react-icons/sl";
import { SlPaperPlane } from "react-icons/sl";
import { SlPlus } from "react-icons/sl";
import { NavContext } from "../../contexts/NavContext";
import { useContext } from "react";
import { useAuthContext } from '../../contexts/AuthContext';


export default function Navbar() {
    const setCreateClicked = useContext(NavContext)
 const {userUsername,userImage, onLogout, userId} = useAuthContext()

 console.log(userImage);

    function onClickCreate(e) {
        e.preventDefault()
         setCreateClicked(true)
    }

    function onClickLogout(e){
        e.preventDefault()
        onLogout()
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
                    
                    <Link className={styles["link-image"]} to={`/profile/${userUsername}`}> <img className={styles["nav-image"]} src={`http://localhost:7070/${userImage}`} alt="profile" /> Profile</Link>
                </li>

            </ul>
           
                <Link className={`${styles["link"]} ${styles["logout"]}`} onClick={onClickLogout}>Logout</Link>
            
        </nav>
    )
}