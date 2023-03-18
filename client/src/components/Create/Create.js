import { useState } from "react"
import styles from "./create.module.css"

export default function Create() {
    const [image, setImage] = useState("")

    function onUploadImage(e){
        e.preventDefault()
        setImage(e.target.files[0])
        console.log(image);
    }

    function onSubmitForm(e){
        e.preventDefault()
        const formData = new FormData();
        formData.append("image", image);
        console.log(image);
       const uploadedImage = fetch("http://localhost:7070/create", {
            method: "POST",
            body: formData
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })

    }

    return (
        <>
        <form action="/create" className={styles["form-image"]} onSubmit={onSubmitForm}>
            <input type="file" accept=".png, .jpg, .jpeg" name="image" onChange={onUploadImage}></input>
            <input type="submit"></input>
        </form>
        
            {image && <img src= {image} alt="image" />}
        </>
    )

}