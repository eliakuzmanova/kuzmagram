import styles from "./comments.module.css";
import Comment from "./Comment/Comment";

export default function Comments() {
    return(
        <div className={styles["comments-container"]}>
       <Comment />
    </div>
    )
}