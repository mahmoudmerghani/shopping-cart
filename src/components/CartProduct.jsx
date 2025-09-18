import styles from "../styles/CartProduct.module.css";

export default function CartProduct({
    id,
    title,
    description,
    image,
    price,
    count,
    onIncrement,
    onDecrement,
    onDelete,
}) {
    return (
        <div className={styles.cartProduct}>
            <div className={styles.image}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.info}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <div className={styles.controls}>
                    <div className={styles.counter}>
                        <button
                            className={styles.counterButton}
                            onClick={() => onDecrement(id)}
                        >
                            -
                        </button>
                        <p className={styles.counterText}>{count}</p>
                        <button
                            className={styles.counterButton}
                            onClick={() => onIncrement(id)}
                        >
                            +
                        </button>
                    </div>
                    <button
                        className={styles.deleteButton}
                        onClick={() => onDelete(id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
            <p className={styles.price}>{price}$</p>
        </div>
    );
}
