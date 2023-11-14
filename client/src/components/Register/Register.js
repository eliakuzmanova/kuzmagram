import styles from "./register.module.css";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";

import { Link } from "react-router-dom"
import { useState } from "react";

import useForm from "../../hooks/useForm"
import { useAuthContext } from '../../contexts/AuthContext';
import Footer from "../Footer/Footer";

export default function Register() {
    const [isHiddenPassword, setIsHiddenPassword] = useState(true)
    const [isHiddenConfPassword, setIsHiddenConfPassword] = useState(true)
    const { onLogin, onRegister } = useAuthContext()
    const { formValues, onChangeHandler } = useForm({
        username: "",
        email: "",
        password: "",
        "confirm-password": "",
    });
    const [err, setErr] = useState("")

    const [areInputsCorrect, setAreInputsCorrect] = useState({
        username: "",
        email: "",
        password: "",
        "confirm-password": ""
    })

    function isReadyForRegister() {

        let isReady = false;
        if (Object.values(areInputsCorrect).includes(styles["incorrect-input"])
            || Object.values(areInputsCorrect).includes("")) {
            isReady = false;
        } else {
            isReady = true;
        }

        return isReady
    }

    function onBlurValidate(e) {
        e.preventDefault();
        console.log(e.target.value);
        console.log(formValues);
      
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

        } else if (e.target.name === "password") {

            if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,20}$/.test(formValues.password)) {
                setAreInputsCorrect(state => ({ ...state, ["password"]: styles["correct-input"] }))
            } else {
                setAreInputsCorrect(state => ({ ...state, ["password"]: styles["incorrect-input"] }))
            }

        } else if (e.target.name === "confirm-password") {

            if ((formValues.password === formValues["confirm-password"]) && (formValues["confirm-password"] !== "")) {
                setAreInputsCorrect(state => ({ ...state, ["confirm-password"]: styles["correct-input"] }))
            } else {
                setAreInputsCorrect(state => ({ ...state, ["confirm-password"]: styles["incorrect-input"] }))
            }

        }
        if(formValues.password !== "") {
            if(formValues.password !== formValues["confirm-password"]){
                setAreInputsCorrect(state => ({ ...state, ["confirm-password"]: styles["incorrect-input"] }))
            } else {
                setAreInputsCorrect(state => ({ ...state, ["confirm-password"]: styles["correct-input"] }))
            }
        }
    }

    function onClick(e) {
        e?.preventDefault()
        setAreInputsCorrect(state => ({ ...state, [e.target.name]: "" }))
        if (err) {
            setErr("")
        } else {
            return
        }
    }

    async function onSubmitHandler(e) {
        e.preventDefault();

        const error = await onRegister(formValues.username, formValues.email, formValues.password)

        if (error) {
            setErr(error.message);
        } else {
            setErr("")
            await onLogin(formValues.email, formValues.password)
        }
    }

    function onEyeIconPassword(e) {
        e?.preventDefault()
        setIsHiddenPassword(state => !state)
    }
    function onEyeIconConfPass(e) {
        e?.preventDefault()
        setIsHiddenConfPassword(state => !state)
    }
    return (
        <div className={styles["top-container"]}>
            <main className={styles["main"]}>
                <div className={styles["register-wrapper"]}>
                    <div className={styles["div-logo"]}>
                        <h1 className={styles["logo"]}>Kuzmagram</h1>
                        <p className={styles["text"]}>Sign up to see your friends' photos and videos, or just to chat with them.</p>
                    </div>
                    <div className={styles["line"]}></div>
                    <form className={styles["form"]} method="POST" onSubmit={onSubmitHandler}>

                        <div className={styles["err-message-container"]}>
                            <p className={styles["err-message"]}>{err}</p>
                        </div>

                        <label className={styles["label"]} >Username</label>
                        <input className={`${styles["input"]} ${areInputsCorrect.username}`} type="text" name="username" id="username" placeholder="example7" value={formValues.username} onChange={onChangeHandler} onBlur={onBlurValidate} onClick={onClick} />

                        <label className={styles["label"]} >Email</label>
                        <input className={`${styles["input"]} ${areInputsCorrect.email}`} type="text" name="email" id="email" placeholder="example@gmail.com" value={formValues.email} onChange={onChangeHandler} onBlur={onBlurValidate} onClick={onClick} />

                        <label className={styles["label"]} >Password</label>
                        <input className={`${styles["input"]} ${formValues.password.length > 0 ? styles["input-with-eye"] : ""} ${areInputsCorrect.password}`} type={isHiddenPassword ? "password" : "text"} name="password" id="password" placeholder="******" value={formValues.password} onChange={onChangeHandler} onBlur={onBlurValidate} onClick={onClick} />
                        {formValues.password.length > 0 && (isHiddenPassword ?
                            <IoMdEyeOff className={`${styles["eye-icon"]}`} onClick={onEyeIconPassword} name="password-icon" />
                            : <IoMdEye className={`${styles["eye-icon"]}`} onClick={onEyeIconPassword} />)}
                        <label className={styles["label"]} >Confirm password</label>
                        <input className={`${styles["input"]} ${formValues["confirm-password"].length > 0 ? styles["input-with-eye"] : ""} ${areInputsCorrect["confirm-password"]}`} type={isHiddenConfPassword ? "password" : "text"} name="confirm-password" id="confirm-password" placeholder="******" value={formValues["confirm-password"]} onChange={onChangeHandler} onBlur={onBlurValidate} onClick={onClick} />
                        {formValues["confirm-password"].length > 0 && (isHiddenConfPassword ?
                            <IoMdEyeOff className={`${styles["eye-icon"]}`} onClick={onEyeIconConfPass} />
                            : <IoMdEye className={`${styles["eye-icon"]}`} onClick={onEyeIconConfPass} />)}
                        <div className={styles["container-btn"]}>
                            <button className={`${!isReadyForRegister() ? styles["disabled-btn"] : styles["btn"]}`} type="submit" disabled={!isReadyForRegister() ? true : false}>Register</button>
                        </div>
                        <div className={styles["container-sign-in"]}>
                            <p className={styles["paragraph-account"]}>You have an account?</p>
                            <Link className={styles["sign-in"]} to="/login">Sign in</Link>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    )

}
