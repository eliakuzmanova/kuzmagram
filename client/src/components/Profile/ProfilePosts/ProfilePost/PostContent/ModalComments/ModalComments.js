import styles from "./modal-comments.module.css";
import ModalComment from "./ModalComment/ModalComment";

export default function ModalComments() {
    return (
        <section className={styles["comments-container"]}>
            <ModalComment />
        </section>
    )
}