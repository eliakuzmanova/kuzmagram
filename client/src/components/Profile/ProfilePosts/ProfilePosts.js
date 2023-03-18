import styles from "./profile-posts.module.css"
import ProfilePost from "./ProfilePost/ProfilePost"
import { useState } from "react"
import PostContent from "./ProfilePost/PostContent/PostContent"

const photo1 = require("./../../../images/couple.jpg")
const photo2 = require("./../../../images/girl.jpg")
const photo3 = require("./../../../images/dog.jpg")
const photo4 = require("./../../../images/city.jpg")
const photo5 = require("./../../../images/palms.jpg")
const photo6 = require("./../../../images/restaurant.jpg")
const photo7 = require("./../../../images/laptop.jpg")

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo2, photo3, photo4, photo5, photo6, photo7, photo1, photo3, photo4, photo5, photo6, photo7, ]

export default function ProfilePosts() {
    const [btnClicked, setBtnClicked] = useState(false)

    function onClickPhoto(e) {
        setBtnClicked(true)
       
        // navigate("/post/:postId")
        //add more logic
    }

    function onModalClose() {
        setBtnClicked(false)
        
    }

    let i = 0

    return (
        <>
            <div className={styles["profile-posts-container"]}>
                {photos.map(x => <ProfilePost key={i++} photo={x} onClickPhoto={onClickPhoto} />)}

            </div>
            <>
                {btnClicked && <PostContent onModalClose={onModalClose} />}
            </>
        </>
    )
}