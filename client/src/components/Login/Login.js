import styles from "./login.module.css";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";

import { Link } from "react-router-dom"
import { useState } from "react";

import useForm from "../../hooks/useForm"
import { useAuthContext } from '../../contexts/AuthContext';
import Footer from "../Footer/Footer";


export default function Login() {
    const [isHiddenPassword, setIsHiddenPassword] = useState(true)
    const { onLogin } = useAuthContext()
    const { formValues, onChangeHandler } = useForm({
        email: "",
        password: "",
    });
    const [err, setErr] = useState("")

    async function onSubmitHandler(e) {
        e.preventDefault();

        const error = await onLogin(formValues.email, formValues.password)
        if (error) {
            setErr(error.message);
        } else {
            setErr("")
        }

    }

    function onHideError(e) {
        e?.preventDefault()
        if(err) {
            setErr("")
        } else {
            return
        }
    }

    function onEyeIconPassword(e) {
        e?.preventDefault()
        setIsHiddenPassword(state => !state)
   }

    return (
        <>
            <main className={styles["main"]}>
                <div className={styles["login-wrapper"]}>
                    <div className={styles["div-logo"]}>
                        <h1 className={styles["logo"]}>Kuzmagram</h1>
                        <p className={styles["text"]}>Sign in to see if you have new notifications or messages.</p>
                    </div>
                    <div className={styles["line"]}></div>

                    <form className={styles["form"]} method="POST" onSubmit={onSubmitHandler}>
                        <div className={styles["err-message-container"]}>
                            <p className={styles["err-message"]}>{err}</p>
                        </div>

                        <label className={styles["label"]} htmlFor="email">Email</label>
                        <input className={styles["input"]} type="text" name="email" id="email" placeholder="Enter your email..." value={formValues.email} onChange={onChangeHandler} onClick={onHideError} />

                        <label className={styles["label"]} htmlFor="password">Password</label>
                        <input className={`${styles["input"]} ${formValues.password.length > 0 ? styles["input-with-eye"]:""}`} type={isHiddenPassword?"password":"text"} name="password" id="password" placeholder="Enter your password..." value={formValues.password} onChange={onChangeHandler} onClick={onHideError} />
                        {formValues.password.length > 0 && (isHiddenPassword ?
                            <IoMdEyeOff className={`${styles["eye-icon"]}`} onClick={onEyeIconPassword} name="password-icon" /> 
                            : <IoMdEye className={`${styles["eye-icon"]}`} onClick={onEyeIconPassword}/>)}
                        <div className={styles["container-btn"]}>
                            <button className={styles["btn"]} type="submit">Login</button>
                        </div>
                        <div className={styles["container-sign-up"]}>
                            <p className={styles["paragraph-account"]}>You don't have an account?</p>
                            <Link className={styles["sign-up"]} to="/register">Sign up</Link>
                        </div>
                    </form>
                </div>
            </main>

            <Footer />
        </>
    )
}