import Post from "./Post/Post"
import styles from "./posts.module.css";

const photo1 = require("./../../../images/couple.jpg")
const photo2 = require("./../../../images/girl.jpg")
const photo3 = require("./../../../images/dog.jpg")
const photo4 = require("./../../../images/city.jpg")
const photo5 = require("./../../../images/palms.jpg")
const photo6 = require("./../../../images/restaurant.jpg")
const photo7 = require("./../../../images/laptop.jpg")

const photos = [photo1, photo2 , photo3, photo4, photo5, photo6 , photo7]

export default function Posts(){
    let i = 0;
    return(
        <main className={styles["main"]}>
             {photos.map(x => <Post key={i++} photo={x}/>)} 
            </main>
    )
}