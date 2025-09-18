export function getNumberOfProducts(products) {
    let sum = 0;

    for (const key in products) {
        sum += products[key].count;
    }

    return sum;
}

export function getTotalPrice(products) {
    let sum = 0;

    for (const key in products) {
        sum += products[key].count * products[key].price;
    }

    return sum;
}