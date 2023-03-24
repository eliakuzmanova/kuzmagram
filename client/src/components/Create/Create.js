import { useState } from "react"
import styles from "./create.module.css"
import { IoImageOutline } from "react-icons/io5";
import { HiOutlineXMark } from "react-icons/hi2";
import { useAuthContext } from '../../contexts/AuthContext';

export default function Create({
    onModalClose,
    image,
    setImage,
    setPostCreated
}) {
    const [imageName, setImageName] = useState("")
    const {userId} = useAuthContext()
    const [description, setDescription] = useState("")

    function onUploadImage(e) {
        e.preventDefault()
        setImage(e.target.files[0])

        setImageName(e.target.files[0].name)
    }

    function onDescriptionChange(e) {
        e.preventDefault()
        setDescription(e.target.value)
    }

    async function onSubmitForm(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append("image", image);
        formData.append("userId", userId);
        formData.append("description", description);
        try {
          const post = await fetch("http://localhost:7070/create", {
                method: "POST",
                body: formData
            })
            setPostCreated(post)
            onModalClose()
          
        } catch (error) {
            console.log(error);
        }

    }

    return (

        <div className={styles["modal"]}>
            < HiOutlineXMark className={styles["close-btn"]} onClick={onModalClose} />
            <div className={styles["modal-content"]}>
                <div className={styles["create-container"]}>
                    <div className={styles["icon-text-container"]}>
                        <IoImageOutline className={styles["icon"]} />
                        <p className={styles["text"]}>Post your photo so your friends can enjoy the moment with you!</p>
                    </div>
                    <form className={styles["form"]} action="/create" onSubmit={onSubmitForm}>
                        <div className={styles["input-image-container"]}>
                            <label className={styles["label-image"]} htmlFor="image">{image ? "Selected photo" : "Select your photo"}</label>
                            <input className={styles["input-image"]} type="file" accept=".png, .jpg, .jpeg" name="image" id="image" onChange={onUploadImage}></input>
                            {image && <p className={styles["image-name"]}>{imageName}</p>}
                        </div>
                        <div className={styles["description-container"]}>

                            <textarea className={styles["input"]} type="text" id="description" name="description" placeholder="Describe it..." value={description} onChange={onDescriptionChange}/>
                        </div>
                        <div className={styles["submit-btn-container"]}>
                            <button className={styles["submit-btn"]} type="submit">Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )

}