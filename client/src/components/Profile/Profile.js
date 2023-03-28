import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import styles from "./profile.module.css"
import { Link, useParams } from "react-router-dom"
// import { HiOutlineBookmark } from "react-icons/hi2";
import { BsGrid3X3Gap } from "react-icons/bs";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import { useAuthContext } from '../../contexts/AuthContext';
import { useEffect, useState } from "react";
import * as userService from "../../services/userService";
import { ProfileContext } from "../../contexts/ProfileContext";

export default function Profile({
    postCreated
}) {
    const [user, setUser] = useState({
        "_id": "",
        username: "",
        email: "",
        image: "",
        description: "",
        posts: "",
        followers: "",
        follow: "",

    })
    const { username } = useParams()
    const { userUsername, userId } = useAuthContext()

    useEffect(() => {
        const fetchUser = async () => {
            const userInfo = await userService.getOneUserWithRelations(username)
            console.log(userInfo);
            setUser(state => ({ ...state, ...userInfo, posts: userInfo.posts.reverse() }))
        }
        fetchUser();

    }, [postCreated, username])
    const isOwner = username === userUsername

   async function onFollow(e) {
        e.preventDefault()
        let updatedUser;
        if(!user.followers.includes(userId)) {
           updatedUser = await userService.addFollower(user.email,userId) 
        } else {
           updatedUser = await userService.removeFollower(user.email,userId)
        }
        setUser(state => ({ ...state, ...updatedUser,posts: updatedUser.posts.reverse()}))
    }

    return (
        <ProfileContext.Provider value={user} >
            <div className={styles["profile-container"]}>
                <header className={styles["profile-header"]}>
                    <Navbar />
                </header>
                <main className={styles["profile-main"]}>
                    <div className={styles["profile-all-info-container"]}>
                        <div className={styles["profile-photo-container"]}>
                            <img className={styles["profile-photo"]} src={user.image ? `http://localhost:7070/${user.image}` : require("../../images/user-profile-image.png")} alt="profile" />
                        </div>
                        <div className={styles["profile-info"]}>
                            <div className={styles["profile-options"]}>
                                <p className={styles["profile-username"]}>{username}</p>
                                {isOwner ? <Link to={"/profile/edit"} className={styles["profile-info-button"]}>Edit profile</Link>
                                    : <button className={styles["profile-info-button"]} onClick={onFollow} >{user.followers.includes(userId) ? "Unfollow" : "Follow"}</button>}


                            </div>
                            <div className={styles["profile-followers"]}>
                                <p className={styles["profile-followers-text"]}><b>{user.posts.length}</b> Posts</p>
                                <Link className={styles["profile-followers-link"]}><b>{user.followers.length}</b> Followers</Link>
                                <Link className={styles["profile-followers-link"]}><b>{user.follow.length}</b> Followed</Link>
                            </div>
                            <div className={styles["profile-description-container"]}>
                                <p className={styles["profile-description"]}>{user.description}</p>
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
                        {user.posts.length ?
                            <ProfilePosts posts={user.posts} />
                            : <div className={styles["no-posts-container"]}>
                                <p className={styles["no-posts"]}>There are no posts from this user yet</p>
                            </div>
                        }

                    </div>

                    <Footer />
                </main>
            </div>
        </ProfileContext.Provider>
    )
}