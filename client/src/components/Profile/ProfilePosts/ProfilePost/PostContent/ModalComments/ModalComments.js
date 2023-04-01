import styles from "./modal-comments.module.css";
import ModalComment from "./ModalComment/ModalComment";

export default function ModalComments({
    post
}) {
    return (
        <section className={styles["comments-container"]}>
            {post.comments.length 
            ? post.comments.map(c => <ModalComment key={c._id} comment={c}/> )
            : <div className={styles["container-no-comments"]}>
            <h1 className={styles["h-no-comments"]}>No comments yet</h1>
             <p className={styles["p-no-comments"]}>Start the conversation</p>
            </div>
            }
           
        </section>
    )
}