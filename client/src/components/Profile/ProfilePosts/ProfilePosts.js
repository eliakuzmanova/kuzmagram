import styles from "./profile-posts.module.css"
import ProfilePost from "./ProfilePost/ProfilePost"
const photo1 = require("./../../../images/couple.jpg")
const photo2 = require("./../../../images/girl.jpg")
const photo3 = require("./../../../images/dog.jpg")
const photo4 = require("./../../../images/city.jpg")
const photo5 = require("./../../../images/palms.jpg")
const photo6 = require("./../../../images/restaurant.jpg")
const photo7 = require("./../../../images/laptop.jpg")

const photos = [photo1, photo2 , photo3, photo4, photo5, photo6 , photo7, photo2 , photo3, photo4, photo5, photo6 , photo7, photo2 , photo3, photo4, photo5, photo6 , photo7, photo2 , photo3, photo4, photo5, photo6 , photo7, photo2 , photo3, photo4, photo5, photo6 , photo7]
export default function ProfilePosts(){
    let i = 0
    return(
<div className={styles["profile-posts-container"]}>
{photos.map(x => <ProfilePost key={i++} photo={x}/>)}

</div>
    )
}