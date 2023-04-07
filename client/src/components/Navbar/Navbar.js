import styles from "./navbar.module.css";
import { IoHomeOutline } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";

import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"

import { NavContext } from "../../contexts/NavContext";
import { useAuthContext } from '../../contexts/AuthContext';


export default function Navbar() {
    const { navClicked, setNavClicked } = useContext(NavContext)
    const [isClicked, setIsClicked] = useState({
        profile: false,
        home: false
    })
    const { userUsername, userImage, onLogout } = useAuthContext()
    const location = useLocation();
    useEffect(() => {
        if(location.pathname === "/") {
            setIsClicked(state => ({...state, home:true}))
        } else if(location.pathname.startsWith("/profile/")) {
            setIsClicked(state => ({...state, profile:true}))
        }
  
    },[location])

    function onClickCreate(e) {
        e.preventDefault()
        setNavClicked(state => ({ ...state, createClicked: true }))
    }

    function onClickLogout(e) {
        e.preventDefault()
        onLogout()
    }

    return (
        <nav className={styles["navbar"]}>
            <Link to={"/"} className={styles["logo"]}>Kuzmagram</Link>
            <ul className={styles["ul-nav"]}>

                <li className={styles["li-nav"]}>
                    {isClicked.home
                        ? <IoHomeSharp className={styles["nav-icon"]} />
                        : <IoHomeOutline className={styles["nav-icon"]} />
                    }

                    <Link className={`${styles["link"]} ${isClicked.home ? styles["link-clicked"] : ""}`} to={"/"}>Home</Link>
                </li>
                <li className={styles["li-nav"]}>
                    {navClicked.createClicked
                        ? <IoAddCircle className={styles["nav-icon"]} />
                        : <IoAddCircleOutline className={styles["nav-icon"]} />
                    }

                    <Link className={`${styles["link"]} ${navClicked.createClicked ? styles["link-clicked"] : ""}`} onClick={onClickCreate}>Create</Link>
                </li>
                <li className={styles["li-nav"]}>

                    <Link className={`${styles["link-image"]} ${isClicked.profile ? styles["link-image-clicked"] : ""} `} to={`/profile/${userUsername}`}> <img className={`${styles["nav-image"]} ${isClicked.profile ? styles["nav-image-clicked"] : ""}`} src={userImage} alt="profile" /> Profile</Link>
                </li>

            </ul>

            <Link className={`${styles["link"]} ${styles["logout"]}`} onClick={onClickLogout}>Logout</Link>

        </nav>
    )
}