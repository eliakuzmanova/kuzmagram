import styles from "./profile.module.css"
import { BsGrid3X3Gap } from "react-icons/bs";

import { Link, useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

import { useAuthContext } from '../../contexts/AuthContext';
import { ProfileContext } from "../../contexts/ProfileContext";

import * as userService from "../../services/userService";
import Followers from "./Followers/Followers";
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import GuestNavBar from "../GuestNavBar/GuestNavBar";

export default function Profile() {
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
    const navigate = useNavigate()
    const { username } = useParams()
    const { userUsername, userId, isAuthenticated } = useAuthContext()

    const [followersClicked, setFollowersClicked] = useState(false)
    const [followedClicked, setFollowedClicked] = useState(false)

    useEffect(() => {

        const fetchUser = async () => {
            try {
                const userInfo = await userService.getOneUserWithRelations(username)
                setUser(state => ({ ...state, ...userInfo, description: userInfo.description, image: userInfo.image, posts: userInfo.posts.reverse() }))
            } catch (error) {
                console.log(error);
            }
        }
        fetchUser();

    }, [username])

    const isFollower = user.followers.length ? user.followers.filter(f => f._id === userId) : false
    const isOwner = username === userUsername

    async function onFollow(e) {
        e.preventDefault()
        try {
            let updatedUser;

            if (!isFollower) {
                updatedUser = await userService.addFollower(user.email, userId)
            } else {
                updatedUser = await userService.removeFollower(user.email, userId)
            }

            setUser(state => ({ ...state, ...updatedUser, posts: updatedUser.posts.reverse() }))
        } catch (error) {
            console.log(error);
        }
    }

    function onFollowers(e) {
        e.preventDefault();
        if (user.followers.length > 0) {
            setFollowersClicked(true)
        }
    }

    function onFollowed(e) {
        e.preventDefault();
        if (user.follow.length > 0) {
            setFollowedClicked(true)
        }

    }

    function onModalClose(e, username) {
        e.preventDefault()

        if (followersClicked) {
            setFollowersClicked(false)
        } else if (followedClicked) {
            setFollowedClicked(false)
        }

        if (username) {
            navigate(`/profile/${username}`)
        }

    }
    return (
        <ProfileContext.Provider value={user} >
            <div className={`${isAuthenticated ? styles["profile-container"] : styles["profile-container-guest"]}`}>
                {isAuthenticated
                    ? <header className={styles["profile-header"]}>
                        <Navbar />
                    </header>
                    : <header className={styles["guest-header"]}>
                        <GuestNavBar />
                    </header>
                }
                <main className={`${isAuthenticated ? styles["profile-main"] : styles["profile-main-guest"]} `}>
                    <div className={styles["profile-all-info-container"]}>
                        <div className={styles["profile-photo-container"]}>
                            <img className={styles["profile-photo"]} src={user.image ? `http://localhost:7070/${user.image}` : require("../../images/user-profile-image.png")} alt="profile" />
                        </div>
                        <div className={styles["profile-info"]}>
                            <div className={styles["profile-options"]}>
                                <p className={styles["profile-username"]}>{username}</p>
                                {isAuthenticated &&
                                    <>
                                        {isOwner
                                            ? <Link to={"/profile/edit"} className={styles["profile-info-button"]} > Edit profile</Link>
                                            : <button className={styles["profile-info-button"]} onClick={onFollow} >{isFollower ? "Unfollow" : "Follow"}</button>}
                                    </>
                                }
                            </div>
                            <div className={styles["profile-followers"]}>
                                <p className={styles["profile-followers-text"]}><b>{user.posts.length}</b> Posts</p>
                                <Link className={styles["profile-followers-link"]} onClick={onFollowers} ><b>{user.followers.length}</b> Followers</Link>
                                <Link className={styles["profile-followers-link"]} onClick={onFollowed} ><b>{user.follow.length}</b> Followed</Link>
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
            </div >
            {(followedClicked || followersClicked) && <Followers onModalClose={onModalClose} text={followersClicked ? "Followers" : "Followed"} user={user} />
            }
        </ProfileContext.Provider >
    )
}