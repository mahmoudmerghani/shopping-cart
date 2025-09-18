import { useOutletContext } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import styles from "../styles/Cart.module.css";
import { getNumberOfProducts, getTotalPrice } from "../utils";

export default function Cart() {
    const [placedProducts, setPlacedProducts] = useOutletContext();

    function handleIncrement(id) {
        setPlacedProducts({
            ...placedProducts,
            [id]: {
                ...placedProducts[id],
                count: placedProducts[id].count + 1,
            },
        });
    }

    function handleDecrement(id) {
        if (placedProducts[id].count === 1) return;

        setPlacedProducts({
            ...placedProducts,
            [id]: {
                ...placedProducts[id],
                count: placedProducts[id].count - 1,
            },
        });
    }

    function handleDelete(id) {
        const newProducts = { ...placedProducts };
        delete newProducts[id];
        setPlacedProducts(newProducts);
    }

    if (Object.keys(placedProducts).length === 0) {
        return <p className={styles.emptyMessage}>Cart is empty</p>;
    }

    return (
        <div className={styles.cart}>
            {Object.values(placedProducts).map((product) => (
                <CartProduct
                    key={product.id}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onDelete={handleDelete}
                    {...product}
                />
            ))}
            <p>
                Subtotal ({getNumberOfProducts(placedProducts)} items):{" "}
                {getTotalPrice(placedProducts).toFixed(2)}$
            </p>
        </div>
    );
}
