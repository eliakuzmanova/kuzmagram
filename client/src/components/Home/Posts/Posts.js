import Post from "./Post/Post"
import styles from "./posts.module.css";

export default function Posts({posts}) {

    return (

        <main className={styles["main"]}>
            {posts.length
                ? posts.map(p => <Post key={p._id} clickedPost={p} />)
                : <div className={styles["no-posts-container"]}>
                    <h1 className={styles["no-posts-h1"]}>There are no posts yet...</h1>
                    <p className={styles["no-posts-p"]}>Follow your friends to see their posts here!</p>

                </div>
            }
        </main>
    )
}