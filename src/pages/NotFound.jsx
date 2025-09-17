import { Link } from "react-router-dom";
import styles from "../styles/NotFound.module.css";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <p className={styles.message}>This page doesn't exist</p>
            <Link to="/" className={styles.link}>Go to Home page</Link>
        </div>
    );
}
