import styles from "./post-content.module.css"
import ModalComments from "./ModalComments/ModalComments"
import { Link } from "react-router-dom"
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { HiOutlineBookmark } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";

export default function PostContent({
    onModalClose
}) {

    return (
        <div className={styles["modal"]}>
            <HiOutlineXMark className={styles["close-btn"]} onClick={onModalClose} />
            <div className={styles["modal-content"]}>

                <article className={styles["post"]}>
                    <section className={styles["image-section"]}>
                        <img className={styles["image"]} src={require("../../../../../images/couple.jpg")} alt="post" />
                    </section>

                    <section className={styles["post-information-side"]}>
                        <section className={styles["user-section"]}>
                            <div className={styles["user-container"]}>
                                <img className={styles["user-photo"]} src={require("../../../../../images/profil.jpg")} alt="" />
                                <Link className={styles["username"]}>username</Link>
                            </div>
                            <HiEllipsisHorizontal className={styles["user-section-icon"]} />
                        </section>
                        <div className={styles["description-container"]}>
                            <div className={styles["description-user-image-container"]}>
                            <img className={styles["description-user-image"]} src={require("../../../../../images/dog.jpg")} alt="user" />
                            </div>
                            
                            <p className={styles["description"]}> <Link className={styles["username-description"]}>username</Link> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore cumque dolorem ea explicabo totam alias aut, voluptatem maiores saepe quaerat, veniam sit vitae eligendi molestias, illum nobis assumenda magni at. </p>
                        </div>
                        <ModalComments />

                        <section className={styles["icons-section"]}>
                            <div className={styles["actions-container"]}>

                                <HiOutlineHeart className={styles["icon"]} />

                                <HiOutlineChatBubbleOvalLeft className={`${styles["icon"]} ${styles["icon-message"]}`} />

                            </div>
                            <div className={styles["last-icon-container"]}>
                                <HiOutlineBookmark className={styles["icon"]} />
                            </div>
                        </section>
                        <section className={styles["comments-area-section"]}>
                            <div className={styles["text-likes-container"]}>
                                <p className={styles["text-likes"]}>Some <b>people</b> like that</p>
                            </div>

                            <div className={styles["textarea-container"]}>
                                <textarea className={styles["textarea"]} name="comment-area" id="comment-area" maxlength="50" placeholder="Comment..."></textarea>
                                <Link className={styles["comment-btn"]}>Comment</Link>
                            </div>
                        </section>
                    </section>
                </article>
            </div>
        </div>
    )
}