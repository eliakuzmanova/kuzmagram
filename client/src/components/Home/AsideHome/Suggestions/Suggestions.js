import Suggestion from "./Suggestion/Suggestion"

import styles from "./suggestions.module.css";

export default function Suggestions() {
    return(
        <>
        <div className={styles["suggestion-text-container"]}>
                <p className={styles["suggestion-text"]}>Suggestions for you</p>
            </div>
            <div className={styles["suggestion-container"]}>
                <Suggestion />
                <Suggestion />
                <Suggestion />
            </div>
        </>
    )
}