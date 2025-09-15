import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.home}>
            <p className={styles.title}>Welcome to our fake store.</p>
            <p className={styles.text}>You can browse products in the shop tab or by clicking on the button below.</p>
            <Link to="/shop" className={styles.button}>
                Go to Shop
            </Link>
        </div>
    );
}