import styles from "./edit-post.module.css"
import { HiOutlineXMark } from "react-icons/hi2";

import { Link } from "react-router-dom";
import { useState } from "react";

import * as postService from "../../services/postService";
import { useAuthContext } from '../../contexts/AuthContext';

export default function EditPost({
    post,
    onCloseModalEdit
}) {
    const [postDescription, setPostDescription] = useState(post.description)
    const { userImage, userUsername } = useAuthContext()

    function onChangeDescription(e) {
        e.preventDefault()
        setPostDescription(e.target.value)
    }

    async function onEditClick(e) {
        e.preventDefault()
       
        await postService.updatePost(post._id, postDescription)
       
        onCloseModalEdit(e, postDescription)
    }

    async function onDeleteClick(e) {
        e.preventDefault()
        try {
            await postService.deletePost(post._id)
            onCloseModalEdit(e, "", true)
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className={styles["modal"]}>
            <HiOutlineXMark className={styles["close-btn"]} onClick={onCloseModalEdit} />
            <div className={styles["modal-content"]}>
                <div className={styles["header"]}>
                    <p className={styles["edit-text"]}>Edit post</p>
                </div>
                <div className={styles["post"]}>
                    <section className={styles["image-section"]}>
                        <img className={styles["image"]} src={`http://localhost:7070/${post.image}`} alt="post" />
                    </section>

                    <section className={styles["post-information-side"]}>
                        <section className={styles["user-section"]}>
                            <div className={styles["user-container"]}>
                                <img className={styles["user-photo"]} src={userImage ? userImage : require("../../images/user-profile-image.png")} alt="owner" />
                                <Link className={styles["username"]}>{userUsername}</Link>
                            </div>

                        </section>
                        <div className={styles["description-container"]}>
                            <textarea className={styles["description"]} name="description" id="description" maxLength="150" placeholder="Enter your description....." value={postDescription} onChange={onChangeDescription}></textarea>
                        </div>

                        <div className={styles["edit-btn-container"]}>
                            <button className={`${post.description === postDescription ? styles["disabled-btn"] : styles["edit-btn"]}`} disabled={post.description === postDescription ? true : false} onClick={onEditClick}>Edit</button>
                        </div>
                        <div className={styles["other-btns-container"]}>
                            <button className={styles["delete-btn"]} onClick={onDeleteClick}>Delete</button>
                            <button className={styles["cancel-btn"]} onClick={onCloseModalEdit}>Cancel</button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}