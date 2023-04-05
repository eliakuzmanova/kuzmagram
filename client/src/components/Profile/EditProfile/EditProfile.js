import styles from "./edit-profile.module.css"

import { useState } from "react";

import useForm from "../../../hooks/useForm";
import { useAuthContext } from "../../../contexts/AuthContext";
import Confirm from "../../Confirm/Confirm";
import Navbar from "../../Navbar/Navbar";

export default function EditProfile() {
    const { userUsername, userEmail, userDescription, userImage, userId, onEditProfile } = useAuthContext()
    const { formValues, onChangeHandler } = useForm({
        username: userUsername,
        email: userEmail,
        description: userDescription,
    });
    const [uploadImage, setUploadImage] = useState(userImage.slice(22,))
    const [deleteClicked, setDeleteClicked] = useState(false)

    const [areInputsCorrect, setAreInputsCorrect] = useState({
        username: "",
        email: "",
    })

    function isReadyForEdit() {
        let isReady = false;
        if ((formValues.username !== userUsername) || (formValues.email !== userEmail) || (formValues.description !== userDescription) || (uploadImage !== userImage)) {

            if (Object.values(areInputsCorrect).includes(styles["incorrect-input"])) {
                isReady = false;
            } else {
                isReady = true;
            }
        } else {
            isReady = false;
        }

        return isReady
    }

    function onClick(e) {
        e?.preventDefault()
        setAreInputsCorrect(state => ({ ...state, [e.target.name]: "" }))

    }

    function onBlurValidate(e) {
        e.preventDefault();

        if ((formValues.username !== userUsername) || (formValues.email !== userEmail) || (formValues.description !== userDescription) || (uploadImage !== userImage)) {

            if (e.target.name === "username") {

                if (/^[A-Za-z0-9_\.]{3,25}$/.test(formValues.username)) {
                    setAreInputsCorrect(state => ({ ...state, ["username"]: styles["correct-input"] }))
                } else {
                    setAreInputsCorrect(state => ({ ...state, ["username"]: styles["incorrect-input"] }))
                }

            } else if (e.target.name === "email") {

                if (/([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/
                    .test(formValues.email)) {
                    setAreInputsCorrect(state => ({ ...state, ["email"]: styles["correct-input"] }))
                } else {
                    setAreInputsCorrect(state => ({ ...state, ["email"]: styles["incorrect-input"] }))
                }

            }
        } else {
            return
        }
    }

    function onUploadImage(e) {
        e.preventDefault()
        setUploadImage(e.target.files[0])
    }

    async function onSubmitForm(e) {
        e.preventDefault()

        const formData = new FormData();
        formData.append("image", uploadImage);
        formData.append("userId", userId);
        formData.append("username", formValues.username);
        formData.append("email", formValues.email);
        formData.append("description", formValues.description);
        try {
            const post = await fetch("http://localhost:7070/profile/edit", {
                method: "POST",
                body: formData
            })

            onEditProfile(userId)
        } catch (error) {
            console.log(error);
        }
    }

    function onModalClose(e) {
        e.preventDefault();
        setDeleteClicked(false)

    }

    async function openConfirm(e) {
        e.preventDefault();
        setDeleteClicked(true)
    }


    return (
        <>
            <div className={styles["outside-container"]}>
                <Navbar />
                <div className={styles["edit-profile-outside-container"]}>
                    <div className={styles["edit-profile-container"]}>
                        <div className={styles["image-username-container"]}>
                            <img className={styles["user-image"]} src={userImage} alt="profile" />
                            <p className={styles["user-username"]}>{userUsername}</p>
                        </div>
                        <div className={styles["form-container"]}>
                            <form method="POST" onSubmit={onSubmitForm}>
                                <div className={styles["input-container"]}>
                                    <label htmlFor="username" className={styles["label"]}>Username</label>
                                    <input type="text" name="username" id="username" className={`${styles["input"]} ${areInputsCorrect.username}`} value={formValues.username} onChange={onChangeHandler} onBlur={onBlurValidate} onClick={onClick} />
                                </div>
                                <div className={styles["input-container"]}>
                                    <label htmlFor="email" className={styles["label"]}>Email</label>
                                    <input type="text" name="email" id="email" className={`${styles["input"]} ${areInputsCorrect.email}`} value={formValues.email} onChange={onChangeHandler} onBlur={onBlurValidate} onClick={onClick} />
                                </div>
                                <div className={styles["description-container"]}>
                                    <label htmlFor="description" className={styles["description-label"]}>Description</label>
                                    <textarea maxLength={100} name="description" id="description" className={styles["description-input"]} value={formValues.description} onChange={onChangeHandler} />
                                </div>
                                <div className={styles["image-upload-container"]}>
                                    <label htmlFor="image-upload" className={styles["image-upload-label"]}>Image</label>
                                    <input className={styles["image-upload"]} type="file" accept=".png, .jpg, .jpeg" name="image-upload" id="image-upload" onChange={onUploadImage} />
                                </div>
                                <div className={styles["btns-container"]}>
                                    <button className={styles["delete-btn"]} type="button" onClick={openConfirm}>Delete</button>
                                    <button className={`${!isReadyForEdit() ? styles["disabled-btn"] : styles["submit-btn"]}`} type="submit" disabled={!isReadyForEdit() ? true : false}>Edit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {deleteClicked && <Confirm onModalClose={onModalClose} />}

        </>
    )
}