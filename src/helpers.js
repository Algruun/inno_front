export function formatPrice(cents, selectedCurrency) {
    if (selectedCurrency === 'USD') {
        return (cents / 100).toLocaleString("en-US", {
            style: "currency",
            currency: selectedCurrency
        })
    } else {
        return (cents * 0.92 / 100).toLocaleString("en", {
            style: "currency",
            currency: selectedCurrency
        })
    }
}

export function formatToppings(arr) {
    const joined = arr.join(', ');
    return joined.charAt(0).toUpperCase() + joined.slice(1);
}
