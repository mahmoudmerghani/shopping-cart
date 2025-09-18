import styles from "../styles/ProductCard.module.css";

export default function ProductCard({
    id,
    title,
    description,
    price,
    rating,
    image,
    isProductPlaced,
    onAddToCart,
}) {
    return (
        <div className={styles.productCard}>
            <div className={styles.image}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.text}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description} title={description}>
                    {description}
                </p>
                <div className={styles.rating}>
                    <svg
                        className={styles.star}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        role="presentation"
                    >
                        <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
                    </svg>
                    <p>{rating.rate}/5 ({rating.count})</p>
                </div>
                <p className={styles.price}>{price}$</p>
            </div>
            <div className={styles.buttonContainer}>
                <button
                    className={styles.button}
                    disabled={isProductPlaced}
                    onClick={() => onAddToCart(id)}
                >
                    {isProductPlaced ? "Product added" : "Add to cart"}
                </button>
            </div>
        </div>
    );
}
