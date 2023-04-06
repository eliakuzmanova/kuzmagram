import styles from "./profile-post.module.css"

export default function ProfilePost({
    post,
    onClickPhoto }) {

    return (
        <img className={styles["profile-post-image"]} src={`https://kuzmagram-api.onrender.com/${post.image}`} alt="post" onClick={e => onClickPhoto(e, post)} />
    )
}