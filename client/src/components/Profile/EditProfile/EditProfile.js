
import styles from "./edit-profile.module.css"
import {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { useAuthContext } from "../../../contexts/AuthContext";
import useForm from "../../../hooks/useForm";
import * as userService from "../../../services/userService";


export default function EditProfile() {
    const { userUsername, userEmail,userDescription, userImage, userId, onLogout } = useAuthContext()
 
    const {formValues, onChangeHandler} =useForm({
        username: userUsername,
        email: userEmail,
        description: userDescription,
    });
    const [uploadImage, setUploadImage] = useState(userImage)
    const navigate = useNavigate()

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
            const userInfo = await userService.getOneUser(formValues.email)
            onLogout()
        //    ' navigate(`/profile/${formValues.username}`)'
        } catch (error) {
            console.log(error);
        }

    }

    
    return (
        <div className={styles["outside-container"]}>
            <Navbar />
            <div className={styles["edit-profile-outside-container"]}>
                <div className={styles["edit-profile-container"]}>
                    <div className={styles["image-username-container"]}>
                        <img className={styles["user-image"]} src={`http://localhost:7070/${userImage}`} alt="profile" />
                        <p className={styles["user-username"]}>{userUsername}</p>
                    </div>
                    <div className={styles["form-container"]}>
                        <form method="POST" onSubmit={onSubmitForm}>
                            <div className={styles["input-container"]}>
                                <label htmlFor="username" className={styles["label"]}>Username</label>
                                <input type="text" name="username" id="username" className={styles["input"]} value={formValues.username} onChange={onChangeHandler}/>
                            </div>
                            <div className={styles["input-container"]}>
                                <label htmlFor="email" className={styles["label"]}>Email</label>
                                <input type="text" name="email" id="email" className={styles["input"]} value={formValues.email} onChange={onChangeHandler}/>
                            </div>
                            <div className={styles["description-container"]}>
                                <label htmlFor="description" className={styles["description-label"]}>Description</label>
                                <textarea maxLength={100} name="description" id="description" className={styles["description-input"]} value={formValues.description} onChange={onChangeHandler}/>
                            </div>
                            <div className={styles["image-upload-container"]}>
                                <label htmlFor="image-upload" className={styles["image-upload-label"]}>Image</label>
                                <input className={styles["image-upload"]} type="file" accept=".png, .jpg, .jpeg" name="image-upload" id="image-upload" onChange={onUploadImage} />
                            </div>
                            <div className={styles["btns-container"]}>
                                <button className={styles["delete-btn"]} type="button">Delete</button>
                                <button className={styles["submit-btn"]} type="submit">Edit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}