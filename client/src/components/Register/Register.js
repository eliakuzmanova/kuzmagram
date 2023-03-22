
import styles from "./register.module.css";
// import * as authService from "../../services/authService"
import { Link } from "react-router-dom"
import Footer from "../Footer/Footer";
import useForm from "../../hooks/useForm"
import { useState } from "react";
import * as authService from "../../services/authService"

export default function Register({ userLogin }) {

    const { formValues, onChangeHandler } = useForm({
        username: "",
        email: "",
        password: "",
        "confirm-password": "",
    });

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

        if (e.target.name === "username") {
            if (/^[a-z0-9_\.]{3,12}$/.test(formValues.username)) {
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
            if (formValues.password === formValues["confirm-password"] && formValues["confirm-password"] !== "") {
                setAreInputsCorrect(state => ({ ...state, ["confirm-password"]: styles["correct-input"] }))
            } else {
                setAreInputsCorrect(state => ({ ...state, ["confirm-password"]: styles["incorrect-input"] }))
            }
        }

    }

    function onClick(e) {
        setAreInputsCorrect(state => ({ ...state, [e.target.name]: "" }))
    }

    async function onSubmitHandler(e) {
        e.preventDefault();

        const result = await authService.register(formValues.username, formValues.email, formValues.password)
            userLogin(formValues.email, formValues.password)

        
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

                            <label className={styles["label"]} >Username</label>
                            <input className={`${styles["input"]} ${areInputsCorrect.username}`} type="text" name="username" id="username" placeholder="example7" value={formValues.username} onChange={onChangeHandler} onBlur={onBlurValidate} onClick={onClick} />

                            <label className={styles["label"]} >Email</label>
                            <input className={`${styles["input"]} ${areInputsCorrect.email}`} type="text" name="email" id="email" placeholder="example@gmail.com" value={formValues.email} onChange={onChangeHandler} onBlur={onBlurValidate} onClick={onClick} />

                            <label className={styles["label"]} >Password</label>
                            <input className={`${styles["input"]} ${areInputsCorrect.password}`} type="password" name="password" id="password" placeholder="******" value={formValues.password} onChange={onChangeHandler} onBlur={onBlurValidate} onClick={onClick} />

                            <label className={styles["label"]} >Confirm password</label>
                            <input className={`${styles["input"]} ${areInputsCorrect["confirm-password"]}`} type="password" name="confirm-password" id="confirm-password" placeholder="******" value={formValues["confirm-password"]} onChange={onChangeHandler} onBlur={onBlurValidate} onClick={onClick} />

                            <div className={styles["container-btn"]}>
                                <button className={`${styles["btn"]} ${!isReadyForRegister() && styles["disabled-btn"]}`} type="submit" disabled={!isReadyForRegister() ? true : false}>Register</button>
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