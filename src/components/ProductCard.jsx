import styles from "../styles/ProductCard.module.css";
import { useState } from "react";

export default function ProductCard({
    id,
    title,
    description,
    category,
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
