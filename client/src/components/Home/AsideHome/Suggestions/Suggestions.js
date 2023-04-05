import styles from "./suggestions.module.css";

import { useEffect, useState } from "react";

import * as userService from "../../../../services/userService";
import Suggestion from "./Suggestion/Suggestion"

export default function Suggestions({
    userId
}) {
    const [users, setUsers] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedUsers = await userService.getOneUserWithNonFollow(userId)
                setUsers(fetchedUsers)
            } catch (error) {
                console.log(error);
            }
         
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
                    : <p className={styles["no-suggestion"]}>No suggestions at the momment...</p>
                }

            </div>
        </>
    )
}