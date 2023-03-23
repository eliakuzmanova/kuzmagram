import { Link } from "react-router-dom"
import styles from "./login.module.css";
import Footer from "../Footer/Footer";
import useForm from "../../hooks/useForm"
import { useAuthContext } from '../../contexts/AuthContext';
export default function Login() {
    const {onLogin} = useAuthContext()
    const {formValues, onChangeHandler} =useForm({
        email: "",
        password: "",
    });

    async function onSubmitHandler(e) {
        e.preventDefault();
       
        onLogin(formValues.email, formValues.password)

    }
    return(
<>
            <main className={styles["main"]}>
                <div className={styles["login-wrapper"]}>
                    <div className={styles["div-logo"]}>
                        <h1 className={styles["logo"]}>Kuzmagram</h1>
                        <p className={styles["text"]}>Sign in to see if you have new notifications or messages.</p>
                    </div>
                    <div className={styles["line"]}></div>
                    <form className={styles["form"]} method="POST" onSubmit={onSubmitHandler}>


                        <label className={styles["label"]} htmlFor="email">Email</label>
                        <input className={styles["input"]} type="text" name="email" id="email" placeholder="Enter your email..." value={formValues.email} onChange={onChangeHandler}/>

                        <label className={styles["label"]} htmlFor="password">Password</label>
                        <input className={styles["input"]} type="password" name="password" id="password" placeholder="Enter your password..." value={formValues.password} onChange={onChangeHandler} />
                            
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