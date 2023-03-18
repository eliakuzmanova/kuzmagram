import styles from "./profile-post.module.css"
// import {useNavigate} from "react-router-dom"

export default function ProfilePost({
    photo,
    onClickPhoto}){
    // const navigate = useNavigate()
    

    return(
     <img className={styles["profile-post-image"]} src={photo} alt="post" onClick={onClickPhoto} />
    )
}