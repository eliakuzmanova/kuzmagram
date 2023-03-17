import styles from "./profile-post.module.css"

export default function ProfilePost({photo}){
    return(
     <img className={styles["profile-post-image"]} src={photo} alt="post" />
    )
}