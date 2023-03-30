
import styles from "./profile-post.module.css"

export default function ProfilePost({
    post,
    onClickPhoto}){

    return (
       
            <img className={styles["profile-post-image"]} src={`http://localhost:7070/${post.image}`} alt="post" onClick={e => onClickPhoto(e, post)} />
       
    )
}