import { useState } from "react"
import styles from "./profile-post.module.css"

// import {useNavigate} from "react-router-dom"

export default function ProfilePost({
    post,
    onClickPhoto}){
        const [image, setImage] = useState("")

    

    return(
     <img className={styles["profile-post-image"]} src={`http://localhost:7070/${post.image}`} alt="post" onClick={e => onClickPhoto(e,post) } />
    )
}