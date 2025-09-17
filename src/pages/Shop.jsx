import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import styles from "../styles/Shop.module.css";
import { useState, useEffect, useCallback } from "react";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState(null);
    const [placedProducts, setPlacedProducts] = useOutletContext();

    const getProducts = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            const products = await response.json();
            setProducts(products);
            setError(null);
        } catch (error) {
            setError(error);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    function handleAddToCart(id) {
        const product = products.find((p) => p.id === id);
        const newProduct = {...product, count: 1};
        setPlacedProducts({...placedProducts, [id]: newProduct});
    }

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return (
            <>
                <p className={styles.errorMessage}>
                    Something went wrong, <br />
                    Check your internet connection and try again.
                </p>
                <button className={styles.errorButton} onClick={getProducts}>
                    Try again
                </button>
            </>
        );
    }

    return (
        <div className={styles.shop}>
            <div className={styles.products}>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        onAddToCart={handleAddToCart}
                        isProductPlaced={product.id in placedProducts}
                        {...product}
                    />
                ))}
            </div>
        </div>
    );
}
