import Suggestion from "./Suggestion/Suggestion"
import { useEffect, useState } from "react";
import * as userService from "../../../../services/userService";
import styles from "./suggestions.module.css";

export default function Suggestions({
    userId
}) {
    const [users, setUsers] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            const fetchedUsers = await userService.getOneUserWithNonFollow(userId)
            console.log(fetchedUsers);
            setUsers(fetchedUsers)
        }
        fetchData();
    }, [userId])
    return (
        <>
            <div className={styles["suggestion-text-container"]}>
                <p className={styles["suggestion-text"]}>Suggestions for you</p>
            </div>
            <div className={styles["suggestion-container"]}>
                {users.length
                    ? users.map(user => <Suggestion key={user._id} user={user} />)
                    : ""
                }

            </div>
        </>
    )
}