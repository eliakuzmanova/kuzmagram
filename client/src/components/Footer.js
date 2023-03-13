import footer from "../styles/footer.module.css";

export default function Footer() {
    return(
        
        <footer className={footer["footer"]}>
            <div className={footer["container-footer"]}>
        <p className={footer["copyright"]}>Copyright &#169; 2023 Elia Kuzmanova</p>
        </div>
        </footer>
    )
}