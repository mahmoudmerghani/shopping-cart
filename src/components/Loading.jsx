import styles from "../styles/Loading.module.css";

export default function Loading() {
    return (
        <div className={styles.loading}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
        </div>
    );
}