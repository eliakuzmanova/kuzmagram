import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import styles from "./profile.module.css"
import { Link } from "react-router-dom"
import { HiOutlineBookmark } from "react-icons/hi2";
import { BsGrid3X3Gap } from "react-icons/bs";
import ProfilePosts from "./ProfilePosts/ProfilePosts";

export default function Profile() {
    return (
        <div className={styles["profile-container"]}>
            <header className={styles["profile-header"]}>
                <Navbar />
            </header>
            <main className={styles["profile-main"]}>
                <div className={styles["profile-all-info-container"]}>
                    <div className={styles["profile-photo-container"]}>
                        <img className={styles["profile-photo"]} src={require("../../images/girl.jpg")} alt="profile" />
                    </div>
                    <div className={styles["profile-info"]}>
                        <div className={styles["profile-options"]}>
                            <p className={styles["profile-username"]}>username</p>
                            <button className={styles["profile-info-button"]}>Edit profile</button>
                            {/* <button className={styles["profile-info-button"]}> Follow/Unfolow</button> */}
                        </div>
                        <div className={styles["profile-followers"]}>
                            <p className={styles["profile-followers-text"]}><b>10</b> Posts</p>
                            <Link className={styles["profile-followers-link"]}><b>20</b> Followers</Link>
                            <Link className={styles["profile-followers-link"]}><b>15</b> Followed</Link>
                        </div>
                        <div className={styles["profile-description-container"]}>
                            <p className={styles["profile-description"]}>Check out all my posts</p>
                        </div>
                    </div>
                </div>
                <div className={styles["profile-posts"]}>
                    <div className={styles["profile-content-option-container"]}>
                        {/* when clicked add style option-clicked */}
                        <Link className={styles["profile-content-option"]}>

                            <div className={styles["profile-content-option-container-icon"]}>
                                <BsGrid3X3Gap className={styles["profile-content-option-icon"]} />
                            </div>
                            <div className={styles["profile-content-option-container-text"]}>
                                <p className={styles["profile-content-option-text"]}>Posts</p>
                            </div>
                        </Link>


                        {/* <Link className={styles["profile-content-option"]}>
                        <HiOutlineBookmark className={styles["profile-content-option-icon"]}/>
                        <p className={styles["profile-content-option-text"]}>Saved</p>
                        </Link> */}
                    </div>
                   
                        <ProfilePosts />
                </div>

                <Footer />
            </main>
        </div>
    )
}